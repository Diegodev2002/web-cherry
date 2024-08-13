const productos2 = [
  {
    image: '/img/man/outfit_m1.jpg',nombre: 'Outfit 1',descripcion: 'Conjunto Givenchy Black and White, incluye una camiseta de algodón, shorts & sandalias, acompañados de una gorra, sin duda, perfecto para un look fresco & con clase.',precio: '$3900'}
    ,{image: '/img/man/outfit_m2.jpg',nombre: 'Outfit 2',descripcion: 'Conjutno deportivo Tommy Hilfiger con una playera básica & short a juego, que combinan a la perfeccion con la gorra Armani, ideal para un día activo con estilo.',precio: '$2020.00'}
    ,{image: '/img/man/outfit_m3.jpg',nombre: 'Outfit 3',descripcion: 'Conjunto Tommy Hilfiger negro & rojo, con una camiseta & shorts a juego, que ledaran un plus a tu estilo despreocupado.',precio: '$1900.00'}
    ,{image: '/img/man/outfit_m4.jpg',nombre: 'Outfit 4',descripcion: 'Conjunto deportivo Lacoste blanco con detalles en negro, incluye una playera tipo polo & shorts, ideal para un día soleado, corona el look con esta gorra.',precio: '$1950.00'}
    ,{image: '/img/man/outfit_m5.jpg',nombre: 'Outfit 5',descripcion: 'Set deportivo Nike Whithe Cream, incluuye una camiseta  & shorts de algodón con cordón ajustable, un atuendo báciso para tu estilo deportivo & moderno.',precio: '$1700.00'}
    ,{image: '/img/man/outfit_m6.jpg',nombre: 'Outfit 6',descripcion: 'Conjunto Nike negro & gris, este set incluye una camiseta, shorts & un bucket ideal para tener estilo & la comodidad a tu alance.',precio: '$1830.00'}
    ,{image: '/img/man/outfit_m7.jpg',nombre: 'Outfit 7',descripcion: 'Conjunto básico de los Yankees para los aficionados del béisbol, incluye una camiseta & un short ajustable a rayas para resaltar tu espiritu deportivo. ',precio: '$1150.00'}
    ,{image: '/img/man/outfit_m8.jpg',nombre: 'Outfit 8',descripcion: 'Conjunto beige de algodón, incluye una playera básica blanca de manga corta, una camisa beige manga corta & short a juego, para un look relajado & fresco.',precio: '$900.00'}
    ,{image: '/img/man/outfit_m9.jpg',nombre: 'Outfit 9',descripcion: 'Conjunto Vans en color vino & beige, incluye una camiseta de algodón & short combinados, para darle un toque a este look casual & moderno con una gorra a DC. ',precio: '$1000.00'}
    ,{image: '/img/man/outfit_m10.jpg',nombre: 'Outfit 10',descripcion: 'Conjunto Lacoste en tonos tierra, está compuesto por una playera, shorts de algodón & una gorra que hacen el match perfecto, pensado para brindar comodidad & estilo.',precio: '$2900.00'}
    ,{image: '/img/man/outfit_m11.jpg',nombre: 'Outfit 11',descripcion: 'Conjunto Nike en negro con detalles de camuflaje, incluye una camiseta negra & shorts camuflajeados, ideal para fusionar el estilo deportivo con el urbano.',precio: '$1000.00'}
    ,{image: '/img/man/outfit_m12.jpg',nombre: 'Outfit 12',descripcion: 'Set total black con un audaz diseño de 8-Ball, compuesto por una playera de cuello redondo & shorts cortos, acompaña este look con una bandolera nike negra, un look que grita comodidad.',precio: '$1850.00'}
    ,{image: '/img/man/outfit_m13.jpg',nombre: 'Outfit 13',descripcion: 'Conjunto deportivo negro con camiseta gráfica de Odell Beckham Jr. & shorts negros básicos, una elección indudable para los amantes del deporte.',precio: '$900.00'}
    ,{image: '/img/man/outfit_m14.jpg',nombre: 'Outfit 14',descripcion: 'Conjunto Moschino en tonos beige, que incluye camiseta y un short armani rasgado, perfecto para lucir un estilo casual pero refinado, usala con la gorra incluida.',precio: '$3780.00'}
    ,{image: '/img/man/outfit_m15.jpg',nombre: 'Outfit 15',descripcion: 'Polo Nike amarillo combinado con shorts negros de mezclilla & una gorra Nike, una opción vibrante y fresca para el verano. ',precio: '$1200.00'}
    ,{image: '/img/man/outfit_m16.jpg',nombre: 'Outfit 16',descripcion: 'Conjunto Champion con camiseta roja y short de mezclilla, diseñado para quienes buscan un estilo urbano. Usala con nuestra mariconera Champion.',precio: '$1920.00'}
    ,{image: '/img/man/outfit_m17.jpg',nombre: 'Outfit 17',descripcion: 'Conjunto black /White, camiseta negra y short blanco, complementado con una gorra NY, la simplicidad elevada a un estilo minimalista.',precio: '$1100.00'}
    ,{image: '/img/man/outfit_m18.jpg',nombre: 'Outfit 18',descripcion: 'Camiseta negra y skinny jeans azul claro desgastados, un básico para un look casual y relajado.',precio: '$900.00'}
    ,{image: '/img/man/outfit_m19.jpg',nombre: 'Outfit 19',descripcion: 'Conjeto Lacoste de camiseta blanca y pantalón de mezcilla recto desgastado, ideal para un estilo casual moderno.',precio: '$2800.00'}
    ,{image: '/img/man/outfit_m20.jpg',nombre: 'Outfit 20',descripcion: 'Conjunto deportivo de los Raiders en verde, con camiseta, gorra y jeans slim fit, perfecto para los verdaderos seguidores de la NFL.',precio: '$900.00'}
    ,{image: '/img/man/outfit_m21.jpg',nombre: 'Outfit 21',descripcion: 'Conjunto con camiseta gráfica beige y skinny jeans, para un look casual y despreocupado.',precio: '$700.00'}
    ,{image: '/img/man/outfit_m22.jpg',nombre: 'Outfit 22',descripcion: 'Conjunto contemporáneo con camiseta negra y jeans PURPLE deslavados, con unas medias negras con diseño.',precio: '$2900.00'}
    ,{image: '/img/man/outfit_m23.jpg',nombre: 'Outfit 23',descripcion: 'Conjunto Burberry de playera blanca con jeans rasgados, una combinación de casualidad y buen gusto.',precio: '$1500.00'}
    ,{image: '/img/man/outfit_m24.jpg',nombre: 'Outfit 24',descripcion: 'Set deportivo Flight, con camiseta Nike blanca, jeans rasgados y una gorra rojas, para un estilo audaz y urbano.',precio: '$750.00'}
    ,{image: '/img/man/outfit_m25.jpg',nombre: 'Outfit 25',descripcion: 'Conjunto de los Dodgers con camiseta de béisbol, jeans azul marino y una gorra LA, ideal para los amantes del deporte.',precio: '$1600.00'}
    ,{image: '/img/man/outfit_m26.jpg',nombre: 'Outfit 26',descripcion: 'Conjunto de Nike con sudadera azul y blanco, incluyendo unos skinny jeans, perfecto para el día a día.',precio: '$820.00'}
    ,{image: '/img/man/outfit_m27.jpg',nombre: 'Outfit 27',descripcion: 'Set casual con sudadera azul marino, playera basic blanca y joggers, el comodín perfecto para un día relajado',precio: '$900.00'}
    ,{image: '/img/man/outfit_m28.jpg',nombre: 'Outfit 28',descripcion: 'Conjunto casual con chaqueta varsity en gris, jeans y camiseta blanca basic, ideal para un día relajado con estilo.',precio: '$1120.00'}
    ,{image: '/img/man/outfit_m29.jpg',nombre: 'Outfit 29',descripcion: 'Conjunto deportivo con sudadera roja y jogger gris, finalizado con zapatillas blancas disponibles en nuestro catálogo, para un look energético.',precio: '$1100.00'}
    ,{image: '/img/man/outfit_m30.jpg',nombre: 'Outfit 30',descripcion: 'Conjunto invernal con chaqueta de mezclilla forrada de lana, a juego con unos jeans negros, perfecto para los días fríos con estilo.',precio: '$1920.00'}
    ,{image: '/img/man/outfit_m31.jpg',nombre: 'Outfit 31',descripcion: 'Conjunto casual con chaqueta varsity en tonos azul y amarillo, camiseta, jeans y un gorrito a juego para un look juvenil y vibrante.',precio: '$1730.00'}
    ,{image: '/img/man/outfit_m32.jpg',nombre: 'Outfit 32',descripcion: 'Conjunto casual con chaqueta The North Face negra, complementada con una gorra, una sudadera y jeans claros para un look práctico. ',precio: '$2350.00'}
    ,{image: '/img/man/outfit_m33.jpg',nombre: 'Outfit 33',descripcion: 'Conjunto casual con chaqueta acolchada The North Face, gorra celeste NY & jeans claros de diseño, una combinación perfecta para un estilo urbano.',precio: '$2200.00'}
    ,{image: '/img/man/outfit_m34.jpg',nombre: 'Outfit 34',descripcion: 'Set deportivo de Nike en tonos beige, incluye camiseta & un joggers de pana, finalizado con unas medias a juego para un look deportivo.',precio: '$1000.00'}
    ,{image: '/img/man/outfit_m35.jpg',nombre: 'Outfit 35',descripcion: 'Conjunto invernal con chaleco The North Face marrón, sudadera Nike y jeans cafés.',precio: '$2400.00'}
    ,{image: '/img/man/outfit_m36.jpg',nombre: 'Outfit 36',descripcion: 'Conjunto casual con camisa de franela en tonos marrón, jeans y gorra a juego, ideal para un día de relax con estilo.',precio: '$1200.00'}
    ,{image: '/img/man/outfit_m37.jpg',nombre: 'Outfit 37',descripcion: 'Conjunto casual con camisa de franela en negro y blanco, camiseta negra y pantalón tipo cargo, un look relajado & moderno.',precio: '$1050.00'}
    ,{image: '/img/man/outfit_m38.jpg',nombre: 'Outfit 38',descripcion: 'Conjunto deportivoe Lacoste en total black, incluye unaT-shirt tipo polo negra y un pans a juego que te da comodidad & clase.',precio: '$3100.00'}
    ,{image: '/img/man/outfit_m39.jpg',nombre: 'Outfit 39',descripcion: 'Conjunto invernal con chaqueta acolchada Lacoste, pans negro y una gorra a juego, una elección perfecta para lucir increible en invierno.',precio: '$3800.00'}
    ,{image: '/img/man/outfit_m40.jpg',nombre: 'Outfit 40',descripcion: 'Conjunto deportivo Sinclair, que consta de una sudadera negra cerrada y un pans a juego, que garantizan un atuendo total black, para un look audaz & cómodo.',precio: '$2000.00'}
    ,{image: '/img/man/outfit_m41.jpg',nombre: 'Outfit 41',descripcion: 'Conjunto casual con camiseta gráfica de los Lakers, acompañada de un jogger gris, el atuendo idealpara esos dias de descanso donde quieres lucir bien',precio: '$700.00'}
    ,{image: '/img/man/outfit_m42.jpg',nombre: 'Outfit 42',descripcion: 'Conjunto Adidad deportivo, incluye una sudadera blanca y joggers negros, perfecto para un día de descanso estiloso.',precio: '$1100.00'}
    ,{image: '/img/man/outfit_m43.jpg',nombre: 'Outfit 43',descripcion: 'Conjunto deportivo, ideal para ir al gimnasio, incluye un jogger color crema, acompañado de una sudadera con diseño',precio: '$1300.00'}
    ,{image: '/img/man/outfit_m44.jpg',nombre: 'Outfit 44',descripcion: 'Conjunto casual de Nike con sudadera roja y joggers negros, el mejor estilo & toda la comodidad garantizada.',precio: '$1100.00'}
    ,{image: '/img/man/outfit_m45.jpg',nombre: 'Outfit 45',descripcion: 'Con este conjunto deportivo Nike, conformado por una sudadera en tonos blancos & negros, acompañada deun jogger negro, te veras bien & te sentiras mejor.',precio: '$1300.00'}
    ,{image: '/img/man/outfit_m46.jpg',nombre: 'Outfit 46',descripcion: 'Conjunto casual con sudadera beige & joggers negros, complementado con una gorra negra NY que conforman el match perfecto.',precio: '$1150.00'}
    ,{image: '/img/man/outfit_m47.jpg',nombre: 'Outfit 47',descripcion: 'Conjunto casual con camisa de franela gris y blanca, joggers grises y una sudadera a juego, perfecto para un look contemporáneo y cómodo.',precio: '$1400.00'}
    ,{image: '/img/man/outfit_m48.jpg',nombre: 'Outfit 48',descripcion: 'Conjunto invernal con chaqueta acolchada The North Face, pantalones tipo cargo marrones y una sudadera de diseño, ideal para enfrentar el frío con estilo.',precio: '$2340.00'}
    ,{image: '/img/man/outfit_m49.jpg',nombre: 'Outfit 49',descripcion: 'Conjunto invernal Nike con chaqueta acolchada en blanco y negro, joggers y una sudadera negra, perfecto para mantener un estilo deportivo durante el invierno.',precio: '$2200.00'}
    ,{image: '/img/man/outfit_m50.jpg',nombre: 'Outfit 50',descripcion: 'Conjunto invernal con chaqueta acolchada negra, jeans corte recto y un sudadera blanca que resalta el look final con un equilibrio entre urbano y sofisticado.',precio: '$2960.00'}
];
export {productos2};
