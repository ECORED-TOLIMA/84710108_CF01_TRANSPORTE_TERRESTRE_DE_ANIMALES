<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Interacción humano – animal, comportamiento, sentidos animal y etología
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img1.png" alt="Imagen decorativa")
    
    p.mb-4(data-aos="fade-right") La interacción entre el ser humano y el animal es crítica en el transporte terrestre, ya que el manejo adecuado influye directamente en los niveles de estrés y, por ende, en el bienestar animal y la calidad de la carne (inocuidad). El manual de procedimientos exige que el personal tenga un conocimiento básico de etología (ciencia que estudia el comportamiento animal) y de sus sentidos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Principios de interacción humano – animal
    p.mb-4(data-aos="fade-right") La normativa del transporte se centra en la aplicación de técnicas de manejo que minimizan la respuesta negativa del animal al contacto humano y se deben tener en cuenta las siguientes acciones:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.orden-lg-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Minimizar el estrés y la angustia")
            .col-lg-12
              p La interacción debe basarse en la calma, eliminando el hostigamiento, los gritos y el uso de la fuerza innecesaria. El estrés es el principal causante de lesiones y caídas durante el cargue y descargue y afecta la calidad del canal.
              p.mb-0 Soporte documental: la norma busca "evitar sufrimiento y dolor a los animales". Esto se logra mediante un manejo humanitario.
          .row(titulo="Conocimiento del comportamiento")
            .col-lg-12
              p El personal debe conocer el comportamiento natural de la especie que maneja (ej. bovinos vs. porcinos) para utilizar técnicas que cooperan con el animal en lugar de forzarlo.
              ul.lista-ul
                li
                  i.fas.fa-horse-head
                  p.mb-0 #[b Soporte documental:] el Curso de Bienestar Animal (Numeral 6) obliga a capacitar al personal en estas técnicas.
                li
                  i.fas.fa-horse-head
                  p.mb-0 #[b Comportamiento:] comprender cómo los animales perciben su entorno y responder a estímulos es esencial para un manejo eficiente y tranquilo.
                li
                  i.fas.fa-horse-head
                  p.mb-0 #[b Comportamiento y la zona de fuga:] los animales de granja, al ser especies de presa, poseen una zona de fuga o área de seguridad que el manejador debe respetar.              
      .col-lg-4.col-6.order-1.orden-lg-2.mb-4.mb-lg-0
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img2.png" alt="Imagen decorativa")
    p.mb-4(data-aos="fade-right") Basado en la zona de fuga o área de seguridad de los animales de granja, es preciso conocer lo siguiente:

    .row.mb-lg-5.mb-4
      .col-sm-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta--boton.color-primario.tarjeta--BG04.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12
              .divcentrado
                .imgg2.img5
          h5.text-center Definición
          p.mb-0 Es el espacio alrededor del animal que, si es invadido por el humano, provoca que el animal se sienta amenazado y huya.
      .col-sm-10.col-lg-4.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.color-primario.tarjeta--BG04.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12
              .divcentrado
                .imgg2.img6
          h5.text-center Técnica de manejo
          p.mb-0 El manejador debe trabajar justo en el borde de esta zona de fuga para mover al animal de forma efectiva y sin estrés. Avanzar dentro de esta zona genera pánico y resistencia.
      .col-sm-10.col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta--boton.color-primario.tarjeta--BG04.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12
              .divcentrado
                .imgg2.img7
          h5.text-center Punto de equilibrio
          p.mb-0 Es un punto imaginario (usualmente a la altura del hombro) que, si es cruzado por el manejador, hace que el animal avance (si se mueve detrás) o retroceda (si se mueve delante).

    p.mb-4(data-aos="fade-right") Para aclarar un poco lo relacionado con estos principios de interacción, se invita a que analice la siguiente imagen: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 5.
          i  Zona de fuga o área de seguridad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img6_1.svg', alt='Figura 5 que relaciona las zonas de fuga o las áreas de seguridad que el manejador debe conocer con respecto al animal, las cuales son: Zona ciega. Zona de fuga. Posición de parada. Posición de avance,Punto de balance')
        figcaption Fuente: Ramírez, Guarín Montoya & Bedoya (2022)
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Figura 5 que relaciona las zonas de fuga o las áreas de seguridad que el manejador debe conocer con respecto al animal, las cuales son: Zona ciega. Zona de fuga. Posición de parada. Posición de avance,Punto de balance')
        figcaption Fuente: Ramírez, Guarín Montoya & Bedoya (2022)

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Sentido animal, relevantes en el manejo
      
    p.mb-4(data-aos="fade-right") Comprender cómo perciben los animales su entorno es clave para un manejo y transporte seguros. Por ello, se relaciona una tabla que resume la importancia de cada sentido en el comportamiento de los bovinos y otras especies; además de cómo estos factores influyen en su reacción ante estímulos durante las labores de movilización:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 43.
      i Percepción animal y su impacto en el manejo y transporte
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .tabla-a.color-acento-contenido.table-wrapper
          table.tabla-responsive
            thead
              tr(data-aos="fade-right")
                th Sentido
                th Importancia para el manejo y transporte
            tbody
              tr(data-aos="fade-right")
                td(data-label="Sentido") #[b Vista (visión panorámica)]
                td(data-label="Importancia para el manejo y transporte") Los bovinos y otras especies tienen visión binocular limitada y una visión panorámica amplia. Esto significa que son muy sensibles a los movimientos laterales y a los contrastes de luz y sombra (manchas en el piso o rampas).
              tr(data-aos="fade-right")
                td(data-label="Sentido") #[b Oído (sensibilidad al sonido)]
                td(data-label="Importancia para el manejo y transporte") Los animales tienen un rango auditivo más sensible que el humano. El ruido, los gritos o los silbidos fuertes (ej. de motores o frenos) actúan como un gran estresor y deben evitarse.
              tr(data-aos="fade-right")
                td(data-label="Sentido") #[b Olfato]
                td(data-label="Importancia para el manejo y transporte") Aunque no es tan dominante en el manejo, los animales detectan el olor de la sangre o de otros animales estresados o muertos, lo que puede incrementar rápidamente el nivel de pánico en todo el grupo.
              tr(data-aos="fade-right")
                td(data-label="Sentido") #[b Tacto]
                td(data-label="Importancia para el manejo y transporte") La sensibilidad táctil influye en el uso de los implementos de manejo (banderas, paletas o bastones). Estos deben usarse solo como extensión del brazo, tocando la zona de impulso del animal, y nunca como elemento de castigo.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Manejo etológico: etapas del transporte que lo requieren 
    p.mb-4(data-aos="fade-right") El conocimiento del comportamiento animal se aplica obligatoriamente en todas las fases del transporte, como son:

    .tarjeta--BG02.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Cargue y descargue
              p.mb-0 Es la fase de mayor riesgo de lesión. El manejo etológico exige el uso de rampas con baja inclinación (máximo 20°) y superficies antideslizantes, moviendo a los animales en grupos pequeños o individualmente con calma, sin el uso de elementos que generen dolor o temor.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Movimiento en ruta
              p.mb-0 El conductor debe aplicar técnicas de conducción suave (frenado y aceleración progresiva) para contrarrestar la inercia y evitar que el animal pierda el equilibrio, lo que activa el miedo y el instinto de defensa.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img8.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Separación y densidad
              p.mb-0 El manejo exige la separación por grupos (toros, vacas, animales con cuernos) y el respeto a la densidad de carga para permitir al animal un comportamiento natural básico (levantarse o acostarse) y reducir el conflicto social dentro del vehículo.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img9.png', alt='Imagen decorativa')



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100(style="padding-top: 5px !important")
            .text-white.p-4
              p(style="margin-top: 42px;").text-bold.text-center Soporte documental
              p.text-center.mb-0 La separación de animales es un requisito explícito para evitar hostilidad.



    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Seguridad sanitaria animal
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img11.svg" alt="Imagen decorativa")
      .col-lg-11
        p.mb-0(data-aos="fade-right") La #[b seguridad sanitaria] animal (también referida en la documentación como condiciones sanitarias y fitosanitarias) en el transporte terrestre es el conjunto de y protocolos destinados a prevenir la transmisión y dispersión de enfermedades durante la movilización, protegiendo tanto la salud de los animales como la inocuidad de los productos finales de consumo humano.
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Concepto y objetivo de la seguridad sanitaria
    
    p.mb-4(data-aos="fade-right") La seguridad sanitaria implica la aplicación de la bioseguridad y los controles oficiales en cada etapa del transporte. Su objetivo es mantener el estado de salud de la carga viva y evitar que el vehículo actúe como un vector de enfermedades (contaminación cruzada) o que los fluidos biológicos contaminen el medio ambiente.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Objetivo de la norma
    
    p.mb-4(data-aos="fade-right") El objetivo de la Resolución 20223040006915, en materia sanitaria, es dual:

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2.mb-lg-0
        .row
            .col-lg-12
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
                .tarjeta.tarjeta--verde
                  .p-4
                    h5 1.	Garantizar la salud animal
                    p.mb-0 Evitar el sufrimiento, el dolor y las enfermedades que comprometen la vida de los animales durante el viaje.
            .col-lg-12
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema3/img13.svg' alt='AvatarTop')
                .tarjeta.tarjeta--verde
                  .p-4
                    h5 2.	Asegurar la inocuidad
                    p.mb-0 Mejorar la calidad e inocuidad de la carne en beneficio de los consumidores, ya que un animal estresado o enfermo compromete la calidad sanitaria del canal.
            
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img15.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100(style="padding-top: 5px !important")
            .text-white.p-4
              h5.text-center(style="margin-top: 42px;") Soporte documental (ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie, Pág. 2)
              p.text-center.mb-0 "...se proveen condiciones sanitarias, fitosanitarias y de bienestar animal, evitando así, sufrimiento y dolor a los animales durante... mejorando en este sentido la calidad e inocuidad de la carne, en beneficio de los consumidores".




    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Sanidad y salud animal (rangos de temperatura)
    p.mb-4(data-aos="fade-right") La seguridad sanitaria y salud animal en el transporte terrestre, se enfoca en la prevención de riesgos biológicos y físicos que afectan el estado físico y mental de los animales, teniendo como punto de control clave el manejo de la temperatura.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Rango de temperatura para la salud animal

    p.mb-4(data-aos="fade-right") El control de la temperatura es una medida esencial para evitar el estrés térmico, el cual compromete la salud y el bienestar de los animales durante el viaje. Al respecto se debe tener en cuenta:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Rango de temperatura permitido")
        .col-lg-6.mb-4.mb-md-0
          p.mb-0 Si el vehículo de transporte no cuenta con ventilación mecánica, deben procurarse las medidas necesarias para que la temperatura dentro del vehículo se mantenga comprendida entre 5 °C y 30 °C.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema3/img16.png', alt='Texto que describa la imagen')
      .row(titulo="Aplicación específica")
        .col-lg-6.mb-4.mb-md-0
          p.mb-0 Esta disposición se menciona en el contexto de los requisitos técnicos para la especie porcina en camiones con ventilación natural, indicando la altura mínima de 90 cm, necesario para una correcta ventilación. Sin embargo, el principio es aplicable a todas las especies.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')
      .row(titulo="Propósito")
        .col-lg-6.mb-4.mb-md-0
          p.mb-0 La ventilación constante y el control de la temperatura garantizan que los animales no sufran de hipertermia (calor excesivo) o hipotermia (frío excesivo), las cuales debilitan su sistema inmune y aumentan el riesgo de enfermedad y muerte.
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema3/img18.png', alt='Texto que describa la imagen')

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Medidas de seguridad sanitaria
      
    p.mb-4(data-aos="fade-right") La sanidad animal está directamente ligada a las condiciones de higiene del vehículo y el control oficial, cuyo objetivo es la prevención, vigilancia y control de los riesgos sanitarios, biológicos y químicos; por lo anterior, se deben tener en cuenta las siguientes medidas y normativas:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 44.
      i Animales excluidos
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .tabla-a.color-acento-contenido.table-wrapper
          table.tabla-responsive
            thead
              tr(data-aos="fade-right")
                th Medida de seguridad sanitaria
                th Detalle y objetivo
                th Soporte documental (texto exacto)
            tbody
              tr(data-aos="fade-right")
                td(data-label="Medida de seguridad sanitaria") #[b Desinfección obligatoria]
                td(data-label="Detalle y objetivo") Se requiere la aplicación de procedimientos, después de una limpieza completa, para controlar los agentes infecciosos o parasitarios responsables de enfermedades animales, incluidas las zoonosis. Aplicación a los locales, vehículos y objetos contaminados.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 1. Desinfección): "Aplicación, después de una limpieza completa, de procedimientos destinados a controlar los agentes infecciosos o parasitarios responsables de enfermedades animales, incluidas las zoonosis".
              tr(data-aos="fade-right")
                td(data-label="Medida de seguridad sanitaria") #[b Limpieza de materia orgánica]
                td(data-label="Detalle y objetivo") La limpieza es la remoción de la materia orgánica e inorgánica visible (heces, orina, barro) en las superficies, realizada generalmente con agua y detergente. Es un paso previo obligatorio para que la desinfección sea efectiva.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 1. Limpieza): "Es la remoción de la materia orgánica e inorgánica visible presente en las superficies, realizada generalmente con agua y detergente".
              tr(data-aos="fade-right")
                td(data-label="Medida de seguridad sanitaria") #[b Piso estanco]
                td(data-label="Detalle y objetivo") El piso debe ser de material antideslizante y, principalmente, contar con un sistema que minimice o evite la filtración de materia fecal u orina hacia la vía pública, conteniendo los desechos biológicos que pueden diseminar patógenos.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 2.2.c.ii): "El piso deberá ser antideslizante y contar con un sistema que minimice la salida de materia fecal u orina".
              tr(data-aos="fade-right")
                td(data-label="Medida de seguridad sanitaria") #[b Requisitos de materiales]
                td(data-label="Detalle y objetivo") Las unidades de transporte deben ser elaboradas con materiales de superficies lisas que faciliten la limpieza y desinfección.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 2.2.ci): "...elaboradas de materiales que facilitan la limpieza y desinfección, seguras y lisas..."
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Vigilancia sanitaria y control
      
    p.mb-4(data-aos="fade-right") El cumplimiento de estas medidas de seguridad sanitaria está bajo el siguiente control de la autoridad competente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img19_1.svg" alt="Imagen decorativo")
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img19.svg', alt='Texto que describa la imagen')
          .tarjeta.color-secundario.p-3(x="50%" y="42%" numero="+")            
            h5 Autoridad de control
            p.mb-0 El Instituto Colombiano Agropecuario (ICA) o quien este delegue o autorice, es la autoridad competente para supervisar el cumplimiento de estas disposiciones.
          .tarjeta.color-secundario.p-3(x="39%" y="84%" numero="+")            
            h5 Objetivo superior
            p.mb-0  Al adoptar estas medidas se busca proteger la salud de las personas, los animales y las plantas, y asegurar las condiciones del comercio, contribuyendo a la inocuidad de sus productos en la producción primaria.
            
          .tarjeta.color-secundario.p-3(x="61.5%" y="84%" numero="+")            
            h5 Carácter de los funcionarios
            p.mb-0  Los funcionarios del ICA que realizan estas funciones de inspección, vigilancia y control, tienen el carácter de inspectores de policía sanitaria.



    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Técnicas y métodos de cuidado y manejo animal
    
    p.mb-4 Estas técnicas son el conjunto de procedimientos que buscan minimizar el dolor, el sufrimiento y el estrés de los animales durante las etapas de cargue, transporte, traslado y descenso. Un buen manejo es adecuado para el bienestar animal y está directamente relacionado con la inocuidad de los productos cárnicos.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Métodos de manejo previo al cargue
    
    p.mb-4(data-aos="fade-right") El cuidado de los animales comienza antes de que pisen el vehículo, enfocándose en la selección y la preparación y se divide en:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.orden-lg-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Selección y detección de animales no aptos")
            .col-lg-7.mb-4.mb-md-0.order-2.orden-lg-1
              p.mb-0 La técnica de manejo inicial es la observación y selección de la carga. Es obligatorio detectar y excluir del transporte a los animales que, por su condición física o de salud, no pueden soportar el viaje sin sufrir injustificadamente. Los animales no aptos incluyen aquellos que están enfermos, lesionados o presentan prolapsos o que no pueden mantener su posición de estación de equilibrio estático animal (mantenerse de pie).
            .col-lg-5.order-1.orden-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Texto que describa la imagen')
          .row(titulo="Limpieza y desinfección del vehículo")
            .col-lg-7.mb-4.mb-md-0.order-2.orden-lg-1.mb-4.mb-lg-0
              p.mb-0 La preparación sanitaria es una técnica de cuidado animal. Antes de cargar, el vehículo debe estar limpio y desinfectado, pues la materia orgánica remanente es un riesgo sanitario que afecta la salud de la nueva carga.
            .col-lg-5.order-1.orden-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Texto que describa la imagen')
      .col-lg-4.order-1.orden-lg-2.mb-4.mb-lg-0
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img23.png" alt="Imagen decorativa")

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Técnicas de carga y descarga (manejo etológico)
    
    p.mb-4(data-aos="fade-right") El cargue y descargue son las fases de mayor riesgo de lesión y estrés. El manejo debe ser guiado por principios etológicos (comportamiento animal) para la calma y la seguridad, sobre los cuales se encuentran:

    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-4.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Uso de rampas seguras
          p.text-center.mb-0 Las rampas son el principal método de manejo para el embarque y desembarque. Deben ser seguros, con superficies antideslizantes y deben estar al nivel del piso del vehículo para evitar caídas, lesiones o fracturas.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-4.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Inclinación controlada
          p.text-center.mb-0 La técnica de manejo exige que la rampa tenga una inclinación máxima de 20 grados para facilitar el movimiento natural del animal y evitar el esfuerzo excesivo.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-4.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Manejo calmo y sin hostigamiento
          p.text-center.mb-0 La técnica primordial es el manejo tranquilo, respetando la zona de fuga del animal y evitando los gritos, golpes o el uso excesivo de instrumentos de estímulo (instrumentos para incitar a que los animales se desplacen).
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-4.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Separación de grupos
          p.text-center.mb-0 Es una técnica de cuidado social. Deben utilizarse separadores o barreras fuertes para organizar y separar los animales por grupos según la especie, edad, tamaño o si presentan condiciones de hostilidad.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Métodos de cuidado y vigilancia en ruta
    
    p.mb-4(data-aos="fade-right") El conductor y la tripulación son responsables del cuidado activo de la carga durante el viaje; por lo cual se deben tener en cuenta las siguientes acciones:

    .row.justify-content-center.align-items-center
      .col-lg-9(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Control de densidad de carga animal")
            .col-lg-12.order-lg-2.order-3
              p.mb-0 Este es un método de cuidado esencial. Se debe garantizar que la densidad de carga animal (número o peso corporal de los animales por unidad de área) no exceda los límites, permitiendo a los animales tener espacio disponible para levantarse, acostarse, dar vuelta y mantener su posición de equilibrio estático animal.
          .row.justify-content-center(numero="2" titulo="Vigilancia continua")
            .col-lg-12.order-lg-2.order-3
              p.mb-0 El método de cuidado incluye la observación regular de los animales durante el viaje. Esto se logra mediante la inspección visual periódica de la unidad de transporte y la carga, lo cual no es aplicable a todas las especies que se transportan en guacales cerrados (como las aves de corral).
          .row.justify-content-center(numero="3" titulo="Gestión de la posición")
            .col-lg-12.order-lg-2.order-3
              p.mb-0 Los animales deben ser colocados de manera que sea posible observarlos con regularidad durante el viaje, velando por su seguridad y bienestar.
          .row.justify-content-center(numero="4" titulo="Control de la ventilación y temperatura")
            .col-lg-12.order-lg-2.order-3
              p.mb-0 Para prevenir el estrés térmico, es una técnica de cuidado esencial procurar las medidas necesarias para que la temperatura dentro del vehículo se mantenga entre 5 °C y 30 °C.
          .row.justify-content-center(numero="5" titulo="Descanso e hidratación")
            .col-lg-12.order-lg-2.order-3
              p.mb-0 En viajes largos, deben realizarse interrupciones en un lugar de descanso de los animales para realizar actividades de inspección, alojamiento, hidratación o alimentación.
      .col-lg-3.col-10.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img25.png', alt='Imagen decorativa')


    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Técnicas de identificación de animales aptos y no aptos para transporte.
    p.mb-4(data-aos="fade-right") La identificación de animales aptos y no aptos para el transporte es un proceso de control crucial y obligatorio que debe realizarse antes del transporte, siendo una responsabilidad directa del propietario, tenedor o poseedor de los animales.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Técnica de identificación: observación y selección
      
    p.mb-4(data-aos="fade-right") La técnica fundamental para determinar la idoneidad de un animal para el transporte es la observación exhaustiva y la selección por parte del responsable del cargue. Este proceso debe asegurar que el animal pueda soportar el estrés y la duración del viaje sin sufrir un sufrimiento injustificado.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Criterios de exclusión (animales no aptos)
      
    p.mb-4(data-aos="fade-right") El manual de procedimientos establece que los siguientes animales deben ser detectados y excluidos del transporte:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 45.
      i Animales excluidos
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .tabla-a.color-acento-contenido.table-wrapper
          table.tabla-responsive
            thead
              tr(data-aos="fade-right")
                th Criterio de exclusión
                th Descripción detallada
                th Soporte documental (texto exacto)
            tbody
              tr(data-aos="fade-right")
                td(data-label="Criterio de exclusión") #[b Salud y lesiones]
                td(data-label="Descripción detallada") Animales que presentan signos evidentes de enfermedad, lesiones o prolapsos (rectal, vaginal o uterino).
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 4.ai): "Observar y seleccionar los animales, para detectar animales no aptos para el transporte, cuentos como: animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino)".
              tr(data-aos="fade-right")
                td(data-label="Criterio de exclusión") #[b Movilidad (equilibrio)]
                td(data-label="Descripción detallada") Animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda (es decir, que no puedan mantenerse de pie o caminar por sí mismos).
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 4.ai): "Animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda".
              tr(data-aos="fade-right")
                td(data-label="Criterio de exclusión") #[b Estado reproductivo]
                td(data-label="Descripción detallada") Hembras próximas al parto (en el último tercio de gestación) o aquellas que hayan parido siete (7) días antes de la fecha del embarque.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 4.ai): "Hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque".
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Técnicas de manejo para animales condicionalmente aptos

    p.mb-4 Existen animales que son aptos, pero que requieren estas técnicas de manejo especial para minimizar el riesgo de lesiones a sí mismos o a otros:

    .row.justify-content-center.mb-5
        .col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar(style="padding-top: 0px !important;").h-100          
              .tarjeta.color-primarios.w-100(style="padding-top: 0px !important;")
                img(src='@/assets/curso/temas/tema3/img26.png', alt='Imagen decorativa')
                .p-4
                  h5 Separación por condición
                  p Los animales con cuernos que puedan lesionar a otros, los machos sexualmente maduros de las hembras y los animales de diferente edad o tamaño deben ser separados utilizando barreras o divisiones fuertes dentro del vehículo.
        .col-lg-5
          .tarjeta-avatar(style="padding-top: 0px !important;").h-100            
              .tarjeta.color-primarios.w-100(style="padding-top: 0px !important;")
                img(src='@/assets/curso/temas/tema3/img27.png', alt='Imagen decorativa')
                .p-4
                  h5 Gestión de heridas menores
                  p Las heridas que no impiden la movilización ni el equilibrio deben ser evaluadas por un profesional. Si la herida es mínima, el animal puede ser transportado, asegurando que se minimice el riesgo de contacto con otros.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Definición de posición de equilibrio estático animal

    p.mb-4(data-aos="fade-right") Antes de indicar lo relacionado con esta definición, es importantes analizar la siguiente imagen:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          h5 Figura 6.
          i  Resultados acertados de inferencia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img28.png', alt='Figura 6 que presenta los resultados acertados de inferencia en diferentes tipos de animales en pie, como son ganado, camellos, búfalos, caballos, entre otros; todo ello basado en la postura de dichos animales.')
        figcaption Fuente: Ramírez, Guarín Montoya & Bedoya (2022)
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img28.png', alt='Figura 6 que presenta los resultados acertados de inferencia en diferentes tipos de animales en pie, como son ganado, camellos, búfalos, caballos, entre otros; todo ello basado en la postura de dichos animales.')
        figcaption Fuente: Ramírez, Guarín Montoya & Bedoya (2022)
    
    p.mb-4(data-aos="fade-right") La principal técnica de exclusión se basa en la capacidad del animal para mantenerse en pie y por ello, basado en la posición de estación de equilibrio estático animal, se relaciona lo siguiente:
    
    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0
        .row
            .col-lg-12
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema3/img29.svg' alt='AvatarTop')
                .tarjeta.tarjeta--verde
                  .p-4
                    h5 Definición adoptada por el manual	
                    p.mb-0 Se refiere a la capacidad del animal de mantenerse sobre sus cuatro extremidades (o las que corresponden a su especie), con su peso corporal distribuido de manera uniforme, lo cual es esencial para su supervivencia durante el viaje.
            .col-lg-12
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema3/img30.svg' alt='AvatarTop')
                .tarjeta.tarjeta--verde
                  .p-4
                    h5 Soporte documental (texto exacto)
                    p.mb-0 Manual de procedimiento (Num. 1. Definiciones): la definición no está listada en el glosario principal, pero el término es el criterio de exclusión principal en el numeral 4.ai
            
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img31.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img32.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100(style="padding-top: 5px !important")
            .text-white.p-4
              h5.text-center(style="margin-top: 42px;") Consecuencia del incumplimiento
              p.text-center.mb-0 Si un animal no apto está cargado y sufre en ruta, el conductor y el propietario son responsables ante las autoridades (ICA y de tránsito) por el incumplimiento de la normativa de bienestar animal.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Instalaciones pecuarias
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img33.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las instalaciones pecuarias en el contexto de la normativa (enfocada en el transporte terrestre) se centra en los puntos de origen, destino y manejo de los animales; es decir, la finca o los corrales donde se realiza el cargue, descargue y, en su caso, el descanso.
          br
          br 
          | Las instalaciones pecuarias deben garantizar la bioseguridad y facilitar las técnicas de manejo humanitario para asegurar el bienestar animal antes y después del traslado.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Instalaciones pecuarias como punto de origen y destino
      
    p.mb-4(data-aos="fade-right") El rol principal de la instalación pequeña (finca) es servir como el lugar donde se inicia y finaliza el proceso de movilización. Dichas instalaciones deben tener en cuenta lo siguiente:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 46.
      i Propósito y función de las instalaciones pecuarias
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .tabla-a.color-acento-contenido.table-wrapper
          table.tabla-responsive
            thead
              tr(data-aos="fade-right")
                th Requisito
                th Propósito y función
                th Soporte documental (base)
            tbody
              tr(data-aos="fade-right")
                td(data-label="Requisito") #[b Punto de selección]
                td(data-label="Propósito y función") Es la instalación donde el propietario realiza la observación y selección para detectar animales no aptos para el transporte, como enfermos, lesionados o hembras en el último tercio de gestación.
                td(data-label="Soporte documental (base)") Manual de procedimiento (Num. 4.a): exige la observación y selección en las "Actividades previas al cargue".
              tr(data-aos="fade-right")
                td(data-label="Requisito") #[b Cumplimiento de bienestar]
                td(data-label="Propósito y función") La instalación debe cumplir con las condiciones de bienestar animal propias de la especie (porcina, bovina, aviar, etc.) establecidas por el Ministerio de Agricultura y Desarrollo Rural (MADR), siendo la base sanitaria y de manejo.
                td(data-label="Soporte documental (base)") Plan-capacitación (Alcance, Pág. 1): menciona el cumplimiento de la normatividad expedida por el MADR sobre bienestar animal en la producción primaria pecuaria.
              tr(data-aos="fade-right")
                td(data-label="Requisito") #[b Control sanitario]
                td(data-label="Propósito y función") Es la instalación donde el ICA puede realizar el control sanitario inicial y expedir la Guía Sanitaria de Movilización (GSM).
                td(data-label="Soporte documental (base)") (Implícito en la función de control del ICA).

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Requisitos de las instalaciones de manejo (corrales y rampas)
      
    p.mb-4(data-aos="fade-right") Las instalaciones utilizadas para el cargue y descargue son críticas y deben diseñarse para el manejo etológico y la seguridad y cada una debe contener los siguientes aspectos:

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 A.	Rampa de cargue/descargue (técnica de la instalación)

    p.mb-4(data-aos="fade-right") La rampa es la interfaz clave entre el corral (instalación) y el vehículo, teniendo estos aspectos:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 47.
      i Requisitos de la rampa
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .tabla-a.color-acento-contenido.table-wrapper
          table.tabla-responsive
            thead
              tr(data-aos="fade-right")
                th Requisito de la rampa
                th Detalle de la instalación
                th Soporte documental (texto exacto)
            tbody
              tr(data-aos="fade-right")
                td(data-label="Requisito de la rampa") #[b Inclinación controlada]
                td(data-label="Detalle de la instalación") Debe tener una inclinación máxima de 20 grados para permitir que los animales caminen sin esfuerzo excesivo y evitar caídas.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 4.a): menciona la rampa con "...máximo 20 grados de inclinación que facilite el [cargue/descargue]".
              tr(data-aos="fade-right")
                td(data-label="Requisito de la rampa") #[b Seguridad de superficie]
                td(data-label="Detalle de la instalación") Debe ser antideslizante, sin salientes puntiagudas, hoyos u orificios, asegurando que no haya riesgo de lesiones o fracturas.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 4.a): exige rampas "...con pisos de superficies antideslizantes ..." y "sin salientes puntiagudas, hoyos y orificios".
              tr(data-aos="fade-right")
                td(data-label="Requisito de la rampa") #[b Adecuación de Altura]
                td(data-label="Detalle de la instalación") Debe estar colocado al nivel del vehículo para que el animal no tenga que dar un paso brusco o saltar al entrar o salir.
                td(data-label="Soporte documental (texto exacto)") Manual de procedimiento (Num. 4.a): exige el uso de rampas "...a través de rampas o plataformas...".

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 B.	Corrales y mangas (técnicas de manejo)

    p.mb-4(data-aos="fade-right") Las mangas y corrales de la instalación deben estar diseñados para evitar el pánico, siempre apuntado a:

    .row.justify-content-center.mb-5
      .col-12.movil.mb-4
        .tarjeta.tarjeta--BG04.p-4
          figure.mb-4
              img(src="@/assets/curso/temas/tema3/img34.png", alt="alt")
          h4.mb-3 Iluminación uniforme
          p.mb-0 Deben evitar los contrastes fuertes de luz y sombra que asustan a los animales y dificultan el flujo hacia el vehículo.
      .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.desktop
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img34.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h4.mb-3 Iluminación uniforme
            p.mt-3.px-4 Deben evitar los contrastes fuertes de luz y sombra que asustan a los animales y dificultan el flujo hacia el vehículo.
      .col-12.movil.mb-4
        .tarjeta.tarjeta--BG04.p-4
          figure.mb-4
              img(src="@/assets/curso/temas/tema3/img35.png", alt="alt")
          h4.mb-3 Manejo calmo
          p.mb-0 Los corrales deben permitir el manejo sin gritos, sin ruidos ni hostigamiento, facilitando el uso de técnicas basadas en la zona de fuga.
      .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.desktop
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img35.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h4.mb-3 Manejo calmo
            p.mt-3.px-4 Los corrales deben permitir el manejo sin gritos, sin ruidos ni hostigamiento, facilitando el uso de técnicas basadas en la zona de fuga.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Instalaciones de bioseguridad y descanso
      
    p.mb-4(data-aos="fade-right") El protocolo sanitario y el plan de contingencia definen la necesidad de los siguientes tipos de instalaciones peculiares especializadas:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 48.
      i Necesidad de instalaciones
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .tabla-a.color-acento-contenido.table-wrapper
          table.tabla-responsive
            thead
              tr(data-aos="fade-right")
                th Instalación / servicio
                th Requisito de la instalación
                th Soporte documental (base)
            tbody(data-aos="fade-right")
              tr
                td(data-label="Instalación / servicio") #[b Lugar de limpieza/desinfección]
                td(data-label="Requisito de la instalación") Aunque el manual se centra en que el vehículo debe permitir el lavado, la instalación debe contar con la infraestructura (presión de agua, desagües controlados, área adecuada) para realizar la limpieza y desinfección efectiva del transporte antes de la carga.
                td(data-label="Soporte documental (base)") Manual de procedimiento (Num. 2.2.ci): exige un vehículo que "permita su lavado y desinfección".
              tr
                td(data-label="Instalación / servicio") #[b Lugar de descanso]
                td(data-label="Requisito de la instalación") En viajes prolongados, se requiere un lugar de descanso de los animales que permita realizar actividades de inspección, acomodación, hidratación o alimentación de la carga viva. Estos lugares deben cumplir con los estándares sanitarios para evitar la contaminación.
                td(data-label="Soporte documental (base)") Manual de procedimiento (Num. 4.h): menciona la necesidad de realizar interrupciones en un "lugar de descanso de los animales".
              tr
                td(data-label="Instalación / servicio") #[b Contingencia sanitaria]
                td(data-label="Requisito de la instalación") La instalación debe tener protocolos y áreas para la disposición sanitaria de los animales muertos o gravemente enfermos, siguiendo las instrucciones de la oficina del ICA más cercana, para evitar riesgos biológicos.
                td(data-label="Soporte documental (base)") ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (Pág. 6): menciona el "sacrificio y disposiciones de los animales muertos" como medida de emergencia.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
