<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Marco normativo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img1.png" alt="Imagen decorativa")
      .col-lg-7
        .tarjeta.color-primarios2.p-4
          .row.mb-4
            .col-lg-6
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img2.svg" alt="Icono decorativo")
          p.mb-0 El marco normativo principal es la resolución conjunta del Ministerio de Transporte (MT) y el Instituto Colombiano Agropecuario (ICA), cuyo objetivo principal es proteger el bienestar animal durante todas las etapas de la movilización.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (Resolución 20223040006915)
    p.mb-4 Para explicar en mejor manera este manual, basado en dicha normativa, se plantean los siguientes aspectos legales:
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 21.
      i Aspectos legales manual de procedimientos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Aspecto legal
                th Descripción y fundamento
                th Soporte Documental (Texto Exacto)
            tbody
              tr
                th Objeto de la Resolución
                td Adoptar el manual que regula los procedimientos durante todas las etapas del transporte, manejo y movilización de animales vivos.
                td #[b Resolución 20223040006915 (Art. 1):] "El objeto de la presente resolución es adoptar el manual de procedimiento para el transporte, manejo y movilización de animales en pie, durante todas las etapas, contenido en el anexo de la presente resolución el cual hace parte integral de la misma".
              tr
                th Ámbito de aplicación
                td Aplica a todas las personas naturales y jurídicas que movilizan o transportan animales por vía terrestre y fluvial, incluyendo las principales especies de producción.
                td #[b Resolución 20223040006915 (Art. 2):] "Aplica a las personas naturales y jurídicas involucradas en el transporte, manejo y movilización por vía terrestre y fluvial de animales de las especies bovina, porcina, caprina, ovina, aviar, bufalina, équida y las demás especies de consumo humano".
              tr
                th Finalidad (bienestar animal)
                td El propósito es establecer condiciones sanitarias, fitosanitarias y de bienestar animal, evitando el sufrimiento y el dolor de los animales durante el proceso.
                td #[b ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (Pág. 2):] "Con la expedición de este acto administrativo, se proveen condiciones sanitarias, fitosanitarias y de bienestar animal, evitando así, sufrimiento y dolor a los animales durante, el transporte, manejo y movilización de los mismos...".
              tr
                th Tipos de manejo regulados
                td La norma se aplica a tres modos principales de movimiento de animales, cada uno con sus reglas específicas.
                td #[b Manual (Num. 3.a, b, c):] a) Movilización a pie de animales... b) Transporte fluvial de animales... c) Transporte terrestre de animales...

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Tipos de manejo operacional (manejo animal)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tarjeta.color-secundarios.p-4
          .row.mb-3
            .col-lg-1.p-2
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img3.svg" alt="Icono decorativo")
          p.mb-0 El manual, aunque no define un término genérico de "Tipos de manejo", establece los procedimientos de manejo que deben aplicarse durante las fases críticas de la operación logística. El manejo se centra en garantizar el bienestar animal mediante técnicas y equipos adecuados, especialmente durante el cargue, traslado y descenso. Al respecto se plantean los siguientes aspectos:
      .col-lg-4
        .tarjeta-color-primarios2.p-4
          figure
            img.img-fluid(src="@/assets/curso/temas/tema2/img4.svg" alt="Icono decorativo")
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 22.
      i Manejo operacional
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Aspecto del manejo
                th Principio de ejecución y detalle
                th Soporte documental (texto exacto)
            tbody
              tr
                th Manejo humanitario
                td Los animales deben ser cargados y descargados con calma, sin generar estrés, ruido ni hostigamiento. Se prohíbe el uso de fuerza innecesaria.
                td Resolución 20223040006915, Manual (Implícito en Numeral 4): "...los animales deberán ser cargados y descargados con calma, sin ruidos ni hostigamiento, ni empleo de fuerza innecesarios ...".
              tr
                th Uso de equipos seguros
                td Se deben utilizar rampas o plataformas que no tengan puntiagudas salientes, hoyos u orificios, y que tengan pisos de superficie antideslizante.
                td Resolución 20223040006915, Manual (Implícito en Numeral 4): "...a través de rampas o plataformas, sin salientes puntiagudas, hoyos y orificios con pisos de superficies antideslizantes y/o con puntos de apoyo...".
              tr
                th Inclinación de rampas
                td La inclinación de la rampa debe ser suave para facilitar el desplazamiento natural de los animales, sin causar esfuerzo excesivo o caídas.
                td Resolución 20223040006915, Manual (Implícito en Numeral 4): "...y con máximo 20 grados de inclinación que facilite el [cargue/descargue]".
              tr
                th Separación de animales
                td Se exige la separación física de los animales según criterios como especie, edad, tamaño y estado reproductivo, para evitar peleas y lesiones durante el transporte.
                td Resolución 20223040006915, Manual (Numeral 4.c): "Separar por especie, edad, tamaño, machos sexualmente maduros de hembras, animales con y sin cuernos, animales que puedan ser hostiles con otros..."
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Teoría de movilización de animales en pie
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La movilización implica poner en actividad a los animales. El transporte se considera un "conjunto organizado de operaciones" que incluye cargue, traslado, paradas de descanso y descarga.
          br
          br
          | Por lo anterior, la "Teoría de la movilización" establece el alcance conceptual y los diferentes modos bajo los cuales los animales son trasladados, siendo un término más amplio que el simple "transporte".


    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Concepto de movilización vs. transporte

    p.mb-4 El manual distingue entre el concepto amplio de movilización y el concepto específico de transporte de la siguiente manera:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 23.
      i Movilización y transporte
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Término
                th Definición y alcance teórico
                th Soporte documental (texto exacto)
            tbody
              tr
                th Transporte
                td Es el traslado físico de un punto a otro utilizando un medio específico (vehículo, embarcación). Es la herramienta de la movilización.
                td ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (Pág. 2): "El transporte es el traslado de personas, animales o cosas de un punto a otro a través de un medio físico ...".
              tr
                th Movilización
                td Es la teoría o el concepto general que incluye todas las actividades desarrolladas para mover los animales, ya sea por sí mismos o mediante cualquier medio.
                td ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (Pág. 2): "...y para efectos de la resolución la movilización de animales en pie incluye todas aquellas actividades que se desarrollan para mover los animales, ya sea por sí mismo o por cualquier otro medio utilizado para trasladar a las especies".
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Tipos de movilización regulada

    p.mb-4 La Resolución 20223040006915 establece que el manual aplica a tres modos de movilización, cada uno con requisitos específicos:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 24.
      i Movilización regulada
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Tipo de Movilización
                th Descripción y aplicación
                th Soporte Documental (Texto Exacto)
            tbody
              tr
                th Movilización a pie de animales
                td Cuando la movilización se realiza por sus propios medios (caminando) en vías públicas o privadas abiertas al público.
                td Manual (Numeral 3.a): "Cuando los propietarios y/o remitentes realicen la movilización de animales a pie en vías públicas o privadas abiertas al público, deberán cumplir con las disposiciones contenidas en esta resolución...".
              tr
                th Transporte fluvial de animales
                td Cuando se realiza el traslado en embarcaciones fluviales. El manual establece requisitos de compartimentos y capacidad de carga.
                td Manual (Numeral 3.b): "Cuando se realice el transporte de los animales en embarcaciones fluviales, deberá cumplir con las disposiciones contenidas en esta resolución...".
              tr
                th Transporte terrestre de animales
                td Cuando se realiza el traslado en vehículos automotores de carga (camiones, tractocamiones, etc.). Es el foco principal del manual.
                td Manual (Numeral 3.c): "Cuando se realice el transporte de los animales en vehículo de transporte terrestre automotor de carga deberá cumplir con las disposiciones contenidas en esta resolución...".
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.p-3
        figure
          img.img-fluid(src="@/assets/curso/temas/intro/img4.svg" alt="Icono 1")
      .col-lg-11
        p.mb-0 En síntesis, la teoría de la movilización abarca el marco legal y operacional que guía cómo mover los animales, mientras que el manejo se refiere a las técnicas y procedimientos específicos (calma, rampas a 20°, no ruidos) que se aplican durante el cargue y descargue para cumplir con el principio de bienestar animal durante cualquiera de los modos de movilización.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Estatuto Nacional de Protección de los Animales y normas reguladoras

    p.mb-4 El manual se fundamenta en un marco legal superior que busca la protección animal, incluso al regular el transporte de animales de producción y reconoce a los animales como seres sintientes (no cosas), obligando a prevenir el dolor y el sufrimiento durante el transporte.

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 25.
      i Regulaciones básicas
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Regulación básica
                th Descripción y alcance
                th Soporte documental (texto exacto)
            tbody
              tr
                th Fundamento de competencia
                td La resolución es expedida en uso de las facultades conferidas por leyes sanitarias (ICA) y de transporte (MT), incluyendo el Decreto 1500 de 2007 (reglamento técnico de inocuidad).
                td Resolución 20223040006915 (Vistos/Considerandos): menciona las facultades conferidas por los artículos 65 de la Ley 101 de 1993, 4 del Decreto 1500 de 2007, y otros Decretos del Sector Transporte.
              tr
                th Principio de bienestar
                td La Ley 1774 de 2016 (Estatuto Nacional de Protección) establece que los animales son seres sintientes. El manual adopta la definición de Bienestar Animal de la OIE (Organización Mundial de Sanidad Animal), centrada en el estado físico y mental.
                td Manual (Numeral 1. Definiciones): (Revisar la definición de bienestar animal).

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Glosarios y definiciones clave

    p.mb-4 El manual establece una serie de definiciones obligatorias para la correcta interpretación de sus disposiciones (Numeral 1. Definiciones):

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Tabla 26.
      i Definiciones del manual
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Término
                th Definición adoptada por el manual
                th Soporte documental (texto exacto)
            tbody
              tr
                th Animal en pie
                td Designa un individuo vivo de cualquier especie animal.
                td Manual (Numeral 1): "Animal en pie: Es un individuo vivo de cualquier especie animal".
              tr
                th Bienestar animal
                td El estado físico y mental de un animal en relación con las condiciones en las que vive y muere.
                td Manual (Numeral 1): "Bienestar animal: Designa el estado físico y mental de un animal en relación con las condiciones en las que vive y muere".
              tr
                th Capacidad de carga
                td El máximo tonelaje autorizado en un vehículo automotor de carga, limitado por las normas del Ministerio de Transporte.
                td Manual (Numeral 1): "Capacidad de Carga: Es el máximo tonelaje autorizado en un vehículo automotor de carga, cuya tara y peso bruto vehicular no exceda los límites establecidos en las normas vigentes del Ministerio de Transporte".
              tr
                th Densidad de carga animal
                td El número o peso corporal de los animales por unidad de área en el medio de transporte (foco en el espacio por animal).
                td Manual (Numeral 1 - Definiciones): "Densidad de carga animal: Número o peso corporal de los animales por unidad de área en el medio de transporte".
              tr
                th Carga de animales
                td Corresponde al procedimiento por el que se cargan o embarcan los animales en las unidades de transporte.
                td Manual (Numeral 1): "Carga de animales: Corresponde al procedimiento por el que se cargan o embarcan los animales en las unidades de transporte".


    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Técnicas de cálculo de magnitud de carga

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2.mb-lg-0
        p La magnitud de carga es el resultado de una doble verificación que combina la seguridad vial (peso legal) y el bienestar animal (densidad operativa). La normativa colombiana exige que el transportador aplique técnicas de cálculo para asegurar que se cumplan ambos límites de manera simultánea.
        p Por su parte, la Resolución 20223040006915 establece que la densidad de carga debe determinarse a partir de fórmulas de cálculo o de las tablas anexas (Apéndices).
        p.mb-4 A continuación, se detallan las técnicas de cálculo de la magnitud de carga:

      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img6.svg" alt="Imagen decorativo")

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Técnica N°1. Cálculo de la densidad de carga operacional (bienestar animal)

    p.mb-4 Esta técnica se enfoca en determinar el número máximo de animales que caben en el área disponible de la unidad de transporte, garantizando un espacio adecuado para el bienestar. Es la técnica más específica para el manejo de animales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primarios3.p-4
          .titulo2.mb-4(data-aos="fade-left")
            h5.mb-0 Determinación del Área Disponible (Á D)
          .row.justify-content-center.align-items-center
            .col-lg-9
              p #[b Proceso:] medir el área de piso disponible (Largo x Ancho) en metros cuadrados (m2) de cada compartimento o nivel de la unidad de transporte.
              h5 Fórmula conceptual:
              .tarjeta.color-secundarios.p-3
                p.text-bold.mb-0 Área Disponible (m2) = Largo de la Carrocería X Ancho de la Carrocería
            .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-0(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img7.png" alt="Imagen decorativo")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primarios3.p-4
          .titulo2.mb-4(data-aos="fade-left")
            h5.mb-0 Aplicación de la densidad mínima requerida 
          .row.justify-content-center.align-items-center.mb-3
              .col-lg-9
                p #[b Proceso:] consultar las tablas anexas al manual (Apéndices) para obtener el espacio mínimo requerido por animal, según la especie y el peso.
                p Se deben tener en cuenta los siguientes parámetros de densidad por especie y sus fuentes:
                .tarjeta.color-primarios.p-3.mb-2
                  .titulo3.mb-2
                    p.text-bold.mb-0 Bovinos, búfalos
                  p.mb-0 Parámetro: área mínima por animal (m2/animal).
                  p.mb-0 Fuente: apéndice 1 de la Resolución.
                .tarjeta.color-primarios.p-3
                  .titulo3.mb-2
                    p.text-bold.mb-0 Porcinos, aves
                  p.mb-0 Parámetro: Kilogramos Máximos por Área (kg/m2).
                  p.mb-0 Fuente: apéndice 2 y 3 de la Resolución.

              .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-0(data-aos="zoom-in")
                figure
                  img.img-fluid(src="@/assets/curso/temas/tema2/img8.png" alt="Imagen decorativo")
          p.mb-0 Soporte documental: "La densidad de carga debe determinarse a partir de fórmulas de cálculo o de las tablas anexas al Manual o de las referencias de la Organización Mundial de Sanidad Animal (OIE)." — Manual de Procedimientos, Numeral 4.c.
          

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primarios3.p-4
          .titulo2.mb-4(data-aos="fade-left")
            h5.mb-0 Cálculo del número máximo de animales (N° Máx. de animales) 
          p #[b Proceso:] usar la densidad requerida y el área disponible para obtener el número máximo de cabezas permitidas. Se deben tener en cuenta las siguientes fórmulas:

          .titulo3.mb-4
            p.mb-0 Bovinos y bufalinos (Área por animal)
          
          .tarjeta.color-secundarios.p-3.mb-4
            .text-center.mb-0
              p.fw-bold
                | N° Max = 
                span(style="display:inline-block; vertical-align:middle;")
                  | Área Disponible (m²)
                  br
                  span(style="display:inline-block; border-top: 2px solid #000; padding-top: 4px;")
                    | Área Mínima Requerida por Animal (m²/animal)
    
          .titulo3.mb-4
            p.mb-0 Porcinos y aves (kg/m2). Peso Máximo (kg) = Área Disponible (m2) x Densidad Máxima (kg/m2)

          .tarjeta.color-secundarios.p-3.mb-4
            .text-center.mb-0
              p.fw-bold
                | N° Max = 
                span(style="display:inline-block; vertical-align:middle;")
                  | Peso Máximo Total (kg)
                  br
                  span(style="display:inline-block; border-top: 2px solid #000; padding-top: 4px;")
                    | Peso Promedio por Animal (kg)
          p.mb-0 Condición de Bienestar: el resultado N° Max es el límite superior de carga para cumplir con el bienestar, independientemente de lo que dicte el peso legal.
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Técnica N°2. Verificación de la capacidad de carga legal (seguridad vial)

    p.mb-4 Esta técnica se enfoca en asegurar que el peso total de la carga viva no exceda el límite legal autorizado para el vehículo, protegiendo la seguridad vial y la estructura del automotor.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primarios3.p-4
          .titulo2.mb-4(data-aos="fade-left")
            h5.mb-0 Determinación del límite de peso legal (P. Legal)
          .row.justify-content-center.align-items-center.mb-3
              .col-lg-9
                p #[b Proceso:] consultar la licencia de tránsito del vehículo (registro RUNT) para verificar el máximo tonelaje autorizado (Capacidad de Carga).
                p #[b Soporte documental (definición):] "Capacidad de carga: es el máximo tonelaje autorizado en un vehículo automotor de carga, cuya tara y peso bruto vehicular, no exceda los límites establecidos en las normas vigentes del Ministerio de Transporte. No podrá alterarse la capacidad de carga consignada en la licencia de tránsito". — Manual de Procedimientos, Numeral 1. Definiciones.
                p Fórmula conceptual:
                h5 Fórmula conceptual:
                .tarjeta.color-secundarios.p-3
                  p.text-bold.text-center.mb-0 Peso Vivo\ (kg) = N° unidades x Peso Promedio por Animal

              .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-0(data-aos="zoom-in")
                figure
                  img.img-fluid(src="@/assets/curso/temas/tema2/img9.png" alt="Imagen decorativo")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primarios3.p-4
          .titulo2.mb-4(data-aos="fade-left")
            h5.mb-0 Verificación del Límite Legal
          .row.justify-content-center.align-items-center.mb-2
              .col-lg-12
                p #[b Proceso:] el peso total de la carga (Peso vivo animales) + (Peso de la carrocería de transporte) debe ser menor o igual a la capacidad de carga autorizada en el vehículo.
          figure.text-center
            img.img-fluid(src="@/assets/curso/temas/tema2/img10.png" alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primarios3.p-4
          .titulo2.mb-4(data-aos="fade-left")
            h5.mb-0 Principio del límite restrictivo
          .row.justify-content-center.align-items-center.mb-3
              .col-lg-10
                p La magnitud de carga final y segura que debe aplicar el transportador es el valor más bajo resultante entre la densidad operacional (Técnica N°1) y la capacidad de carga legal (Técnica N°2).
                p Si:
                .tarjeta.color-primarios.p-3
                  ul.lista-ul.mb-0
                    li
                      i.fas.fa-horse-head
                      p.mb-0 El cálculo de densidad (Técnica N°1) permite cargar 20 bovinos.
                    li
                      i.fas.fa-horse-head
                      p.mb-0 El cálculo de peso legal (Técnica N°2) solo permite cargar 18 bovinos (por restricción de peso).

              .col-lg-2.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-0(data-aos="zoom-in")
                figure
                  img.img-fluid(src="@/assets/curso/temas/tema2/img11.png" alt="Imagen decorativo")
          p.mb-0 #[b Entonces:] la magnitud de carga correcta y obligatoria es de 18 bovinos, ya que la ley exige cumplir con el límite más estricto entre el bienestar animal y la seguridad vial.

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    /* variables de vue
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Bienestar y protección animal en transporte terrestre

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Técnicas de conducción

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Tipos y técnicas de inspección de vehículos destinados al transporte de animales en pie

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5 Protocolos de bioseguridad

    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.6 Técnicas de limpieza y aseo, tipos de producto

    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.7 Entidades de prevención, vigilancia y control

    separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.8 Curso de bienestar animal en transporte terrestre (Cumplimiento)
    */
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
