
const productos = [
  {
    image: '/img/women/outfit_w1.jpg',nombre: 'Outfit 1',descripcion:   'Vestido negro ajustado con escote corazón & tirantes finos. Perfecto para una noche de fiesta. Confeccionado en suave satén, que aseguran elegancia & estilo.',precio: '$900'}
    ,{image: '/img/women/outfit_w2.jpg',nombre: 'Outfit 2',descripcion: 'Conjunto de chaqueta de cuero sintético negra, que combina perfecto con un mini vestido satinado verde menta. Ideal para un look transicional de día a noche.',precio: '$1020.00'}
    ,{image: '/img/women/outfit_w3.jpg',nombre: 'Outfit 3',descripcion: 'Mini vestido de lentejuelas, a juego con un cinturón que define tu silueta, perfecto para capturar la atención en cualquier evento con sensaulidad & estilo.',precio: '$1100.00'}
    ,{image: '/img/women/outfit_w4.jpg',nombre: 'Outfit 4',descripcion: 'Vestido de piel negra straple, con un cordon ajustable del lado izquierdo, a juego con una chamarra de piel que te hará robar todas las miradas.',precio: '$950.00'}
    ,{image: '/img/women/outfit_w5.jpg',nombre: 'Outfit 5',descripcion: 'Conjunto casual & moderno con un top Powerfull & falda corte recto simetrica beige, que te ayudarán a lograr ese look coqueto, casual para salir a comer.',precio: '$700.00'}
    ,{image: '/img/women/outfit_w6.jpg',nombre: 'Outfit 6',descripcion: 'Exprésate con este conjunto casual de T-shirt cropped Cowgirl & una minifalda plisada estilo colegiala, que le dará un toque dulce & coqueto a tu estilo.',precio: '$830.00'}
    ,{image: '/img/women/outfit_w7.jpg',nombre: 'Outfit 7',descripcion: 'Este Basic style te dará el look veraniego que necesitas, con un croptop estilo corsette blanco & falda ajustada color beige, complementado con una cartera.',precio: '$910.00'}
    ,{image: '/img/women/outfit_w8.jpg',nombre: 'Outfit 8',descripcion: 'Conjunto perfecto para el verano, con top ajustable al frente & lindas mangas caidas, a juego con una minifalda ajustada & un cinturon dorado muy coqueto.',precio: '$700.00'}
    ,{image: '/img/women/outfit_w9.jpg',nombre: 'Outfit 9',descripcion: 'Este look glamuroso con un top corto de tirantes negro & una falda negra de cierre completo te hará destaca en cualquier evento nocturno casual.',precio: '$690.00'}
    ,{image: '/img/women/outfit_w10.jpg',nombre: 'Outfit 10',descripcion: 'Conjunto vibrante con top tipo campesino rojo, a juego con una falda negra ajustada, acompañado de un cinturón con detalles dorados, perfecto para expresar tu estilo chic.',precio: '$900.00'}
    ,{image: '/img/women/outfit_w11.jpg',nombre: 'Outfit 11',descripcion: 'Look fresco & angelical con top celeste cruzado, combinado con una falda blanca ajustada a la cintura & volumen en la parte inferior, ideal para ser el centro de atención .',precio: '$1000.00'}
    ,{image: '/img/women/outfit_w12.jpg',nombre: 'Outfit 12',descripcion: 'Conjunto Basic ideal para un brunch con amigas, con un corset verde & una falda blanca con volumen, que son la combinación perfecta entre elegancia y seducción sutil.',precio: '$850.00'}
    ,{image: '/img/women/outfit_w13.jpg',nombre: 'Outfit 13',descripcion: 'Reinventa el look preppy con esta camisa blanca, acompañada de un conjunto tipo pichi negro, ideal agregarle ese toque dulce a tu look para ir a la oficina.',precio: '$1010.00'}
    ,{image: '/img/women/outfit_w14.jpg',nombre: 'Outfit 14',descripcion: 'Conviértete en la reina de la noche con este conjunto negro ajustado de cuero, perfecto para una salida audaz.',precio: '$780.00'}
    ,{image: '/img/women/outfit_w15.jpg',nombre: 'Outfit 15',descripcion: 'Combina lo rústico y lo chic con un top de mezclilla & falda negra con volantes, ideal para un evento casual con estilo.',precio: '$1200.00'}
    ,{image: '/img/women/outfit_w16.jpg',nombre: 'Outfit 16',descripcion: 'Encarna el espíritu rockero con un bralette de cuero negros, un look imponente para conciertos o noches de fiesta.',precio: '$920.00'}
    ,{image: '/img/women/outfit_w17.jpg',nombre: 'Outfit 17',descripcion: 'Marca tendencia con este conjunto de cuero negro, que hace el match perfecto con un top basic blanco, perfecto para destacar en la vida nocturna.',precio: '$1300.00'}
    ,{image: '/img/women/outfit_w18.jpg',nombre: 'Outfit 18',descripcion: 'Combiertete en la reina del rodeo con este duo increible, blusa negra ajustada & una falda de diseño grabado.',precio: '$2300.00'}
    ,{image: '/img/women/outfit_w19.jpg',nombre: 'Outfit 19',descripcion: 'Cautiva con este top estampado que va acompañado de una falda de mezclilla basica para un look casual, que no pasará desapercibido.',precio: '$810.00'}
    ,{image: '/img/women/outfit_w20.jpg',nombre: 'Outfit 20',descripcion: 'Celebra el verano con un body de encaje negro y una falda de mezclilla rasgada, ideal para un día en el parque o una noche casual.',precio: '$900.00'}
    ,{image: '/img/women/outfit_w21.jpg',nombre: 'Outfit 21',descripcion: 'Exuda un encanto coqueto con un top recto con tirantes de cadena y una falda asimetrica de mezclilla, perfecto para un picnic o una cita casual.',precio: '$1500.00'}
    ,{image: '/img/women/outfit_w22.jpg',nombre: 'Outfit 22',descripcion: 'Revela un estilo urbano con un top tipo corset blanco y falda de mezclilla rasgada acompañados de un cinturon, perfecto para explorar la ciudad.',precio: '$910.00'}
    ,{image: '/img/women/outfit_w23.jpg',nombre: 'Outfit 23',descripcion: 'Proyecta un aire desenfadado con una camiseta Vogue y una falda de mezclilla ajustada, ideal para un día de compras o exploración urbana.',precio: '$700.00'}
    ,{image: '/img/women/outfit_w24.jpg',nombre: 'Outfit 24',descripcion: 'Conquista la ciudad de forma casual con esta camiseta tipo polo Lacoste y una falda de mezclilla, un conjunto cómodo para la aventura.',precio: '$1750.00'}
    ,{image: '/img/women/outfit_w25.jpg',nombre: 'Outfit 25',descripcion: 'Atrae todas las miradas, top negro ajustado, una falda de mezclilla con tachuelas a juego con una chaquetas cropped, perfecto para una noche de concierto.',precio: '$1900.00'}
    ,{image: '/img/women/outfit_w26.jpg',nombre: 'Outfit 26',descripcion: 'Muestra un estilo urbano pero impactante con un top negro y una falda de mezclilla, ideal para disfrutar de un cálido día de verano.',precio: '$820.00'}
    ,{image: '/img/women/outfit_w27.jpg',nombre: 'Outfit 27',descripcion: 'Adopta un look streetwear con una camiseta blanca & una falda corta tipo cargo de mezclilla que te harás destacar por donde vayas.',precio: '$820.00'}
    ,{image: '/img/women/outfit_w28.jpg',nombre: 'Outfit 28',descripcion: 'Destaca en cualquier parte con un top basic y falda tipo crago negra acompañada de un sueter cropped , un conjunto que promete.',precio: '$1120.00'}
    ,{image: '/img/women/outfit_w29.jpg',nombre: 'Outfit 29',descripcion: 'Opta por la comodidad con este estilo chic de un set de mezclilla y campesina blanca, perfecto para un día de aventuras al aire libre.',precio: '$1300.00'}
    ,{image: '/img/women/outfit_w30.jpg',nombre: 'Outfit 30',descripcion: 'Impresiona con un look gotico con este corset negro y falda plisada con detalles acordonados, ideal para una salida nocturna.',precio: '$920.00'}
    ,{image: '/img/women/outfit_w31.jpg',nombre: 'Outfit 31',descripcion: 'Define el estilo profesional con una camisa blanca, croptop y pantalones a cuadros a juego, perfecto para el entorno laboral con un toque chic.',precio: '$930.00'}
    ,{image: '/img/women/outfit_w32.jpg',nombre: 'Outfit 32',descripcion: 'Noche casual con un bralette rojo y pantalón ajustado a juego con una chaqueta & cinturon de cuero, un look muy audaz.',precio: '$1350.00'}
    ,{image: '/img/women/outfit_w33.jpg',nombre: 'Outfit 33',descripcion: 'Conquista la noche con este conjunto streetwear con un bralette de cuero, unos shorts cortos & destaca el look con una chaqueta de mezclilla estampada.',precio: '$1200.00'}
    ,{image: '/img/women/outfit_w34.jpg',nombre: 'Outfit 34',descripcion: 'Radiante y femenino, este conjunto con camisa con un escote profundo y unos shorts de lentejuelas es perfecto para una salida nacturna coqueta.',precio: '$1000.00'}
    ,{image: '/img/women/outfit_w35.jpg',nombre: 'Outfit 35',descripcion: 'Duo dinamita estilo vaquero para una ocasion más especial; jumpsuit de lentejuelas para ser la reina de la noche.',precio: '$2400.00'}
    ,{image: '/img/women/outfit_w36.jpg',nombre: 'Outfit 36',descripcion: 'Un estilo urbano refrescante con un sweater Prada y este short rasgado, ideal para un día casual con un toque de lujo.',precio: '$3700.00'}
    ,{image: '/img/women/outfit_w37.jpg',nombre: 'Outfit 37',descripcion: 'Disfruta de un look veraniego con este body blanco de encaje y jeans de mezclilla claros, perfecto para un paseo más casual.',precio: '$950.00'}
    ,{image: '/img/women/outfit_w38.jpg',nombre: 'Outfit 38',descripcion: 'Atrévete con un look juvenil con este conjunto de chaqueta de mezclilla y corset blanco, ideal para citas al aire libre o reuniones con amigos.',precio: '$1100.00'}
    ,{image: '/img/women/outfit_w39.jpg',nombre: 'Outfit 39',descripcion: 'Adopta un aire bohemio con una campesina blanca y shorts de mezclilla tiro alto, perfecto para esos días creativos y despreocupados.',precio: '$800.00'}
    ,{image: '/img/women/outfit_w40.jpg',nombre: 'Outfit 40',descripcion: 'Se una casual queen, con una t-shirt tipo polo Lacoste y shorts de mezclilla razgado, ideal para un día de descanso activo.',precio: '$3100.00'}
    ,{image: '/img/women/outfit_w41.jpg',nombre: 'Outfit 41',descripcion: 'Noche estrellada con un body con transparencias y shorts de mezclilla acompañado de un cinturón de cuero, perfecto para disfrutar de la brisa nocturna.',precio: '$910.00'}
    ,{image: '/img/women/outfit_w42.jpg',nombre: 'Outfit 42',descripcion: 'Luce un estilo sofisticado y casual con una blusa blanca y shorts de mezclilla, ideal para eventos diurnos con un toque chic.',precio: '$1100.00'}
    ,{image: '/img/women/outfit_w43.jpg',nombre: 'Outfit 43',descripcion: 'Explora la ciudad con estilo con este conjunto de chaqueta púrpura & accesorios a juego, acompañado de un short de mezclilla.',precio: '$1600.00'}
    ,{image: '/img/women/outfit_w44.jpg',nombre: 'Outfit 44',descripcion: 'Prepárate para un día de casual con estilo con este croptop blanco ajustable a los lados & jeans rotos.',precio: '$1100.00'}
    ,{image: '/img/women/outfit_w45.jpg',nombre: 'Outfit 45',descripcion: 'Siguiendo la línea del verano, atrapa las miradas con este look basico de croptop rojo, acompañado de unos jeans ajustados con diseño rasgado.',precio: '$1100.00'}
    ,{image: '/img/women/outfit_w46.jpg',nombre: 'Outfit 46',descripcion: 'Expresa tu creatividad con un conjunto de bralette de encaje & unos jeans estampados, perfecto para destacar cualquier día casual.',precio: '$1150.00'}
    ,{image: '/img/women/outfit_w47.jpg',nombre: 'Outfit 47',descripcion: 'Mantén un estilo casual pero destacable, con una camiseta estilo griego estampada & unos jeans rasgados ideales para cualquier salida.',precio: '$1000.00'}
    ,{image: '/img/women/outfit_w48.jpg',nombre: 'Outfit 48',descripcion: 'Domina el arte de lo casual con estilo con un conjunto de camiseta negra basic & jeans rasgados, acompañados de una chaqueta de mezclilla.',precio: '$1340.00'}
    ,{image: '/img/women/outfit_w49.jpg',nombre: 'Outfit 49',descripcion: 'Prepárate para deslumbrar en una noche elegante con un body tipo corset rosa & pantalones tipo cargo, un look que combina sofisticación & modernidad.',precio: '$1200.00'}
    ,{image: '/img/women/outfit_w50.jpg',nombre: 'Outfit 50',descripcion: 'Conquista el estilo streetwear con este duo, con un conjunto de top negro 6 una blusa de red, acompañada de una falda blanca suave & una crop-shirt Psycho Bunny & mom-jeans.',precio: '$2960.00'}
];
export {productos};





