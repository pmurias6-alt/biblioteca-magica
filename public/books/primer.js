/* Llibres de 1r · format àlbum: una il·lustració i una o dues frases curtes per pàgina */
window.ALBUMS = [
{
  id: "ca1-rita", coverPos: "20% 50%", lang: "ca", subject: "Català", course: "1r", grade: 1, cover: "#2f7d6b", ext: "jpg",
  title: "La Rita i el paraigua vermell",
  blurb: "Plou, i tothom té fred. Sort que la Rita té un paraigua ben gros.",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Catalana i Literatura", cicle: "Cicle inicial"},
  tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.1 · 8.1", tipus: "Conte acumulatiu amb repetició", vocabulari: "granota, paraigua, ratolí, ocell, conill, quatre"},
  pages: [
    {t: "Aquesta és la Rita. La Rita és una granota.", alt: "Una granota verda petita somriu al costat d'un estany."},
    {t: "La Rita té un paraigua vermell.", alt: "La granota ensenya un paraigua vermell tancat."},
    {t: "Plou! La Rita obre el paraigua.", alt: "Plou i la granota obre el paraigua vermell."},
    {t: "—Tinc fred! —diu el ratolí.\n—Vine! —diu la Rita.", alt: "Un ratolí gris moll s'acosta al paraigua de la granota."},
    {t: "—Tinc fred! —diu l'ocell.\n—Vine! —diu la Rita.", alt: "Un ocell blau moll s'acosta; la granota i el ratolí són sota el paraigua."},
    {t: "—Tinc fred! —diu el conill.\n—Vine! —diu la Rita.", alt: "Un conill blanc moll s'acosta; la granota, el ratolí i l'ocell són sota el paraigua."},
    {t: "Ara són quatre amics sota el paraigua.", alt: "La granota, el ratolí, l'ocell i el conill, ben junts i contents sota el paraigua vermell."},
    {t: "Surt el sol. Mira, l'arc de Sant Martí!", alt: "Surt el sol i els quatre amics miren l'arc de Sant Martí."}
  ],
  questions: [
    {type: "literal", q: "De quin color és el paraigua?", options: [
      {t: "Vermell", ok: true, why: "La Rita té un paraigua vermell."},
      {t: "Blau", why: "Mira el paraigua de la Rita. No és blau."},
      {t: "Groc", why: "Mira el paraigua de la Rita. No és groc."}]},
    {type: "literal", q: "Qui diu «Vine!»?", options: [
      {t: "La Rita", ok: true, why: "La Rita diu «Vine!» als seus amics."},
      {t: "El conill", why: "El conill diu «Tinc fred!»."},
      {t: "L'ocell", why: "L'ocell diu «Tinc fred!»."}]},
    {type: "literal", q: "Quants amics hi ha sota el paraigua?", options: [
      {t: "Quatre", ok: true, why: "La Rita, el ratolí, l'ocell i el conill: quatre."},
      {t: "Dos", why: "Compta'ls: la Rita, el ratolí, l'ocell i el conill."},
      {t: "Tres", why: "Compta'ls: la Rita, el ratolí, l'ocell i el conill."}]}
  ]
},
{
  id: "es1-calcetin", lang: "es", subject: "Castellano", course: "1º", grade: 1, cover: "#b8492f", ext: "jpg",
  title: "¿Dónde está mi calcetín?",
  blurb: "Bruno tiene un calcetín azul. ¿Dónde está el otro?",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Castellana i Literatura", cicle: "Cicle inicial"},
  tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.1 · 8.1", tipus: "Conte amb pregunta i resposta repetides", vocabulari: "oso, calcetín, cama, caja, silla, perro, dos"},
  pages: [
    {t: "Este es Bruno. Bruno es un oso pequeño.", alt: "Un osito marrón saluda en su habitación."},
    {t: "Bruno tiene un calcetín azul. ¿Y el otro?", alt: "El osito sostiene un calcetín azul y tiene un pie descalzo."},
    {t: "¿Está en la cama? No.", alt: "El osito levanta la manta de la cama y no hay nada."},
    {t: "¿Está en la caja? No.", alt: "El osito mira dentro de una caja de juguetes."},
    {t: "¿Está en la silla? No.", alt: "El osito mira debajo de una silla."},
    {t: "Bruno mira a su perro Tito.", alt: "El osito mira a un perrito blanco que esconde algo en su cesta."},
    {t: "¡Tito tiene el calcetín!", alt: "El perrito blanco tiene el calcetín azul en la boca y mueve la cola."},
    {t: "Ahora Bruno tiene dos calcetines. ¡Gracias, Tito!", alt: "El osito, con dos calcetines azules, abraza al perrito."}
  ],
  questions: [
    {type: "literal", q: "¿De qué color es el calcetín?", options: [
      {t: "Azul", ok: true, why: "Bruno tiene un calcetín azul."},
      {t: "Rojo", why: "Mira el calcetín de Bruno. No es rojo."},
      {t: "Verde", why: "Mira el calcetín de Bruno. No es verde."}]},
    {type: "literal", q: "¿Quién tiene el calcetín?", options: [
      {t: "El perro Tito", ok: true, why: "¡Tito tiene el calcetín!"},
      {t: "Un gato", why: "En el cuento no hay ningún gato."},
      {t: "Un pájaro", why: "En el cuento no hay ningún pájaro."}]},
    {type: "literal", q: "¿Cuántos calcetines tiene Bruno al final?", options: [
      {t: "Dos", ok: true, why: "Ahora Bruno tiene dos calcetines."},
      {t: "Uno", why: "Al principio tiene uno. Al final tiene los dos."},
      {t: "Tres", why: "Cuéntalos: uno y otro. Son dos."}]}
  ]
},
{
  id: "en1-pip", lang: "en", subject: "English", course: "1r", grade: 1, cover: "#5b4bc4", ext: "jpg",
  title: "Pip and the Big Puddle",
  blurb: "Pip has got yellow boots. Look! A big puddle!",
  curriculum: {decret: "Decret 175/2022", area: "Llengua Estrangera (anglès)", cicle: "Cicle inicial"},
  tags: {competencies: "CE4 Comprensió escrita · CE7 Lectura autònoma", criteris: "4.1", tipus: "Conte amb repetició · is, has got, can", vocabulari: "duck, fox, boots, puddle, jump, wet, happy, yellow, red"},
  pages: [
    {t: "This is Pip. Pip is a little duck.", alt: "A little yellow duck smiles."},
    {t: "Pip has got yellow boots.", alt: "The little duck shows its yellow boots."},
    {t: "Look! A big puddle.", alt: "The little duck looks at a big puddle."},
    {t: "Pip can jump. One, two, three… splash!", alt: "The little duck jumps into the puddle with a big splash."},
    {t: "This is Tom. Tom is a fox.", alt: "A little fox waves hello."},
    {t: "Tom has got red boots.", alt: "The little fox shows its red boots."},
    {t: "Tom can jump too. Splash! Splash!", alt: "The fox jumps into the puddle and the duck laughs."},
    {t: "Pip and Tom are wet. They are happy!", alt: "The duck and the fox are wet and laughing together."}
  ],
  questions: [
    {type: "literal", q: "What is Pip?", options: [
      {t: "A duck", ok: true, why: "Pip is a little duck."},
      {t: "A fox", why: "Tom is a fox. Pip is a duck."},
      {t: "A cat", why: "There is no cat in this story."}]},
    {type: "literal", q: "What colour are Pip's boots?", options: [
      {t: "Yellow", ok: true, why: "Pip has got yellow boots."},
      {t: "Red", why: "Tom has got red boots. Pip's boots are yellow."},
      {t: "Blue", why: "Look at Pip's boots. They aren't blue."}]},
    {type: "literal", q: "How are Pip and Tom at the end?", options: [
      {t: "Happy", ok: true, why: "They are wet, and they are happy!"},
      {t: "Sad", why: "Look at them. They are laughing."},
      {t: "Cold", why: "The story says: “They are happy!”"}]}
  ]
}
];
