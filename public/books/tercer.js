/* Llibres de 3r · format àlbum: una il·lustració i tres o quatre frases per pàgina.
   Textos escrits; il·lustracions pendents (img/ca3-ona-1..8, es3-bruno-1..8, en3-zip-1..8). */
window.ALBUMS = (window.ALBUMS || []).concat([
{
  id: "ca3-ona", lang: "ca", subject: "Català", course: "3r", grade: 3, cover: "#c9922b", ext: "jpg",
  title: "L'Ona i el far",
  blurb: "Una nit de tempesta, el far s'apaga. Només l'Ona sap què fer.",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Catalana i Literatura", cicle: "Cicle mitjà"},
  tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.1 · 4.2 · 8.1", tipus: "Conte amb problema i solució", vocabulari: "far, tempesta, fanaler, vaixell, escala, senyal"},
  pages: [
    {t: "L'Ona viu en un poble de pescadors, a prop del mar. El seu avi és el fanaler: cada vespre encén el gran far de la costa. Així els vaixells saben on són les roques.", alt: "Una nena i un avi davant d'un far blanc i vermell, al capvespre."},
    {t: "Aquell dia l'avi té febre i s'ha d'estar al llit. «No et preocupis, avi», diu l'Ona. «Ho faré jo.» L'avi li dóna la clau del far.", alt: "L'avi al llit, malalt, dóna una clau gran a la nena."},
    {t: "Fora, el vent bufa cada cop més fort. El cel es posa negre i comença a ploure a bots i barrals. Ve una gran tempesta.", alt: "Un cel negre, onades altes i pluja damunt del poble."},
    {t: "L'Ona puja corrent les cent escales del far. A dalt, la llum no s'encén! Un llamp ha trencat el cable.", alt: "La nena a dalt del far, amb una llum apagada i un cable trencat."},
    {t: "Al mar, el vaixell del senyor Pere s'acosta a les roques. Ell no veu la costa i té por. Algú ha d'avisar-lo ràpid.", alt: "Un vaixell petit enmig d'onades, molt a prop d'unes roques fosques."},
    {t: "L'Ona pensa i pensa. Aleshores veu un mirall gran a la paret i la llanterna de l'avi. Té una idea!", alt: "La nena mira un mirall rodó i una llanterna damunt d'una taula."},
    {t: "Posa la llanterna davant del mirall i fa senyals cap al mar: llum llarga, llum curta, llum llarga. El feix de llum travessa la fosca.", alt: "Un feix de llum surt de la finestra del far cap al mar."},
    {t: "El senyor Pere veu la llum i gira el timó. El vaixell esquiva les roques i arriba al port sa i estalvi. L'avi, des de la finestra, somriu: «Ets la millor fanalera del món».", alt: "El vaixell entra al port i l'avi saluda des d'una finestra amb la nena."}
  ],
  questions: [
    {type: "literal", q: "Per què no encén el far l'avi?", options: [
      {t: "Perquè té febre i és al llit", ok: true, why: "A la pàgina 2 diu que l'avi té febre i s'ha d'estar al llit."},
      {t: "Perquè ha perdut la clau", why: "L'avi té la clau i la dóna a l'Ona."},
      {t: "Perquè ha anat a pescar", why: "L'avi no surt de casa: és malalt."}]},
    {type: "literal", q: "Què passa quan l'Ona arriba a dalt del far?", options: [
      {t: "La llum no s'encén perquè el cable està trencat", ok: true, why: "Un llamp ha trencat el cable i la llum no funciona."},
      {t: "El vaixell ja ha arribat al port", why: "El vaixell encara és al mar, a prop de les roques."},
      {t: "Es troba el senyor Pere", why: "El senyor Pere és dins del vaixell, no al far."}]},
    {type: "vocab", q: "Què fa un «fanaler»?", options: [
      {t: "Cuida el far i l'encén cada vespre", ok: true, why: "L'avi és el fanaler: encén el far perquè els vaixells vegin la costa."},
      {t: "Condueix vaixells de pesca", why: "Això ho fa un pescador o un capità. El fanaler cuida el far."},
      {t: "Repara cables elèctrics", why: "L'Ona veu un cable trencat, però el fanaler cuida el far."}]},
    {type: "infer", q: "Per què l'avi diu que l'Ona és «la millor fanalera del món»?", options: [
      {t: "Perquè ha salvat el vaixell amb la seva idea", ok: true, why: "Amb el mirall i la llanterna ha fet senyals i el vaixell s'ha salvat."},
      {t: "Perquè ha reparat el cable del far", why: "El conte no diu que arregli el cable: fa servir un mirall i una llanterna."},
      {t: "Perquè no té por de la pluja", why: "El conte no parla de la por de l'Ona. L'avi la lloa per la seva idea."}]}
  ]
},
{
  id: "es3-bruno", lang: "es", subject: "Castellano", course: "3º", grade: 3, cover: "#a96f1e", ext: "jpg",
  title: "El mapa de Bruno",
  blurb: "Bruno encuentra un mapa viejo dentro de un libro de la biblioteca. ¿Qué tesoro esconderá?",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Castellana i Literatura", cicle: "Cicle mitjà"},
  tags: {competencies: "CE4 Comprensión escrita · CE8 Lectura literaria", criteris: "4.1 · 4.2 · 8.1", tipus: "Cuento de misterio con pistas", vocabulari: "mapa, pista, biblioteca, brújula, escalera, tesoro"},
  pages: [
    {t: "Bruno es un niño al que le encantan los misterios. Un sábado va a la biblioteca de su barrio. Busca un libro sobre piratas.", alt: "Un niño con gorra mira estantes llenos de libros en una biblioteca."},
    {t: "Entre las páginas de un libro viejo cae un papel doblado. Es un mapa dibujado a mano, con una cruz roja y una frase: «Empieza donde duermen las palabras».", alt: "Un niño sostiene un mapa viejo con una cruz roja que se cae de un libro."},
    {t: "Bruno piensa: «¿Dónde duermen las palabras?». Mira alrededor. ¡En los libros! Primera pista: la estantería más alta, donde nadie llega sin escalera.", alt: "El niño mira hacia una estantería muy alta con una escalera al lado."},
    {t: "Sube con cuidado por la escalera. Detrás de un diccionario encuentra otra nota: «Ahora busca el árbol que da sombra a los lectores».", alt: "El niño sube por una escalera y saca una nota de detrás de un libro gordo."},
    {t: "En el patio de la biblioteca hay un gran olivo con bancos debajo. Bruno cuenta tres pasos desde el tronco hacia el norte, como dice el mapa. Su brújula le ayuda.", alt: "El niño con una brújula en la mano cerca de un olivo grande."},
    {t: "Allí, la tierra está algo removida. Bruno cava con las manos y toca una caja de lata. Pesa poco y suena: ¡clic, clic!", alt: "El niño saca una caja de lata pequeña de debajo de la tierra."},
    {t: "Dentro no hay oro ni joyas. Hay un cuaderno con una carta: «Para quien tenga ganas de buscar. Yo guardé aquí mis mejores cuentos de cuando era niña».", alt: "La caja abierta muestra un cuaderno viejo y una carta doblada."},
    {t: "La bibliotecaria sonríe al verlo: «Era mi cuaderno. Lo escondí hace muchos años». Bruno entiende que el verdadero tesoro eran las historias. Y pide permiso para leerlas en voz alta.", alt: "Una bibliotecaria mayor y el niño sonríen sobre el cuaderno abierto."}
  ],
  questions: [
    {type: "literal", q: "¿Dónde encuentra Bruno el mapa?", options: [
      {t: "Dentro de un libro viejo de la biblioteca", ok: true, why: "Cae un papel doblado de entre las páginas de un libro viejo."},
      {t: "En el patio, debajo del olivo", why: "Debajo del olivo encuentra la caja, no el mapa."},
      {t: "En su casa, debajo de la cama", why: "Bruno encuentra el mapa en la biblioteca."}]},
    {type: "literal", q: "¿Qué hay dentro de la caja de lata?", options: [
      {t: "Un cuaderno con cuentos y una carta", ok: true, why: "Dentro hay un cuaderno y una carta, no oro ni joyas."},
      {t: "Monedas de oro", why: "El texto dice claramente que no hay oro ni joyas."},
      {t: "Otro mapa con una cruz roja", why: "No hay otro mapa: hay un cuaderno y una carta."}]},
    {type: "vocab", q: "¿Qué es una «pista» en un misterio?", options: [
      {t: "Una señal que ayuda a descubrir algo", ok: true, why: "Las notas llevan a Bruno de un lugar al siguiente hasta el tesoro."},
      {t: "Un lugar donde se juega al fútbol", why: "Aquí «pista» no es un campo de juego: son notas que ayudan a Bruno."},
      {t: "Un tipo de libro de piratas", why: "Las pistas son notas y frases del mapa, no libros."}]},
    {type: "infer", q: "¿Por qué dice el texto que «el verdadero tesoro eran las historias»?", options: [
      {t: "Porque lo que había en la caja eran cuentos que alguien quiso guardar", ok: true, why: "La caja guardaba cuentos y eso era valioso para quien la escondió y para Bruno."},
      {t: "Porque Bruno no encontró nada y se enfadó", why: "Bruno no se enfada: está contento y pide leer los cuentos."},
      {t: "Porque la bibliotecaria le regala dinero", why: "El texto no habla de dinero. Habla de leer las historias."}]}
  ]
},
{
  id: "en3-zip", lang: "en", subject: "English", course: "3rd", grade: 3, cover: "#8a5a14", ext: "jpg",
  title: "Zip and the Rainy Day",
  blurb: "Zip is a little robot who loves the sun. What happens when it rains all week?",
  curriculum: {decret: "Decret 175/2022", area: "Llengües estrangeres", cicle: "Cicle mitjà"},
  tags: {competencies: "CE2 Reading comprehension · CE5 Literary reading", criteris: "2.1 · 2.2", tipus: "Story with problem and solution", vocabulary: "robot, rain, umbrella, puddle, rust, garden"},
  pages: [
    {t: "Zip is a small robot. He lives in a little house with a big garden. Every morning he waters the flowers and says hello to the bees.", alt: "A small friendly robot watering colorful flowers in a sunny garden."},
    {t: "One Monday, dark clouds come. Plip, plop, plip! It starts to rain. Zip looks out of the window and feels sad.", alt: "The robot looks sadly through a window at grey clouds and rain."},
    {t: "It rains on Tuesday. It rains on Wednesday too. Zip cannot go out because water is bad for robots. He stays inside and counts raindrops.", alt: "The robot sits near the window counting raindrops on the glass."},
    {t: "On Thursday, Zip hears a tiny voice outside. «Help! Help!» It is a little frog. His home is full of water and he is wet and cold.", alt: "A small green frog shivers in a puddle by the robot's front door."},
    {t: "Zip wants to help, but he is afraid of the rain. Then he has an idea. He finds a big yellow umbrella in a cupboard.", alt: "The robot takes a big yellow umbrella out of a cupboard."},
    {t: "Zip opens the umbrella and walks into the garden. Splish, splash! He jumps over the puddles very carefully and keeps dry.", alt: "The robot under a yellow umbrella steps over puddles in the garden."},
    {t: "He picks up the frog and puts him under the umbrella. Together they go back to the house. Zip makes a warm bed with a soft towel.", alt: "The robot and the frog walk under the umbrella to the house."},
    {t: "On Friday the sun comes back. The frog says, «Thank you, Zip!» and jumps into the pond. Zip smiles. Now he has a new friend who loves rainy days.", alt: "The sunny garden, the robot waving and the frog smiling on a pond leaf."}
  ],
  questions: [
    {type: "literal", q: "Why does Zip stay inside during the rain?", options: [
      {t: "Because water is bad for robots", ok: true, why: "The story says Zip cannot go out because water is bad for robots."},
      {t: "Because he is sleepy", why: "Zip is not sleepy. He counts raindrops."},
      {t: "Because the bees are in his house", why: "The bees are in the garden. The story does not say they are in his house."}]},
    {type: "literal", q: "Who needs help on Thursday?", options: [
      {t: "A little frog", ok: true, why: "A tiny voice shouts «Help!» and it is a little frog."},
      {t: "A bee", why: "A bee is not in the story on Thursday. Zip meets a frog."},
      {t: "A cat", why: "There is no cat in this story."}]},
    {type: "vocab", q: "What is an «umbrella»?", options: [
      {t: "Something you hold over your head when it rains", ok: true, why: "Zip uses it to stay dry in the rain."},
      {t: "A small bed for a frog", why: "The frog gets a towel bed, but that is not an umbrella."},
      {t: "A tool to water flowers", why: "Zip waters the flowers with water, not with an umbrella."}]},
    {type: "infer", q: "How does Zip feel at the end of the story?", options: [
      {t: "Happy, because he helped a friend", ok: true, why: "He smiles and has a new friend who loves rainy days."},
      {t: "Afraid of the rain again", why: "At the end the sun is out, and Zip smiles."},
      {t: "Angry with the frog", why: "The frog says thank you and Zip smiles. He is not angry."}]}
  ]
}
]);
