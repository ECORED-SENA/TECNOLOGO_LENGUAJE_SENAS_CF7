export default {
  global: {
    componenteFormativo:
      'Vocabulario técnico, requerimientos y salud ocupacional',
    descripcionCurso:
      'La Interpretación y traducción en lengua de señas colombiana (LSC) – español, integra conocimientos sobre lo educativo y los servicios de interpretación y traducción desde una perspectiva de los determinantes sociales y en consonancia con las políticas nacionales, en especial desde la Constitución Política de 1991 que reguló las leyes que promueven sus derechos y garantías, además del apoyo en la investigación, enseñanza y difusión de la Lengua de Señas Colombiana LSC.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal_1.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal_7.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Vocabulario técnico, documentación y bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Vocabulario técnico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Documentación y bases de datos aplicados a la interpretación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Materiales y contenidos para el servicio de interpretación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requerimientos para el servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Acuerdos metodológicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Aspectos prosódicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Salud ocupacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Enfermedades profesionales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Métodos profilácticos de prevención y respiración',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 1477 de 2014.  Por el cual se expide la Tabla de Enfermedades Laborales. 5 de agosto de 2014. D.O. 49234.',
    },
    {
      referencia:
        'Decreto 1072 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. 26 de mayo de 2015. D.O. 49,523.',
    },
    {
      referencia:
        'Domínguez Araújo, L. (2015). La Evaluación para el aprendizaje de la interpretación de conferencias concepciones y prácticas de docentes y discentes en tres cursos de posgrado de Cataluña, Portugal y Canarias. Universitat Autònoma de Barcelona.',
    },
    {
      referencia:
        'Houeh, L.L., & Hui-Chuan, L. (2005). Estudio sobre la interacción entre las estructuras textuales y oracionales. Glosas didácticas: revista electrónica internacional de didáctica de las lenguas y sus culturas, (15), 13.',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. D.O. 51478.',
    },
    {
      referencia:
        'Martín, R. (1995). Lingüística para traducir. Barcelona: Teide.',
    },
    {
      referencia:
        'Ministerio de tecnologías de la información y las comunicaciones. Peticiones, quejas, reclamos, sugerencias y denuncias (PQRSD)',
      link:
        'https://www.mintic.gov.co/portal/inicio/Peticiones-quejas-reclamos-sugerencias-y-denuncias-PQRSD/',
    },
    {
      referencia:
        'Moya, V. (1993). Nombres propios: su traducción. Revista de Filología de la Universidad de la Laguna, (12), 233-248',
    },
    {
      referencia:
        'Vicente, C. (2010). Sobre algunos mitos del vocabulario técnico: un traductor advertido vale por dos.',
    },
    {
      referencia:
        'Villamil Camacho, D. F., Quintero Suaréz, L. A., Guzmán Rodríguez, D. B., & Ruiz Nova, C. D. (2018). " Todo a la vez puede llegar a ser muy aturdidor". Percepción del peligro ocupacional en un grupo de intérpretes de lengua de señas en una institución educativa del Municipio de Facatativá.',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'Utilizar equivalentes conocidos en la lengua meta para el proceso de interpretación y traducción. También es conocida como traducción libre..',
    },
    {
      termino: 'Anfibología',
      significado: 'Palabras o frases con más de un sentido o interpretación.',
    },
    {
      termino: 'Antropónimo',
      significado: 'Nombre propio de una persona.',
    },
    {
      termino: 'Connotativo',
      significado:
        'Palabras a manera de símbolos o metáforas para transmitir emociones o sentimientos.',
    },
    {
      termino: 'Couplet',
      significado:
        'Técnica en la interpretación conocida como doblete, que consiste en la transcripción del nombre original, pero agregando una traducción o interpretación propia más familiar a la lengua meta.',
    },
    {
      termino: 'Dialectismo',
      significado: 'Construcción sintáctica que caracteriza un dialecto.',
    },
    {
      termino: 'Homonimia',
      significado:
        'Dos o más palabras que se escriben o pronuncian igual, pero tienen diferente significado.',
    },
    {
      termino: 'Idiolecto',
      significado: 'Lenguaje o manera de hablar particular de una persona.',
    },
    {
      termino: 'Metonimia',
      significado:
        'Figura retórica para designar algo con otro nombre con el que tiene una relación semántica',
    },
    {
      termino: 'Naturalización',
      significado:
        'También conocido como domesticación, este término hace referencia a la eliminación de algunos elementos de la lengua origen que se reemplazan por otros que son propios de la lengua meta.',
    },
    {
      termino: 'Pidgin',
      significado:
        '“Lengua mixta, creada sobre la base de una lengua determinada y con la aportación de numerosos elementos de otra u otras, que usan especialmente en enclaves comerciales hablantes de diferentes idiomas para relacionarse entre sí”. Diccionario de la Real Academia Española (RAE).',
    },
    {
      termino: 'Polisemia',
      significado: 'Palabra que tiene varios significados.',
    },
    {
      termino: 'Sinonimia',
      significado:
        'Característica de dos palabras o más que comparten un significado.',
    },
    {
      termino: 'Sociolecto',
      significado:
        'Clasificación de hablantes según su clase social y nivel de educación. ',
    },
    {
      termino: 'Topónimo',
      significado: 'Nombre propio de un lugar.',
    },
    {
      termino: 'Transferencia',
      significado:
        'Conocida también como traducción por diccionario, es una técnica traductológica que parte de una palabra en su forma original para encontrar un equivalente en el nuevo idioma.',
    },
    {
      termino: 'Transliterar',
      significado:
        'Representar los signos o caracteres de un sistema de escritura mediante los signos de otro.',
    },
  ],
  complementario: [
    {
      texto:
        'Vicente, C. (2010). Sobre algunos mitos del vocabulario técnico: un traductor advertido vale por dos.',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo 2. Sobre_algunos_mitos_del_vocabulario_tecnico_Vicente.pdf',
    },
    {
      texto:
        'Moya, V. (1993). Nombres propios: su traducción. Revista de Filología de la Universidad de la Laguna, (12), 233-248.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo 4. Nombres_propios_su_traduccion.pdf',
    },
    {
      texto:
        'Parkinson de Saz, S. M. (1984). Teoría y técnicas de la traducción. Boletín AEPE, 31, 91-109.',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO 9 Teoría_y_técnicas_de_la_traducción.pdf',
    },
    {
      texto:
        'Carr, K. (2013). Métodos y técnicas de traducción de los culturemas en la versión española de Skumtimmen, de Johan Theorin.',
      tipo: 'Artículo',
      descarga:
        '/downloads/ANEXO 10 Métodos_y_técnicas_ traducción_ en_culturemas.pdf',
    },
    {
      texto: 'Matamoros, M. (2015). Procedimientos de traducción. UAMex.',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO 13 Procedimientos_de_traducción.pdf',
    },
    {
      texto:
        'Montes Giraldo, J. J. (1982). El español de Colombia: propuesta de clasificación dialectal. Thesaurus: Boletín del Instituto Caro y Cuervo, 37(1), 23-92.Acosta, D. F. (2020). El voseo en Medellín, Colombia: un rasgo dialectal distintivo de la identidad paisa. Dialectologia: revista electrònica, 91-109.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 18 El_voseo_en_Medellín_un_rasgo_dialectal_distintivo.pdf',
    },
    {
      texto:
        'Gómez Font, A. (1998). Un nuevo lenguaje técnico: el español en la red.',
      tipo: 'Artículo',
      descarga: '/downloads/Anexo 19 Un_nuevo_lenguaje_técnico.pdf',
    },
    {
      texto:
        'Gómez, N. L. (1999). Estructuras básicas y procesos fonológicos en la lengua de señas colombiana.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 21 Estructuras_basicas_y_procesos_fonológicos_en_LSC.pdf',
    },
    {
      texto:
        'Fridman-Mintz, B. (2012). Reflexiones sobre las etnias sordas. En el Congreso iberoamericano de educación bilingüe para sordos, Paraguay.',
      tipo: 'Artículo',
      descarga: '/downloads/Anexo 22 Sobre_como_nombramos_a_los_sordos.pdf',
    },
    {
      texto:
        'Massone, M. I., & Menéndez, S. M. (1996). Una aproximación interaccional para el análisis de la Lengua de Señas Argenfina.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 23 Una_aproximación_interaccional_para_el_análisis_de_la_Lengua_de_Señas_Argentina.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo: 'Instructora',
        centro: 'Centro de Servicios de Salud - Regional Antioquia.',
      },
      {
        nombre: 'Manuel Alejandro Garzón',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia.',
      },
      {
        nombre: 'German Albeiro Saldarriga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante',
        cargo: 'Profesional Diseño Curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander.',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Diana Carolina Acevedo Barón'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
