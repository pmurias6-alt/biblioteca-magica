/* Llibres de 2n · format àlbum: una il·lustració i dues o tres frases per pàgina */
window.ALBUMS = (window.ALBUMS || []).concat([
{
  id: "ca2-nil", lang: "ca", subject: "Català", course: "2n", grade: 2, cover: "#2f7d6b", ext: "jpg",
  title: "En Nil i la llavor",
  blurb: "En Nil troba una llavor rodona i brillant. Què en sortirà, si la planta?",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Catalana i Literatura", cicle: "Cicle inicial"},
  tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.1 · 4.2 · 8.1", tipus: "Conte seqüencial (pas del temps)", vocabulari: "eriçó, llavor, regar, brot, paciència, gira-sol"},
  pages: [
    {t: "En Nil és un eriçó petit. Viu sota un roure molt vell.", alt: "Un eriçó petit i somrient davant del seu cau, sota un roure gros."},
    {t: "Un matí troba una llavor rodona i brillant. «Què deu ser?», pensa.", alt: "L'eriçó mira una llavor ratllada que té entre les potes."},
    {t: "En Nil fa un forat a terra i hi planta la llavor. Després la tapa amb compte.", alt: "L'eriçó posa la llavor dins d'un forat petit a terra."},
    {t: "Cada dia la rega amb una mica d'aigua. Però no surt res, i en Nil s'impacienta.", alt: "L'eriçó rega la terra amb una regadora petita i fa cara de preocupat."},
    {t: "—Tingues paciència —li diu la marieta—. Les llavors necessiten temps.", alt: "Una marieta vermella parla amb l'eriçó damunt d'una pedra."},
    {t: "Una setmana després surt un brot verd i petit. En Nil salta d'alegria!", alt: "Un brot verd surt de terra i l'eriçó salta content."},
    {t: "El brot creix i creix. Aviat és més alt que en Nil.", alt: "La planta ja és més alta que l'eriçó, que la mira cap amunt."},
    {t: "Un dia s'obre una flor groga i enorme. És un gira-sol! Ara en Nil hi fa la migdiada a l'ombra.", alt: "L'eriçó dorm a l'ombra d'un gira-sol gros i groc."}
  ],
  questions: [
    {type: "literal", q: "Què troba en Nil un matí?", options: [
      {t: "Una llavor", ok: true, why: "Un matí troba una llavor rodona i brillant."},
      {t: "Una pedra", why: "No és una pedra: és rodona i brillant, i després la planta."},
      {t: "Una fulla", why: "Torna a llegir la pàgina 2: troba una altra cosa."}]},
    {type: "literal", q: "Qui li diu que tingui paciència?", options: [
      {t: "La marieta", ok: true, why: "La marieta li diu: «Tingues paciència»."},
      {t: "El roure", why: "El roure és l'arbre on viu en Nil. No parla."},
      {t: "El gira-sol", why: "El gira-sol encara no ha crescut quan li ho diuen."}]},
    {type: "vocab", q: "Què vol dir «regar»?", options: [
      {t: "Donar aigua a una planta", ok: true, why: "En Nil rega la llavor amb una mica d'aigua."},
      {t: "Tallar una planta", why: "En Nil no talla res: hi posa aigua cada dia."},
      {t: "Amagar una cosa", why: "Mira el dibuix de la pàgina 4: què fa amb la regadora?"}]},
    {type: "infer", q: "Per què en Nil salta d'alegria?", options: [
      {t: "Perquè per fi surt el brot", ok: true, why: "Feia dies que esperava i, per fi, la llavor ha crescut."},
      {t: "Perquè comença a ploure", why: "El conte no diu que plogui. En Nil mira el brot."},
      {t: "Perquè ha trobat menjar", why: "En Nil no busca menjar. Està content pel brot."}]}
  ]
},
{
  id: "es2-lola", lang: "es", subject: "Castellano", course: "2º", grade: 2, cover: "#b8492f", ext: "jpg",
  title: "La cometa de Lola",
  blurb: "Lola estrena cometa, pero no hay ni una pizca de viento. ¿Conseguirá que vuele?",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Castellana i Literatura", cicle: "Cicle inicial"},
  tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.1 · 4.2 · 8.1", tipus: "Conte amb problema i solució", vocabulari: "cometa, prado, colina, ráfaga, enredarse, urraca"},
  pages: [
    {t: "Lola es una gata muy curiosa. Hoy estrena una cometa azul con una cola muy larga.", alt: "Una gata naranja sonríe con una cometa azul en las manos."},
    {t: "Lola corre por el prado, pero la cometa no sube. ¡No hay nada de viento!", alt: "La gata corre por un prado y la cometa se arrastra por el suelo."},
    {t: "—Sube a la colina —le dice su amigo Tomás, el topo—. Allí siempre sopla el viento.", alt: "Un topo con gafas asoma de su agujero y señala una colina."},
    {t: "Lola sube y sube. La colina es alta y Lola llega cansada.", alt: "La gata sube una colina con la cometa bajo el brazo, cansada."},
    {t: "De pronto sopla una ráfaga. ¡La cometa vuela muy alto, entre las nubes!", alt: "La cometa azul vuela muy alto y la gata sujeta el hilo, feliz."},
    {t: "Pero el hilo se enreda en un árbol. Lola tira y tira, y la cometa no baja.", alt: "La cometa está enredada en las ramas de un árbol y la gata tira del hilo."},
    {t: "Una urraca la ve desde su nido. Con el pico, desenreda el hilo poco a poco.", alt: "Una urraca blanca y negra desenreda el hilo de la cometa con el pico."},
    {t: "—¡Gracias! —dice Lola. Ahora las dos amigas hacen volar la cometa juntas.", alt: "La gata y la urraca hacen volar la cometa juntas en lo alto de la colina."}
  ],
  questions: [
    {type: "literal", q: "¿De qué color es la cometa de Lola?", options: [
      {t: "Azul", ok: true, why: "Lola estrena una cometa azul."},
      {t: "Roja", why: "Mira la cometa en los dibujos. No es roja."},
      {t: "Verde", why: "Vuelve a leer la página 1: dice de qué color es."}]},
    {type: "literal", q: "¿Quién desenreda el hilo?", options: [
      {t: "La urraca", ok: true, why: "La urraca desenreda el hilo con el pico."},
      {t: "Tomás, el topo", why: "Tomás le dice que suba a la colina, pero no desenreda el hilo."},
      {t: "Lola", why: "Lola tira y tira, pero no lo consigue sola."}]},
    {type: "vocab", q: "¿Qué es una «ráfaga»?", options: [
      {t: "Un golpe de viento fuerte y corto", ok: true, why: "Sopla una ráfaga y la cometa sube muy alto."},
      {t: "Una nube muy grande", why: "Las nubes no soplan. Fíjate en qué hace volar la cometa."},
      {t: "Un hilo muy largo", why: "El hilo es lo que Lola sujeta. La ráfaga es otra cosa."}]},
    {type: "infer", q: "¿Por qué la cometa no sube al principio?", options: [
      {t: "Porque en el prado no hay viento", ok: true, why: "Sin viento, una cometa no puede volar."},
      {t: "Porque está rota", why: "La cometa es nueva y después vuela muy bien."},
      {t: "Porque Lola no quiere correr", why: "Lola sí corre por el prado, y aun así no sube."}]}
  ]
},
{
  id: "en2-milo", lang: "en", subject: "English", course: "2n", grade: 2, cover: "#5b4bc4", ext: "jpg",
  title: "Milo's Red Hat",
  blurb: "It is cold and Milo can't find his red hat. Where is it?",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Estrangera (anglès)", cicle: "Cicle inicial"},
  tags: {competencies: "CE4 Comprensió escrita · CE7 Lectura autònoma", criteris: "4.1 · 4.2", tipus: "Conte amb pregunta repetida · has got, can't, Is it…?, prepositions", vocabulari: "penguin, hat, bed, box, snowman, cold, under, in"},
  pages: [
    {t: "This is Milo. Milo is a penguin. He has got a red hat.", alt: "A small penguin with a red woolly hat smiles."},
    {t: "It is a cold morning. Milo can't find his hat. “Where is my hat?”", alt: "The penguin, without his hat, looks around his bedroom."},
    {t: "Is it under the bed? No, it isn't.", alt: "The penguin looks under the bed. There are only slippers."},
    {t: "Is it in the big box? No, it isn't.", alt: "The penguin looks inside a big toy box. There is no hat."},
    {t: "Milo goes outside. It is snowing.", alt: "The penguin opens the door. Outside it is snowing."},
    {t: "Look! His sister has got a snowman. The snowman has got a red hat!", alt: "A little penguin girl stands next to a snowman wearing the red hat."},
    {t: "“That's my hat!” says Milo. But the snowman looks cold.", alt: "The penguin points at the hat on the snowman."},
    {t: "Milo gives his hat to the snowman. Mum gives Milo a new blue hat. Everybody is happy!", alt: "The penguin wears a new blue hat next to his mum, his sister and the snowman."}
  ],
  questions: [
    {type: "literal", q: "What colour is Milo's hat?", options: [
      {t: "Red", ok: true, why: "Milo has got a red hat."},
      {t: "Green", why: "Look at the pictures. The hat is not green."},
      {t: "Yellow", why: "Read page 1 again: it says the colour."}]},
    {type: "literal", q: "Where is the hat?", options: [
      {t: "On the snowman", ok: true, why: "The snowman has got the red hat."},
      {t: "Under the bed", why: "Is it under the bed? No, it isn't."},
      {t: "In the big box", why: "Is it in the big box? No, it isn't."}]},
    {type: "vocab", q: "It is snowing. Is it hot or cold?", options: [
      {t: "It is cold", ok: true, why: "Snow is cold. It is a cold morning."},
      {t: "It is hot", why: "Snow is not hot. Look at the picture on page 5."},
      {t: "It is sunny", why: "It is snowing, so it is not sunny."}]},
    {type: "infer", q: "Why does Milo give his hat to the snowman?", options: [
      {t: "Because the snowman looks cold", ok: true, why: "Milo is kind. The snowman looks cold."},
      {t: "Because the hat is too big", why: "The story doesn't say the hat is big."},
      {t: "Because Milo doesn't like red", why: "Milo likes his hat. He says “That's my hat!”"}]}
  ]
}
]);
