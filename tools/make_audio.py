"""Genera un mp3 por página con las voces neuronales gratuitas de edge-tts.
Solo regenera las páginas cuyo texto ha cambiado. Escribe public/audio/manifest.json."""
import asyncio, hashlib, json, os, subprocess, sys
import edge_tts

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "public", "audio")
VOICES = {"ca": "ca-ES-JoanaNeural", "es": "es-ES-ElviraNeural", "en": "en-GB-SoniaNeural"}
RATE = {1: "-20%", 2: "-15%", 3: "-10%", 4: "-5%", 5: "-5%"}  # más lento en los cursos pequeños

def load():
    r = subprocess.run(["node", os.path.join(ROOT, "tools", "export_texts.js")], capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

async def one(it, sem):
    async with sem:
        f = os.path.join(OUT, it["key"] + ".mp3")
        for attempt in range(4):
            try:
                await edge_tts.Communicate(it["text"], VOICES[it["lang"]], rate=RATE.get(it["grade"], "-10%")).save(f)
                return
            except Exception as e:
                print("reintento", it["key"], e, file=sys.stderr); await asyncio.sleep(3 * (attempt + 1))
        raise SystemExit("no se pudo generar " + it["key"])

async def main():
    os.makedirs(OUT, exist_ok=True)
    mf = os.path.join(OUT, "manifest.json")
    old = json.load(open(mf)) if os.path.exists(mf) else {}
    items, new = load(), {}
    todo = []
    for it in items:
        h = hashlib.sha1((VOICES[it["lang"]] + RATE.get(it["grade"], "") + it["text"]).encode()).hexdigest()[:10]
        new[it["key"]] = {"f": f"audio/{it['key']}.mp3", "h": h}
        if old.get(it["key"], {}).get("h") != h or not os.path.exists(os.path.join(OUT, it["key"] + ".mp3")):
            todo.append(it)
    print(f"{len(items)} páginas, {len(todo)} por generar")
    sem = asyncio.Semaphore(4)
    await asyncio.gather(*(one(it, sem) for it in todo))
    for k in set(old) - set(new):  # libros borrados
        p = os.path.join(OUT, k + ".mp3")
        if os.path.exists(p): os.remove(p)
    json.dump(new, open(mf, "w"), indent=1, sort_keys=True)

asyncio.run(main())
