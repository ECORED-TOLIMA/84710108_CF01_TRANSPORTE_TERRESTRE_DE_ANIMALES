<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-left") El transporte de animales en pie constituye una fase de alta criticidad dentro de la cadena de valor agropecuaria en Colombia. Su correcta ejecución incide de manera determinante no solo en la calidad e inocuidad del producto final, sino también en la salud pública y, de forma imperativa, en el bienestar animal. La movilización genera una serie de estresores fisiológicos y psicológicos en los animales, tales como alteraciones del ritmo cardíaco, aumento de los niveles de cortisol y riesgo de acidosis metabólica, que pueden derivar en pérdidas de peso, contusiones, lesiones e incluso la muerte. Estas consecuencias representan significativas mermas económicas y comprometen la calidad de la carne por fenómenos como el corte oscuro (pH elevado) o la carne pálida, suave y exudativa (PSE).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.mb-4.mb-lg-0
        .bg1.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.p-0.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img.img-fluid(src="@/assets/curso/temas/intro/img1.svg" alt="Icono 1")
            .col-lg-11
              p.mb-0(data-aos="fade-left") En respuesta a la necesidad de mitigar estos efectos y alinear las prácticas nacionales con estándares internacionales, el Gobierno de Colombia, a través del Ministerio de Transporte y el Instituto Colombiano Agropecuario (ICA), promulgó la Resolución 20223040006915 de 2022. Este acto administrativo adopta el "Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie", un documento técnico de carácter vinculante que establece los parámetros obligatorios para esta actividad.
      .col-lg-3
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/intro/img2.svg" alt="Icono 1")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.order-lg-1.order-2
        figure(data-aos="zoom-in")
          img.img-fluid(src="@/assets/curso/temas/intro/img3.png" alt="Icono 1")
      .col-lg-9.order-lg-2.order-1
        p(data-aos="fade-left") Este componente formativo ha sido diseñado como una guía de referencia técnica para la interpretación y aplicación rigurosa de dicha normativa. Su objetivo trasciende el mero cumplimiento legal; busca impartir un conocimiento profundo sobre los puntos críticos de control durante todo el proceso de movilización. Esto incluye la evaluación de la aptitud de los animales para el viaje, las condiciones de ayuno, el diseño y mantenimiento de los vehículos, las densidades de carga adecuadas para cada especie, así como las técnicas de manejo durante el embarque, el trayecto y el desembarque.
        .row
          .col-lg-1.p-0.px-2.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/temas/intro/img4.svg" alt="Icono 1")
          .col-lg-11
            p.mb-0(data-aos="fade-left") A lo largo de este estudio, se analizarán en detalle las responsabilidades y obligaciones de cada uno de los actores implicados en la cadena logística: desde el propietario o tenedor de los animales, pasando por las empresas transportadoras y los conductores, hasta el personal en los puntos de destino como ferias, plantas de beneficio o predios de producción. Se profundizará en las especificaciones técnicas de los vehículos, la documentación sanitaria y de movilización exigida (como la Guía Sanitaria de Movilización Interna - GSMI) y los protocolos de actuación ante contingencias, todo ello fundamentado en los principios de un trato humanitario que minimice el sufrimiento y la angustia de los animales.
    p.mb-4(data-aos="fade-left") La asimilación de estos conocimientos es indispensable para los profesionales del sector pecuario y logístico, permitiéndoles operar bajo un marco de responsabilidad, eficiencia y competitividad. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/intro/img5.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100(style="padding-top: 5px !important")
            .text-white.p-4
              p.mb-0(style="margin-top: 42px;") La correcta implementación de este manual no solo previene sanciones, sino que además fortalece la sostenibilidad de la producción, mejora los indicadores productivos y responde a las crecientes exigencias de los mercados nacionales e internacionales en materia de bienestar y sanidad animal.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A continuación, se abordarán aspectos clave y normativos relacionados con el transporte de animales en pie. Se presentarán las definiciones fundamentales sobre el bienestar animal, así como los requisitos establecidos por la normativa vigente para el transporte terrestre de las distintas especies.
    p.mb-4(data-aos="fade-left") Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
