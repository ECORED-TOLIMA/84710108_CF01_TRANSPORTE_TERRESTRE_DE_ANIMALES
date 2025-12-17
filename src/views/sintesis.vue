<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo ofrece una comprensión amplia de los elementos que intervienen en el transporte terrestre de animales en pie, integrando aspectos técnicos, operativos, sanitarios y normativos necesarios para garantizar procesos seguros, eficientes y acordes con la regulación vigente. Su enfoque permite reconocer las características y exigencias que deben cumplir los vehículos, los procedimientos de control, la documentación requerida y las condiciones de bienestar durante la movilización.
    p.mb-0 Además, profundiza en la importancia del manejo adecuado de los animales, considerando su comportamiento, su relación con el entorno y la interacción con las personas encargadas del transporte. Con ello se promueve una visión responsable y ética que facilita decisiones informadas, mejora la seguridad y contribuye al cumplimiento de estándares que protegen tanto a los animales como a quienes participan en la cadena de transporte.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Resolución 20223040006915 de 2022. Manual de transporte, presenta una ruta secuencial que inicia con la comprensión de los elementos técnicos y operativos que intervienen en el diseño y funcionamiento de los vehículos destinados a esta actividad, continúa con la revisión del marco normativo que regula las condiciones de transporte, bienestar animal, bioseguridad y control institucional y avanza hacia el estudio del comportamiento, la interacción humano–animal y los principios de manejo seguro. En conjunto, este recorrido permite entender cómo se articulan los aspectos estructurales, legales y conductuales para garantizar un traslado responsable, eficiente y acorde con las exigencias sanitarias y de bienestar vigentes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
