// Lee los libros álbum (1º a 5º) y escribe una lista de textos para convertir en audio.
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = path.join(__dirname, "..", "public", "books");
const ctx = {window: {}}; vm.createContext(ctx);
["primer.js", "segon.js", "tercer.js", "quart.js", "cinque.js"].forEach(f => {
  const p = path.join(dir, f); if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx, {filename: f});
});
const out = [];
(ctx.window.ALBUMS || []).forEach(a => a.pages.forEach((pg, i) => out.push({key: `${a.id}-${i + 1}`, lang: a.lang, grade: a.grade, text: pg.t})));
process.stdout.write(JSON.stringify(out, null, 1));
