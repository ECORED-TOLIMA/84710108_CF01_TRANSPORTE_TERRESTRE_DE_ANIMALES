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
    
    p.mb-4 La interacción entre el ser humano y el animal es crítica en el transporte terrestre, ya que el manejo adecuado influye directamente en los niveles de estrés y, por ende, en el bienestar animal y la calidad de la carne (inocuidad). El manual de procedimientos exige que el personal tenga un conocimiento básico de etología (ciencia que estudia el comportamiento animal) y de sus sentidos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Principios de interacción humano – animal
    p.mb-4 La normativa del transporte se centra en la aplicación de técnicas de manejo que minimizan la respuesta negativa del animal al contacto humano y se deben tener en cuenta las siguientes acciones:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
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
      .col-lg-4
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img2.png" alt="Imagen decorativa")
    p.mb-4 Basado en la zona de fuga o área de seguridad de los animales de granja, es preciso conocer lo siguiente:

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Seguridad sanitaria animal
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img11.svg" alt="Imagen decorativa")
      .col-lg-11
        p.mb-0 La #[b seguridad sanitaria] animal (también referida en la documentación como condiciones sanitarias y fitosanitarias) en el transporte terrestre es el conjunto de y protocolos destinados a prevenir la transmisión y dispersión de enfermedades durante la movilización, protegiendo tanto la salud de los animales como la inocuidad de los productos finales de consumo humano.
    


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
