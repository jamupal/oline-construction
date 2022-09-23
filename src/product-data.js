const products = [
  {
    id: 1,
    name: "Lavamanos",
    productType: "Lavamanos conicos dorados",
    category: 1,
    price: 310000,
    rating: 5,
    image:
      "/images/baños/lavamanos/LAVAMANOS-CONICO-DORADOOF.jpg",
    description:
    "Lavamanos tipo vessel en porcelana sanitaria, puede instalarse con grifería a pared o de mesón, cumple con las normas ASME/ANSI A112",
  },
  {
    id: 2,
    name: "Lavamanos ",
    productType: "Lavamanos vidrio azul",
    category: 1,
    price: 260000,
    rating: 4,
    image:
      "/images/baños/lavamanos/LAVAMANOS-VIDRIO-AZUL-SD-32CM-.jpg",
    description:
    "Lavamanos tipo vessel en porcelana sanitaria, puede instalarse con grifería a pared o de mesón, cumple con las normas ASME/ANSI A112",
  },
  {
    id: 3,
    name: "Lavamanos",
    productType: "Lavamanos gaira blanco",
    category: 1,
    price: 320900,
    rating: 3,
    image:
      "/images/baños/lavamanos/LAVAMANOS-GAIRA-BLANCO-.jpg",
    description:
      "Quieres un cambio en tu baño? Incluye el lavamanos Milano con pedestal, el cual además de ser funcional, tiene un diseño contemporáneo ideal para espacios los reducidos. ¡Tienes que tenerlo!",
  },
  {
    id: 4,
    name: "Lavamanos",
    productType: "Lavamanos tazon chocolate",
    category: 1,
    price: 200000,
    rating: 5,
    image:
      "/images/baños/lavamanos/LAVAMANOS-TAZON-CHOCOLATE-35-CM-.jpg",
    description:
      "Lavamanos tipo vessel en porcelana sanitaria, puede instalarse con grifería a pared o de mesón, cumple con las normas ASME/ANSI A112",
  },
  {
    id: 5,
    name: "Sanitario",
    productType: "Sanitario Inteligente Funzionale One Piece",
    category: 2,
    price: 8699900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/334146_2?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Sanitario Funzionale es un homenaje al minimalismo puro, facultándole al diseño valores como la serenidad, el orden y planteando un contraste entre un diseño sencillo y una tecnología inteligente de avanzada. Funciones como el bidet, control de temperatura del agua y del aro ajustable consiguen la unidad de forma, logrando una pieza excepcionalmente funcional con modernos y exclusivos ítems como un secador y sistema de accionamiento automático.",
  },
  {
    id: 6,
    name: "Sanitario",
    productType: "Sanitario One Piece Bilbao Blanco",
    category: 2,
    price: 948500,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/294628",
    description:
    "Sanitario One Piece Bilbao Blanco",
  },
  {
    id: 7,
    name: "Sanitario",
    productType: "Sanitario Montecarlo Advance",
    category: 2,
    price: 529900,
    rating: 4,
    image:

      "https://homecenterco.scene7.com/is/image/SodimacCO/455629_3?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Sanitario de una pieza moderno y ergonomico con Tecnología MaxiClean que permite mejor lavado de la taza reduciendo gérmenes y bacterias. Consumo de agua de sólo 4,6 litros por descarga.Capacidad de evacuación de sólidos (500 gr. de MISO).Altura familiar, uso tradicional.Moderno sistema de accionamiento con botón push ergonómico. Asiento cierre suave para mayor comodidad y amabilidad con el usuario.",
  },
  {
    id: 8,
    name: "Sanitario",
    productType: "Sanitario Tao Dual One Piece Blanco",
    category: 2,
    price: 399900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/219977_2?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Sanitario Tao Dual One Piece Blanco",
  },
  {
    id: 9,
    name: "Lavadero",
    productType: "Lavadero 60 cm x 50 cm x 16 cm Granito",
    category: 3,
    price: 184900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/55275?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Lavadero de adecuada presentación, fácil de instalar, superficie Áspera que ayuda a facilitar el uso, desagüe de gran evacuación de líquidos, de alta durabilidad gracias a los materiales de la mejor calidad, resistente a la humedad y suficiente espacio.",
  },
  {
    id: 10,
    name: "Lavadero",
    productType: "Lavaderos 80 x 60 x 25 cm Granito Pulido",
    category: 3,
    price: 262900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/67210?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Lavadero resistente, con moderno diseño, de fácil instalación, excelente calidad.",
  },
  {
    id: 11,
    name: "Lavadero",
    productType: "Lavadero 60 cm x 50 cm x 12 cm Granito",
    category: 3,
    price: 139900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/55274?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Fregadero de adecuada presentación, con depósito, fácil de instalar, superficie Áspera que ayuda a facilitar el uso, desfogue de gran evacuación de líquidos, de alta durabilidad gracias a los materiales de la mejor calidad, resistente a la humedad.",
  },
  {
    id: 12,
    name: "Lavadero",
    productType: "Lavadero 80 cm x 60 cm x 17 cm Granito",
    category: 3,
    price: 214900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/55277?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Lavadero de adecuada presentación, fácil de instalar, superficie Áspera que ayuda a facilitar el uso, desfogue de gran evacuación de líquidos, de alta durabilidad gracias a los materiales de la mejor calidad, resistente a la humedad y suficiente espacio.",
  },
  {
    id: 13,
    name: "Piso",
    productType: "Piso Laminado 8mm Roble Elton Ac4 Caja 1.99 M2",
    category: 4,
    price: 98500,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/875659?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Piso laminado",
  },
  {
    id: 14,
    name: "Piso",
    productType: "Piso Laminado 8mm Oak Caja 2.12 m2",
    category: 4,
    price: 103668,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/877315?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Clase 32 - Para uso doméstico intensivo - comercial normal",
  },
  {
    id: 15,
    name: "Piso",
    productType: "Piso Laminado 7mm Oak Dark Brown Caja 2.24 m2",
    category: 4,
    price: 107296,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/877519?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "AC-3 (uso doméstico intenso).",
  },
  {
    id: 16,
    name: "Piso",
    productType: "Piso Laminado 8mm Oak Brown Caja 1.99 m2",
    category: 4,
    price: 117211,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/877522?fmt=jpg&fit=fit,1&wid=200&hei=200",
    description:
    "AC-4 (uso comercial moderado).",
  },
  {
    id: 17,
    name: "Taladro",
    productType: "Taladro Inalámbrico Rotación 3/8-pulg 20V I-L VVR Black+Decker",
    category: 5,
    price: 209900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/497588?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Luz LED integrada para iluminar superficies de trabajo con poca iluminación. El embrague de 11 posiciones ayuda a evitar que los tornillos se suelten. Batería de iones de litio de 20 V MAX * para una excelente potencia y tiempo de ejecución. Portabrocas integrado para almacenamiento y organización. Parte del sistema 20V MAX * (El voltaje inicial máximo de la batería (medido sin carga de trabajo) es de 20 voltios. El voltaje nominal es de 18 voltios. Aplicaciones: Decoración colgante. Asamblea General. Proyectos de carpintería. Reparaciones del hogar.",
  },
  {
    id: 18,
    name: "Bauker",
    productType: "Kit Taladro Percutor 3/8-pulg 12V 1.3Ah I-L + 29 Accesorios Bauker",
    category: 5,
    price: 199900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/402014?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Taladro Percutor 3/8-pulg 12V 1.3Ah I-L + Accesorios 29 Piezas | Bauker | Herramientas",
  },
  {
    id: 19,
    name: "Black + Decker",
    productType: "Taladro 1/2 Percutor 550W 2800 Rpm Vvr",
    category: 5,
    price: 131900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/296233?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Taladro Percutor HD555-B3. Potente motor de 550W. Selector de percusión o rotación. Mandril de 1/2 (13mm). Barra de profundidad. Velocidad variable y reversa. Interruptor con bloqueo para uso continuo. Especificaciones técnicas. Potencia: 550W. Velocidad: 0 - 2800/min (rpm). Percución: 0 - 45000ipm (bpm). Mandril: 1/2 (13mm). Traba de gatillo: Si. Cable: 1,8m. Capacidad de acero: 1/2 (13mm). Capacidad de madera: 1-1/4 (32mm). Capacidad de Concreto: 1/2 (13 mm).",
  },
  {
    id: 20,
    name: "Bauker",
    productType: "Taladro Percutor 3/8-pulg 600 W 3000Rpm V.V.R. Bauker",
    category: 5,
    price: 99900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/315726?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Tipo de velocidad: Variable reversible",
  },
  {
    id: 21,
    name: "Redline",
    productType: "Mazo goma mango acero 8 onzas 15MAT5K",
    category: 6,
    price: 19900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/54849_17?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Mazo de goma, 8 onzas, mango de acero, cubierto de goma para mayor agarre, revestimiento en caucho, cabeza de alta resistencia, resistente a la humedad, fácil de usar.",
  },
  {
    id: 22,
    name: "Karson",
    productType: "Martillo una 13 onzas mango madera 1561331",
    category: 6,
    price: 14900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/97957?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Mango madera",
  },
  {
    id: 23,
    name: "Redline",
    productType: "Martillo Stubby 8 Onzas",
    category: 6,
    price: 18900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/163572?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Se recomienda leer instrucciones de uso y utilizar elementos de protección personal.",
  },
  {
    id: 24,
    name: "Incolma",
    productType: "Almadana 4 libras con cabo 92330420",
    category: 6,
    price: 72900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/66005?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Almadana, herramienta manual con mango cómodo y resistente montado a presión, con cabeza octagonal de acero al carbono preparado para alto impacto y duración.",
  },
  {
    id: 25,
    name: "Stanley",
    productType: "Alicate 8 Pulgadas Electricista Pro Ref 84-056LA",
    category: 7,
    price: 43900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/41643?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Mango Bi-Material anti-deslizante. ? Protección pronunciada en la parte superior del mango, para impedir que la mano toque la mordaza de metal en las aplicaciones eléctricas. ? Acero Cromo Níquel resistente durable, para cortes fuertes. ? Superficie de corte tratada térmicamente. ? Ideal para electricistas. Especificaciones técnicas: » Longitud: 8 pulg (203 Mm) » Ancho: 2-2/5 (61 Mm) » Profundidad: 3/4 (19 mm) Herramienta manual para uso profesional, Garantia de por vida util",
  },
  {
    id: 26,
    name: "Stanley",
    productType: "Hombresolo 10 Pulgadas Curvo Ref 84-369",
    category: 7,
    price: 32900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/38590?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Alicate de presión quijada curva, mordaza superior fija con soldadura de cobre para máxima fuerza de apriete, ajustable palanca de fácil liberación de presión.",
  },
  {
    id: 27,
    name: "Ubermann",
    productType: "Alicate 6-pulg Corte Diagonal Ubermann",
    category: 7,
    price: 34900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/328700?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Nuevo diseño en cromo níquel",
  },
  {
    id: 28,
    name: "Karson",
    productType: "Alicate 6 pulgadas punta larga cortante, Tornado Tools P036-10",
    category: 7,
    price: 7500,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/97926?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Pinesa resistible",
  },
  {
    id: 29,
    name: "Stanley",
    productType: "Destornillador Tipo Ratchet + 10 Puntas",
    category: 8,
    price: 61900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/67997?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Destornillador con varias puntas para cualquier tipo de uso.",
  },
  {
    id: 30,
    name: "Pretul",
    productType: "Destornillador Tipo Ratchet Con 6 Puntas Y 7Copas",
    category: 8,
    price: 47900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/413810?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Destornillador Tipo Ratchet Con 6 Puntas Y 7 Copas PRETUL, Mecánica, carpintería, industria, hogar, etcétera.",
  },
  {
    id: 31,
    name: "Truper",
    productType: "Destornillador Tipo Ratchet Con 18 Puntas 6Copas",
    category: 8,
    price: 90900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/413941?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "Destornillador Tipo Ratchet Con 18 Puntas Y 6 Copas TRUPER. Con puntas forjadas en acero al cromo vanadio.",
  },
  {
    id: 32,
    name: "Pretul",
    productType: "Juego de 6 Destornilladores Mango Pvc",
    category: 8,
    price: 42900,
    rating: 4,
    image:
      "https://homecenterco.scene7.com/is/image/SodimacCO/413853?fmt=jpg&fit=fit,1&wid=420&hei=420",
    description:
    "uego De 6 Destornilladores Mango Pvc PRETUL. Apretar o aflojar tornillos o pijas en trabajos de carpintería, construcción, mecánica, electricidad, electrónica, cerrajería o reparaciones domésticas.",
  },
];

export default products;
