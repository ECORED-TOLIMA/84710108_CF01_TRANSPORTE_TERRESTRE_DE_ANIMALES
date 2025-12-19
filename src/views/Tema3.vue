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
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Seguridad sanitaria animal

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Sanidad y salud animal (rangos de temperatura)

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Técnicas y métodos de cuidado y manejo animal

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Técnicas de identificación de animales aptos y no aptos para transporte.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Instalaciones pecuarias
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
