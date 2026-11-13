/* La estación que no sale en los mapas · 6º · Castellano · capítulos 2-8 */
window.EXTRA = window.EXTRA || {};
window.EXTRA["es6-estacion"] = {
  imageExt: "jpg",
  imageAlt: {
    1: "Darío, en el tren, levanta la vista del cómic: por la ventanilla solo se ve oscuridad.",
    2: "Darío y Candela, con su farol y su chubasquero amarillo, en el andén de Entretanto ante la puerta enorme de la consigna.",
    3: "El interior de la consigna: estanterías altísimas llenas de cosas a medias y Darío agachado ante un sobre.",
    4: "Darío e Íker dibujando juntos un cómic en un cuaderno de cuadros.",
    5: "El jefe de estación, altísimo, mira cómo a Darío se le rompe el lápiz al intentar escribir.",
    6: "Candela sostiene una caja de zapatos vacía entre las estanterías mientras Darío la mira.",
    7: "Darío y Candela saltan al tren con el farol brillando; el jefe de estación toca el silbato.",
    8: "Darío entrega una carta a Íker en la puerta del colegio."
  },
  chapters: [
  {
    n: 2, title: "Entretanto", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (fantàstic)", vocabulari: "arrancar, pozo, chubasquero, a medias, consigna"},
    paragraphs: [
      "Darío bajó. No lo decidió del todo: sus pies lo hicieron por él, y cuando quiso darse cuenta las puertas ya se habían cerrado a su espalda.",
      "El tren arrancó sin ruido. Por la ventanilla vio pasar a la señora del abrigo verde, dormida, y al chico de los auriculares, y después solo quedó el túnel, negro y redondo como la boca de un pozo.",
      "—No te preocupes, vuelve —dijo la niña—. Siempre vuelve. Lo que no sé es cuándo.",
      "Se llamaba Candela. Tenía el pelo corto, un chubasquero amarillo que le venía grande y un farol que no soltaba ni para rascarse la nariz. Le explicó que aquello era Entretanto y que a Entretanto no se llegaba por equivocación.",
      "—Aquí viene a parar todo lo que se queda a medias —dijo, y echó a andar por el andén—. Las cartas que nadie termina. Los jerséis con una sola manga. Las frases que empiezan por «un día de estos».",
      "—Yo no he dejado nada a medias —protestó Darío, trotando detrás de ella.",
      "Candela levantó el farol y le alumbró la cara, como hacen los médicos con esa linternita.",
      "—Todos los que bajan dicen lo mismo. Y todos han dejado algo.",
      "Darío iba a contestar, pero entonces vio lo que había al final del andén y se le olvidaron las palabras. Donde tendría que haber una pared había una puerta de almacén tan alta como una casa de tres pisos. Encima, en letras medio borradas, alguien había pintado: «CONSIGNA». Y debajo, más pequeño: «No se admiten cosas acabadas»."
    ],
    vocab: [
      {w: "arrancó", def: "Arrancar: empezar a moverse un vehículo."},
      {w: "pozo", def: "Agujero muy hondo que se hace en la tierra para sacar agua."},
      {w: "chubasquero", def: "Prenda impermeable que se pone encima de la ropa para no mojarse con la lluvia."},
      {w: "a medias", def: "Sin terminar, hecho solo en parte."},
      {w: "CONSIGNA", def: "Consigna: lugar de una estación donde los viajeros dejan guardado el equipaje."}
    ],
    questions: [
      {type: "literal", q: "Según Candela, ¿qué llega a Entretanto?", options: [
        {t: "Todo lo que se queda a medias", ok: true, why: "Lo dice ella: «Aquí viene a parar todo lo que se queda a medias», y pone ejemplos como las cartas que nadie termina."},
        {t: "Los trenes que se estropean", why: "El tren funciona bien: llega, se va y, según Candela, siempre vuelve."},
        {t: "Los viajeros que se duermen", why: "La señora dormida sigue en el tren; quien baja es Darío, que está despierto."},
        {t: "Las cosas que la gente pierde", why: "No son cosas perdidas, sino cosas sin acabar. El cartel lo confirma: «No se admiten cosas acabadas»."}]},
      {type: "vocab", quote: "…un chubasquero amarillo que le venía grande…", q: "¿Qué es un chubasquero?", options: [
        {t: "Una prenda impermeable para la lluvia", ok: true, why: "La palabra viene de «chubasco», una lluvia fuerte y corta. Es lo que te pones para no mojarte."},
        {t: "Un sombrero de paja", why: "Un sombrero no «viene grande» de esa manera, y no tiene relación con la lluvia."},
        {t: "Una mochila", why: "La mochila la lleva Darío; el chubasquero es una prenda de vestir."},
        {t: "Un tipo de farol", why: "El farol se nombra aparte, justo después."}]},
      {type: "infer", quote: "No lo decidió del todo: sus pies lo hicieron por él.", q: "¿Qué quiere decir esta frase?", options: [
        {t: "Que bajó casi sin pensarlo, por impulso", ok: true, why: "No hubo una decisión razonada: se movió antes de pensarlo. Por eso se da cuenta cuando las puertas ya están cerradas."},
        {t: "Que alguien lo empujó", why: "Nadie lo toca: en el vagón todos duermen o escuchan música."},
        {t: "Que tropezó y se cayó", why: "No hay ninguna caída; simplemente baja."},
        {t: "Que Candela tiró de él", why: "Candela está sentada en el banco del andén, lejos de la puerta."}]},
      {type: "infer", q: "¿Por qué Candela le alumbra la cara «como hacen los médicos»?", options: [
        {t: "Porque no le cree y quiere examinarlo", ok: true, why: "Darío acaba de decir que no ha dejado nada a medias. Ella lo mira de cerca, como quien comprueba algo, y responde que todos dicen lo mismo."},
        {t: "Porque Darío está enfermo", why: "La comparación con los médicos habla de la manera de mirar, no de una enfermedad."},
        {t: "Porque quiere deslumbrarlo", why: "No lo hace para molestar: lo observa con atención."},
        {t: "Porque ha perdido algo en el suelo", why: "Alumbra la cara de Darío, no el suelo."}]}
    ]
  },
  {
    n: 3, title: "La consigna", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (fantàstic) amb descripció", vocabulari: "circular, torcer el gesto, consumirse, encogerse de hombros, pasar de largo"},
    paragraphs: [
      "Por dentro, la consigna era todavía más grande. Las estanterías subían hasta perderse de vista y entre ellas circulaban carritos que nadie empujaba.",
      "Darío fue leyendo las etiquetas mientras caminaba. «Puzle de mil piezas. Faltan once.» «Clases de guitarra. Tres.» «Castillo de arena, sin torre.» Había un tablero de ajedrez con una partida detenida y una tarta con una sola vela encendida que no se consumía.",
      "—¿Y esto quién lo ordena?",
      "—El jefe de estación. Ya lo conocerás. —Candela torció el gesto—. Ten paciencia con él.",
      "—¿Y el tren de vuelta?",
      "—Sale cuando se apaga el farol. —Lo levantó para que lo viera bien. Dentro, la llama era del tamaño de una uña—. Antes duraba días. Últimamente dura menos, porque cada vez hay más cosas y la luz tiene que repartirse.",
      "Darío hizo cuentas. No le gustó el resultado.",
      "—¿Y si se apaga y yo no he…?",
      "—Entonces te quedas hasta el siguiente. —Candela se encogió de hombros, pero no lo miró—. No se está tan mal.",
      "Doblaron una esquina. En un estante bajo, a la altura de sus rodillas, había un sobre sin cerrar. Darío lo habría pasado de largo si no hubiera reconocido la letra de la etiqueta, torcida hacia la izquierda, con las tes sin palito.",
      "Era su letra.",
      "«Darío M. Una carta. Dos líneas.»"
    ],
    vocab: [
      {w: "circulaban", def: "Circular: moverse de un sitio a otro."},
      {w: "se consumía", def: "Consumirse: gastarse poco a poco, como una vela que arde."},
      {w: "torció el gesto", def: "Torcer el gesto: poner cara de que algo no te gusta."},
      {w: "se encogió de hombros", def: "Encogerse de hombros: levantarlos para indicar que algo no te importa o que no sabes."},
      {w: "pasado de largo", def: "Pasar de largo: seguir andando sin pararse ni fijarse."}
    ],
    questions: [
      {type: "literal", q: "¿Cuándo sale el tren de vuelta?", options: [
        {t: "Cuando se apaga el farol", ok: true, why: "Candela lo dice con esas palabras: «Sale cuando se apaga el farol»."},
        {t: "Cuando el jefe de estación toca el silbato", why: "Del jefe de estación solo sabemos, de momento, que ordena la consigna."},
        {t: "A las 7.42", why: "Esa es la hora del tren que Darío coge cada mañana, no la de vuelta."},
        {t: "Cuando la consigna está llena", why: "La consigna se llena cada vez más, pero el tren depende del farol."}]},
      {type: "vocab", quote: "Candela se encogió de hombros, pero no lo miró.", q: "¿Qué gesto hizo Candela?", options: [
        {t: "Levantó los hombros, como quitándole importancia", ok: true, why: "Encogerse de hombros es el gesto de «me da igual» o «qué se le va a hacer»."},
        {t: "Se agachó hasta el suelo", why: "Encogerse de hombros solo mueve los hombros, no todo el cuerpo."},
        {t: "Se cruzó de brazos", why: "Es otro gesto distinto; aquí se habla de los hombros."},
        {t: "Se tapó la cara", why: "No se tapa: simplemente evita mirar a Darío."}]},
      {type: "infer", quote: "—No se está tan mal.", q: "Candela dice esto, pero no mira a Darío. ¿Qué nos hace pensar?", options: [
        {t: "Que no lo piensa de verdad", ok: true, why: "Cuando alguien dice algo sin mirar a los ojos, suele ser que no está convencido. A Candela quedarse allí le pesa más de lo que reconoce."},
        {t: "Que está enfadada con Darío", why: "No hay ningún motivo de enfado; le está explicando las normas con calma."},
        {t: "Que tiene mucha prisa", why: "En Entretanto la prisa «da un poco igual», como dijo ella misma."},
        {t: "Que le da vergüenza su farol", why: "Acaba de enseñárselo sin problema."}]},
      {type: "literal", q: "¿Cómo sabe Darío que el sobre es suyo?", options: [
        {t: "Porque reconoce su propia letra en la etiqueta", ok: true, why: "El texto describe la letra, «torcida hacia la izquierda, con las tes sin palito», y remata: «Era su letra»."},
        {t: "Porque lleva pegada su foto", why: "En la etiqueta solo hay texto escrito."},
        {t: "Porque Candela se lo señala", why: "Candela no dice nada: es Darío quien se fija."},
        {t: "Porque es el único sobre de la consigna", why: "La consigna está llena de cosas; este sobre está en un estante bajo, entre muchas otras."}]}
    ]
  },
  {
    n: 4, title: "Dos líneas", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (salt enrere)", vocabulari: "bases, ficha, vale, tablón de anuncios, colgando"},
    paragraphs: [
      "Darío sabía lo que había dentro del sobre sin abrirlo.",
      "El curso pasado, Íker y él habían hecho un cómic juntos. Íker inventaba la historia; Darío dibujaba. Tardaron cuatro meses. Se llamaba «El capitán Tostada» y era, en opinión de los dos, lo mejor que se había dibujado nunca en un cuaderno de cuadros.",
      "Luego llegó el concurso de la biblioteca. Las bases decían «un autor por obra». Íker tenía gripe. Y Darío, que solo iba a preguntar si podían presentarse dos, acabó escribiendo un único nombre en la ficha. El suyo.",
      "Ganó. Le dieron un diploma y un vale para libros. Íker se enteró por el tablón de anuncios.",
      "No hubo gritos. Fue peor: Íker dejó de guardarle sitio en el comedor.",
      "Aquella noche Darío empezó una carta. Escribió: «Íker: perdona. No sé por qué lo hice, bueno, sí lo sé, y». Y ahí se quedó, con la y colgando, porque lo que venía después era difícil de escribir. Metió la hoja en un cajón. Pasó el verano.",
      "—Dos líneas —dijo Candela, que había leído la etiqueta por encima de su hombro—. Las he visto más cortas.",
      "—Iba a terminarla.",
      "—Ya. Un día de estos.",
      "Darío notó que se ponía rojo. Guardó el sobre en la mochila, entre el cómic y el bocadillo.",
      "—Vale. La termino ahora y me voy. ¿Tienes un boli?",
      "Candela soltó una risa corta, sin alegría.",
      "—Ojalá fuera tan fácil."
    ],
    vocab: [
      {w: "bases", def: "Las bases de un concurso: las normas que hay que cumplir para participar."},
      {w: "ficha", def: "Hoja o tarjeta donde se apuntan los datos de alguien."},
      {w: "vale", def: "Papel que se puede cambiar por un producto, como si fuera dinero."},
      {w: "tablón de anuncios", def: "Tablero colgado en la pared donde se ponen avisos para que todos los lean."},
      {w: "colgando", def: "Aquí: sin continuación, como si la frase se hubiera quedado en el aire."}
    ],
    questions: [
      {type: "literal", q: "¿Cómo se repartían el trabajo del cómic?", options: [
        {t: "Íker inventaba la historia y Darío dibujaba", ok: true, why: "El texto lo dice así, con un punto y coma entre los dos: cada uno hacía una mitad."},
        {t: "Darío lo hacía todo y Íker miraba", why: "Era un trabajo de los dos; por eso duele que solo figure un nombre."},
        {t: "Íker dibujaba y Darío escribía", why: "Es justo al revés."},
        {t: "Lo copiaban de otro cómic", why: "La historia se la inventaba Íker; era original."}]},
      {type: "vocab", quote: "Las bases decían «un autor por obra».", q: "¿Qué son «las bases» de un concurso?", options: [
        {t: "Las normas para participar", ok: true, why: "Las bases explican quién puede presentarse y cómo. Aquí exigían un solo autor."},
        {t: "Los premios", why: "Los premios eran el diploma y el vale; las bases son las reglas."},
        {t: "Los miembros del jurado", why: "El jurado no se menciona en el texto."},
        {t: "Las mesas de la biblioteca", why: "No se habla de muebles, sino de lo que «decían» por escrito."}]},
      {type: "infer", quote: "No hubo gritos. Fue peor: Íker dejó de guardarle sitio en el comedor.", q: "¿Por qué el narrador dice que fue «peor»?", options: [
        {t: "Porque el silencio y la distancia duelen más que una discusión", ok: true, why: "Una pelea se puede arreglar hablando. Aquí Íker ni protesta: simplemente se aparta, y eso muestra cuánto le ha dolido."},
        {t: "Porque Darío se quedó sin comer", why: "No pierde la comida, sino el sitio junto a su amigo."},
        {t: "Porque los castigaron a los dos", why: "No hay ningún castigo; nadie más interviene."},
        {t: "Porque Íker le gritó delante de todos", why: "El texto dice justo lo contrario: «No hubo gritos»."}]},
      {type: "infer", q: "¿Por qué Darío no terminó la carta aquella noche?", options: [
        {t: "Porque tenía que reconocer algo que le daba vergüenza", ok: true, why: "Escribe «sí lo sé, y» y se detiene: sabe por qué lo hizo, pero decirlo es «difícil de escribir»."},
        {t: "Porque se quedó sin papel", why: "Tenía la hoja delante; la guardó en un cajón."},
        {t: "Porque no sabía la dirección de Íker", why: "Son compañeros de colegio: podía dársela en mano."},
        {t: "Porque Íker se había mudado", why: "Íker sigue en el mismo colegio y en el mismo comedor."}]}
    ]
  },
  {
    n: 5, title: "El jefe de estación", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (fantàstic) amb humor", vocabulari: "despistado, visera, palparse, deshacerse, apenado"},
    paragraphs: [
      "El jefe de estación era el hombre más alto que Darío había visto nunca, y también el más despistado. Llevaba una gorra con visera, un silbato que no sonaba y la costumbre de no acabar ninguna",
      "—…frase —completó Candela, en voz baja—. Te acostumbras.",
      "—¡Viajero nuevo! —exclamó el hombre—. Bienvenido a Entretanto, donde los trenes llegan a su hora siempre que… en fin. ¿Qué te trae por…?",
      "—Una carta —dijo Darío—. Quiero acabarla. ¿Me deja un boli?",
      "El jefe de estación se palpó los bolsillos y sacó uno. Darío apoyó la hoja en un banco, leyó la última palabra —«y»— y empezó a escribir.",
      "La tinta se secó a media letra.",
      "Probó con un lápiz. La punta se partió. Probó con otro: se partió también. Candela le ofreció una tiza, que se deshizo entre sus dedos como azúcar.",
      "—Aquí no se termina nada —explicó el jefe de estación, apenado—. Es la norma de la casa. Yo mismo llevo intentando decir una frase entera desde… bueno. Desde hace.",
      "—Entonces, ¿cómo sale la gente? —Darío notó que le temblaba la voz—. Usted ha dicho que hay viajeros que se van.",
      "—Se van los que acaban lo suyo. Pero no lo acaban aquí. —El hombre se quitó la gorra y le dio vueltas entre las manos—. Lo acaban… ¿cómo decirlo? Lo acaban por",
      "Se quedó callado, buscando la palabra. No la encontró.",
      "Detrás de ellos, la llama del farol dio un saltito y se hizo más pequeña."
    ],
    vocab: [
      {w: "despistado", def: "Que se distrae y se olvida de las cosas con facilidad."},
      {w: "visera", def: "Parte de la gorra que sobresale por delante y da sombra a los ojos."},
      {w: "se palpó", def: "Palparse: tocarse con las manos para buscar algo."},
      {w: "se deshizo", def: "Deshacerse: romperse en trocitos muy pequeños hasta desaparecer."},
      {w: "apenado", def: "Triste, con pena."}
    ],
    questions: [
      {type: "literal", q: "¿Qué ocurre cuando Darío intenta acabar la carta en la estación?", options: [
        {t: "La tinta se seca y los lápices se parten", ok: true, why: "Prueba con un boli, dos lápices y una tiza, y los cuatro fallan. Es «la norma de la casa»."},
        {t: "Se le olvida lo que quería decir", why: "Sabe lo que quiere escribir; lo que falla es el material."},
        {t: "Candela le quita la hoja", why: "Candela le ayuda: incluso le ofrece una tiza."},
        {t: "El viento se lleva el papel", why: "No hay viento en la escena."}]},
      {type: "vocab", quote: "…y también el más despistado.", q: "¿Cómo es una persona despistada?", options: [
        {t: "Se distrae y olvida las cosas con facilidad", ok: true, why: "Encaja con el personaje: pierde el hilo de lo que dice y no encuentra las palabras."},
        {t: "Es muy seria y estricta", why: "El jefe es amable y un poco cómico, no estricto."},
        {t: "Siempre tiene prisa", why: "No corre: se queda parado buscando palabras."},
        {t: "Habla muy alto", why: "Exclama una vez, pero «despistado» no tiene que ver con el volumen."}]},
      {type: "infer", q: "El primer párrafo termina sin la palabra «frase». ¿Por qué?", options: [
        {t: "Porque el texto imita al jefe de estación, que nunca acaba las frases", ok: true, why: "Es un juego del autor: nos cuenta la costumbre del personaje y, a la vez, nos la enseña dejando la oración sin terminar. Candela la completa."},
        {t: "Porque hay un error en el libro", why: "No es un error: la línea siguiente recoge la palabra que falta, a propósito."},
        {t: "Porque Darío interrumpe al narrador", why: "Quien completa la palabra es Candela, no Darío."},
        {t: "Porque no cabía en la página", why: "El corte está hecho adrede para que tenga gracia."}]},
      {type: "infer", quote: "…la llama del farol dio un saltito y se hizo más pequeña.", q: "¿Qué nos indica esta última frase?", options: [
        {t: "Que a Darío se le acaba el tiempo", ok: true, why: "El tren sale cuando el farol se apaga. Cuanto más pequeña la llama, menos tiempo queda para acabar la carta."},
        {t: "Que empieza a hacer viento", why: "No se menciona el viento; la llama mengua sola."},
        {t: "Que Candela ha soplado", why: "Candela cuida el farol: no lo apagaría."},
        {t: "Que está amaneciendo", why: "En Entretanto no hay relojes ni se habla de la luz del día."}]}
    ]
  },
  {
    n: 6, title: "Lo que Candela no recordaba", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (fantàstic) amb diàleg", vocabulari: "lenteja, asa, mudarse, tragar saliva, crujir"},
    paragraphs: [
      "Se sentaron en el banco del andén. La llama ya era como una lenteja.",
      "—¿Tú cuánto llevas aquí? —preguntó Darío.",
      "—Un rato.",
      "—¿Cuánto es un rato?",
      "Candela tardó en contestar.",
      "—He visto apagarse el farol muchas veces. Yo lo enciendo, espero al que baja, le enseño la consigna. Luego se va, o no. —Hizo girar el asa entre los dedos—. Sé que dejé algo a medias, porque si no, no estaría aquí. Pero no me acuerdo de qué.",
      "Darío pensó en las estanterías. En las etiquetas.",
      "—¿Has buscado tu nombre?",
      "—Hay millones.",
      "—Ya, pero tú solo necesitas las de la letra ce.",
      "La encontraron en el pasillo catorce, detrás de un jersey sin mangas. Era una caja de zapatos vacía. La etiqueta decía: «Candela R. Una despedida».",
      "Candela se quedó muy quieta. Después habló despacio, como quien tira de un hilo.",
      "—Nos mudamos en febrero. Mi amiga Noa vino a la estación a decirme adiós y yo… yo me escondí en el vagón. Pensé que si no me despedía, no me iba del todo.",
      "Darío miró la caja vacía, y luego su sobre, y de pronto lo entendió. No hacía falta boli.",
      "—Candela, las cosas no se acaban escribiéndolas aquí. Se acaban cuando decides acabarlas de verdad. —Tragó saliva y lo dijo en voz alta, entero, por primera vez—: Puse solo mi nombre porque quería ganar yo. Y se lo voy a decir a Íker a la cara. Hoy.",
      "Dentro de la mochila, algo crujió, como un papel que se estira.",
      "Y a lo lejos, en el túnel, sonó un silbido."
    ],
    vocab: [
      {w: "lenteja", def: "Legumbre pequeña, redonda y plana. Aquí se usa para decir que la llama es diminuta."},
      {w: "asa", def: "Parte de un objeto que sirve para agarrarlo con la mano."},
      {w: "mudamos", def: "Mudarse: irse a vivir a otra casa o a otra ciudad."},
      {w: "Tragó saliva", def: "Tragar saliva: lo que hacemos cuando estamos nerviosos antes de decir algo difícil."},
      {w: "crujió", def: "Crujir: hacer el ruido de un papel o una hoja seca al doblarse."}
    ],
    questions: [
      {type: "literal", q: "¿Qué había dejado Candela a medias?", options: [
        {t: "Una despedida de su amiga Noa", ok: true, why: "Lo dice la etiqueta, «Candela R. Una despedida», y ella lo recuerda: se escondió en el vagón en vez de decir adiós."},
        {t: "Una carta a sus padres", why: "La carta es el asunto de Darío, no el de Candela."},
        {t: "Un jersey sin mangas", why: "El jersey solo está delante de su caja en el estante."},
        {t: "Los deberes del colegio", why: "Nada de eso aparece en el capítulo."}]},
      {type: "vocab", quote: "—Nos mudamos en febrero.", q: "¿Qué hizo la familia de Candela?", options: [
        {t: "Se fue a vivir a otro lugar", ok: true, why: "Mudarse es cambiar de casa o de ciudad. Por eso Noa fue a la estación a decirle adiós."},
        {t: "Se fue de vacaciones", why: "De unas vacaciones se vuelve; aquí hubo una despedida de verdad."},
        {t: "Cambió de coche", why: "«Mudarse» se refiere a la casa, no al coche."},
        {t: "Se disfrazó", why: "No tiene nada que ver con disfraces."}]},
      {type: "infer", q: "¿Por qué se escondió Candela en vez de despedirse?", options: [
        {t: "Porque despedirse hacía real que se marchaba", ok: true, why: "Lo explica ella: «Pensé que si no me despedía, no me iba del todo». Evitaba el adiós porque le dolía."},
        {t: "Porque estaba enfadada con Noa", why: "Noa es su amiga y fue a verla; no hay ningún enfado."},
        {t: "Porque el tren ya salía", why: "Tuvo tiempo: Noa estaba allí y ella eligió esconderse."},
        {t: "Porque no la vio en el andén", why: "Sabía que Noa había ido «a decirme adiós»."}]},
      {type: "infer", quote: "Dentro de la mochila, algo crujió, como un papel que se estira.", q: "¿Qué está pasando dentro de la mochila?", options: [
        {t: "La carta se está completando, porque Darío ha decidido acabarla de verdad", ok: true, why: "En la mochila está el sobre. Darío acaba de decir en voz alta lo que no se atrevía a escribir, y justo entonces suena el silbido del tren."},
        {t: "Se está rompiendo el cómic", why: "Un papel «que se estira» crece, no se rompe."},
        {t: "Se ha aplastado el bocadillo", why: "Un bocadillo no cruje como un papel."},
        {t: "Se ha caído el sobre al suelo", why: "El ruido viene de dentro de la mochila."}]}
    ]
  },
  {
    n: 7, title: "El tren de vuelta", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (clímax)", vocabulari: "chispa, asunto, atropellado, rozar, de un tirón"},
    paragraphs: [
      "El tren entró en la estación con las luces encendidas. En el farol quedaba una chispa.",
      "Darío abrió la mochila. La carta ya no tenía dos líneas: tenía una página entera, con su letra torcida, y acababa en un punto.",
      "—Viajero con asunto terminado —anunció el jefe de estación, y por una vez le salió casi toda la frase—. Puede usted…",
      "—¿Y ella?",
      "El hombre miró la caja de zapatos, vacía, y negó con la cabeza.",
      "—Pues yo no subo —dijo Darío.",
      "—No seas tonto. —Candela le empujó hacia la puerta—. Se apaga. Sube.",
      "—Dilo.",
      "—¿El qué?",
      "—Lo que le habrías dicho a Noa. Dilo de verdad, como si la tuvieras delante. A mí me ha funcionado.",
      "Las puertas empezaron a pitar. Candela apretó el farol contra el pecho. Abrió la boca, la cerró. Y entonces le salió todo de golpe, atropellado:",
      "—Que la voy a echar de menos. Que me da miedo el colegio nuevo. Que le voy a escribir aunque tenga una letra horrible. Y que adiós. Adiós, Noa.",
      "La caja de zapatos pesó de pronto en sus manos. Dentro había un sobre cerrado, con sello.",
      "La chispa del farol, en vez de apagarse, creció hasta llenar el cristal.",
      "Subieron de un salto. Las puertas se cerraron rozándoles los talones.",
      "En el andén, el jefe de estación se llevó el silbato a la boca. Sonó, limpio y largo, por primera vez. Y luego dijo, de un tirón y sin tropezar:",
      "—Buen viaje a los dos."
    ],
    vocab: [
      {w: "chispa", def: "Punto de fuego muy pequeño."},
      {w: "asunto", def: "Tema o cosa de la que alguien tiene que ocuparse."},
      {w: "atropellado", def: "Dicho muy deprisa y de forma desordenada."},
      {w: "rozándoles", def: "Rozar: tocar algo muy ligeramente al pasar."},
      {w: "de un tirón", def: "De una sola vez, sin pararse."}
    ],
    questions: [
      {type: "literal", q: "¿Cómo está la carta cuando Darío abre la mochila?", options: [
        {t: "Terminada: ocupa una página entera y acaba en un punto", ok: true, why: "El texto compara: «ya no tenía dos líneas: tenía una página entera» y termina «en un punto», no en una «y» colgando."},
        {t: "Igual que antes, con dos líneas", why: "Ha cambiado: eso era el crujido del capítulo anterior."},
        {t: "Rota en pedazos", why: "Está entera y completa."},
        {t: "En blanco", why: "Al contrario: está escrita hasta el final, con su letra."}]},
      {type: "vocab", quote: "…le salió todo de golpe, atropellado.", q: "¿Cómo habló Candela?", options: [
        {t: "Muy deprisa y de forma desordenada", ok: true, why: "Lleva mucho tiempo callándoselo y lo suelta todo junto, una frase encima de otra."},
        {t: "Muy despacio y con calma", why: "Es lo contrario: «de golpe»."},
        {t: "En voz muy baja", why: "«Atropellado» habla de la velocidad y el orden, no del volumen."},
        {t: "Cantando", why: "No canta: habla a toda prisa."}]},
      {type: "infer", q: "¿Por qué dice Darío «Pues yo no subo»?", options: [
        {t: "Porque no quiere marcharse y dejar allí a Candela", ok: true, why: "Él ya puede irse, pero pregunta «¿Y ella?». Cuando ve que Candela no puede subir, se niega a irse solo."},
        {t: "Porque le da miedo el tren", why: "Lleva todo el libro queriendo coger ese tren."},
        {t: "Porque ha perdido el billete", why: "No se habla de billetes; lo que cuenta es tener el «asunto terminado»."},
        {t: "Porque le gusta la consigna", why: "Quiere volver; lo que no quiere es abandonar a su amiga."}]},
      {type: "infer", q: "¿Qué demuestra que el jefe de estación diga por fin una frase completa?", options: [
        {t: "Que algo ha cambiado en Entretanto: él también consigue acabar algo", ok: true, why: "Su silbato «no sonaba» y él no acababa las frases. Cuando Darío y Candela terminan lo suyo, a él también le sale: el silbato suena y dice «Buen viaje a los dos» sin tropezar."},
        {t: "Que lo había ensayado muchas veces", why: "Llevaba mucho intentándolo sin conseguirlo; lo nuevo es lo que acaba de pasar."},
        {t: "Que habla otra persona por él", why: "En el andén solo queda él."},
        {t: "Que está enfadado", why: "Les desea buen viaje: está contento."}]}
    ]
  },
  {
    n: 8, title: "Las 7.43", minutes: 3,
    tags: {competencies: "CE4 Comprensió escrita · CE8 Lectura literària", criteris: "4.2 · 8.1", tipus: "Narratiu (desenllaç)", vocabulari: "desperezarse, guiñar, buzón, plantarse, desdoblar"},
    paragraphs: [
      "El túnel se acabó de golpe.",
      "Entró el sol por las ventanillas, y con él un olor a vainilla que Darío habría reconocido con los ojos cerrados. La fábrica de galletas. Miró el reloj del vagón: las 7.43.",
      "Un minuto. Todo aquello había cabido en un minuto.",
      "La señora del abrigo verde se desperezó, lo miró y, antes de volver a cerrar los ojos, le guiñó uno. Darío nunca supo qué pensar de aquello.",
      "Se volvió hacia el asiento de al lado. Estaba vacío. Solo quedaba el farol, apagado y frío, con una etiqueta atada al asa: «Para el siguiente».",
      "El tren frenó en la parada de siempre. En el andén de enfrente, entre la gente, Darío vio un chubasquero amarillo. Una niña de pelo corto echaba un sobre en el buzón de la estación. Levantó la cabeza, lo buscó entre las ventanillas y dijo algo que él no pudo oír, pero que se parecía mucho a «gracias».",
      "Íker estaba en la puerta del colegio, atándose un cordón. Darío se plantó delante con la carta en la mano. Le sudaban hasta las orejas.",
      "—Puse solo mi nombre porque quería ganar yo —dijo, sin respirar—. Estuvo fatal. El vale de libros es tuyo, y el capitán Tostada también. Lo siento.",
      "Íker cogió la carta. La leyó entera, despacio. Luego la dobló y se la guardó.",
      "—Has tardado —dijo.",
      "—Ya. —Darío sonrió por primera vez en toda la mañana—. Y aquí eso sí que importa.",
      "Esa tarde, al desdoblar el plano de la línea, encontró una parada nueva dibujada a lápiz entre la tercera y la cuarta. No tenía nombre. Solo un farol pequeñito."
    ],
    vocab: [
      {w: "se desperezó", def: "Desperezarse: estirar los brazos y el cuerpo al despertarse."},
      {w: "guiñó", def: "Guiñar un ojo: cerrarlo un momento mientras el otro sigue abierto, como señal de complicidad."},
      {w: "buzón", def: "Caja con una ranura donde se echan las cartas para enviarlas."},
      {w: "se plantó", def: "Plantarse: ponerse delante de alguien, firme y sin moverse."},
      {w: "desdoblar", def: "Abrir algo que estaba doblado."}
    ],
    questions: [
      {type: "literal", q: "¿Qué hora marca el reloj del vagón cuando el tren sale del túnel?", options: [
        {t: "Las 7.43", ok: true, why: "Darío mira el reloj y son las 7.43: solo ha pasado un minuto desde que cogió el tren de las 7.42."},
        {t: "Las 7.42", why: "Esa es la hora de salida. Ha pasado un minuto."},
        {t: "Las 8.43", why: "No ha pasado una hora: «todo aquello había cabido en un minuto»."},
        {t: "No hay reloj", why: "Donde no había relojes era en Entretanto; el vagón sí tiene."}]},
      {type: "vocab", quote: "La señora del abrigo verde se desperezó…", q: "¿Qué hizo la señora?", options: [
        {t: "Estiró el cuerpo al despertarse", ok: true, why: "Llevaba todo el viaje dormida. Desperezarse es lo que hacemos al despertar."},
        {t: "Se puso el abrigo", why: "El abrigo ya lo llevaba puesto."},
        {t: "Se levantó para bajar", why: "No se levanta: vuelve a cerrar los ojos."},
        {t: "Se enfadó con Darío", why: "Le guiña un ojo, que es un gesto amable."}]},
      {type: "infer", q: "¿Qué significa que la niña del chubasquero amarillo eche un sobre al buzón?", options: [
        {t: "Que Candela ha vuelto y está enviando su despedida a Noa", ok: true, why: "El chubasquero amarillo y el pelo corto son los de Candela, y en el capítulo anterior apareció en su caja «un sobre cerrado, con sello». Ahora lo envía."},
        {t: "Que la niña trabaja en correos", why: "Es una niña que echa su propia carta."},
        {t: "Que es una niña cualquiera", why: "Busca a Darío entre las ventanillas y le dice «gracias»: lo conoce."},
        {t: "Que le devuelve la carta a Darío", why: "La carta de Darío la lleva él en la mochila."}]},
      {type: "infer", quote: "—Y aquí eso sí que importa.", q: "¿A qué frase del principio del libro responde Darío?", options: [
        {t: "A la de Candela: «Llegas tarde. Bueno, aquí eso da un poco igual»", ok: true, why: "En Entretanto llegar tarde no importaba. En la vida real, tardar en pedir perdón sí cuenta, y Darío lo ha aprendido."},
        {t: "A la del jefe de estación: «Buen viaje a los dos»", why: "Esa frase es una despedida y no habla de tardar."},
        {t: "A la megafonía: «Próxima parada: Entretanto»", why: "La megafonía anuncia una parada; no habla de llegar tarde."},
        {t: "A las bases del concurso", why: "Las bases hablaban de autores, no de tiempo."}]}
    ]
  }
  ]
};
