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

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Técnicas de cálculo de magnitud de carga

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

</template>

<script>
export default {
  name: 'Tema2',
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
