export default {
  global: {
    componenteFormativo:
      'Resolución 20223040006915 de 2022. Manual de transporte',
    descripcionCurso:
      'Este componente formativo aborda la Resolución 20223040006915 de 2022 y busca que el aprendiz comprenda los lineamientos técnicos para el transporte terrestre de animales destinados al consumo humano en Colombia. Mediante el análisis de la normativa, se fortalecen competencias para asegurar bienestar animal, condiciones sanitarias, higiene y seguridad durante la movilización, promoviendo prácticas responsables en el sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Vehículo de transporte terrestre para animal en pie',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de diseño de carrocería',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Tipos de corrales, equipo de monitoreo, especificaciones técnicas (sistemas de vigilancia y microclima de carrocerías) y uso',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ficha técnica de homologación del transporte terrestre',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Registro RUNT',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tipos de documentos legales',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Condiciones sanitarias de estructura de carrocería',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Magnitud de carga',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de cálculo de magnitud de carga',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bienestar y protección animal en transporte terrestre',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de conducción',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Tipos y técnicas de inspección de vehículos destinados al transporte de animales en pie',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Protocolos de bioseguridad',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Técnicas de limpieza y aseo, tipos de producto',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Entidades de prevención, vigilancia y control',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo:
              'Curso de bienestar animal en transporte terrestre (Cumplimiento)',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Interacción humano – animal, comportamiento, sentidos animal y etología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguridad sanitaria animal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sanidad y salud animal (rangos de temperatura)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas y métodos de cuidado y manejo animal',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Técnicas de identificación de animales aptos y no aptos para transporte',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Instalaciones pecuarias',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
  complementario: [
    {
      tema: '1. Vehículo de transporte terrestre para animal en pie',
      referencia: 'Instituto Colombiano Agropecuario - ICA. (2025). SIGMA',
      tipo: 'Página',
      link: 'https://www.ica.gov.co/servicios_linea/sigma.aspx',
    },
    {
      tema: '1. Vehículo de transporte terrestre para animal en pie',
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2024, 30 de abril). ICA | SINIGAN | Cómo se expide una GSMI y un bono de venta a través del usuario del ganadero [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6l8ejCFk-t0',
    },
    {
      tema: '2. Marco normativo',
      referencia:
        'Ministerio de Transporte - ICA (2022, 11 de febrero). Resolución 20223040006915 de 2022. Por la cual se adopta el Manual de Procedimientos para el Transporte, manejo y movilización de Animales en Pie y se dictan otras disposiciones.',
      tipo: 'Documento oficial',
      link:
        'https://www.ica.gov.co/getattachment/ab7e54ab-28a0-4c58-9a86-8ecc49fea4a9/2022R3040006915.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'condición física y mental de un animal en relación con su entorno, garantizando que esté sano, cómodo, bien alimentado y libre de sufrimiento.',
    },
    {
      termino: 'Densidad de carga',
      significado:
        'relación entre el número de animales, su peso y el espacio disponible en el piso del vehículo, crucial para evitar el hacinamiento y las lesiones.',
    },
    {
      termino: 'Embarque',
      significado:
        'procedimiento de subir los animales al vehículo de transporte. Debe realizarse de manera tranquila, sin maltrato y utilizando instalaciones adecuadas como las rampas.',
    },
    {
      termino: 'Guía Sanitaria de Movilización Interna (GSMI)',
      significado:
        'documento oficial expedido por el ICA que autoriza el transporte de animales en el territorio nacional, certificando su origen y destino, y avalando su condición sanitaria.',
    },
    {
      termino: 'Jornada de viaje',
      significado:
        'período máximo de tiempo durante el cual los animales pueden ser transportados de manera continua antes de que sea obligatorio un período de descanso, alimentación e hidratación.',
    },
    {
      termino: 'Transportador',
      significado:
        'persona natural o jurídica, propietaria o tenedora de un vehículo de transporte de animales, responsable de garantizar el cumplimiento de las condiciones de bienestar y sanidad durante la movilización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1989, 27 de diciembre). Por la cual se adopta el Estatuto Nacional de Protección de los Animales y se crean unas contravenciones y se regula lo referente a su procedimiento y competencia.',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=8242',
    },
    {
      referencia:
        'Congreso de Colombia. (2016, 6 de enero). Ley 1774 de 2016. Por medio de la cual se modifican el Código Civil, la Ley 84 de 1989, el Código Penal, el Código de Procedimiento Penal y se dictan otras disposiciones.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1774_2016.html',
    },
    {
      referencia:
        'Contexto Ganadero. (2017). 7 aspectos importantes del Bienestar Animal.',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/7-aspectos-importantes-del-bienestar-animal',
    },
    {
      referencia:
        'Contexto Ganadero. (2018). ¿Por qué es importante conocer el punto de balance en bovinos?',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/por-que-es-importante-conocer-el-punto-de-balance-en-bovinos',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s.f.). Bienestar animal.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Transporte - ICA (2022, 11 de febrero). Resolución 20223040006915 de 2022. Por la cual se adopta el Manual de Procedimientos para el Transporte, manejo y movilización de Animales en Pie y se dictan otras disposiciones.',
      link:
        'https://www.ica.gov.co/getattachment/ab7e54ab-28a0-4c58-9a86-8ecc49fea4a9/2022R3040006915.aspx',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (OMSA). (2021). Código y Manuales.',
      link: 'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/',
    },
    {
      referencia:
        'Ramírez Agudelo, J. F., Guarín Montoya, J. F. & Bedoya Mazo, S. (2022). Detección automática de posición corporal en animales de granja. SciELO Preprints.',
      link:
        'https://preprints.scielo.org/index.php/scielo/preprint/download/3705/6856',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Eduardo Villarraga Córdoba',
          cargo: 'Experto temático',
          centro: 'Regional Huila - Centro de Formación Agroindustrial',
        },
        {
          nombre: 'Lola Fernanda Herrera H.',
          cargo: 'Apoyo gestión curricular',
          centro: 'Regional Huila - Centro de Formación Agroindustrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez ',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
