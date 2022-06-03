<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info.fa
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-down")
        img(src="@/assets/curso/images/tema1/img_intro.png")


  
    p.mb-3 Preparar el servicio de interpretación de acuerdo con el contexto y normativa técnica, responde a requerimientos productivos, sociales y educativos que sin duda alguna se ven contemplados en los diferentes planes y propuestas del orden gubernamental y social, en aspectos puntuales como la equidad en la diversidad que se considera como elemento importante para la promoción de acciones que superen las distintas formas de discriminación  que sufren entre otros grupos las personas con discapacidad.

    p.mb-5 Desde ahí el componente formativo responde a esa preparación desde el reconocimiento de un vocabulario técnico, requerimientos puntuales y unos aspectos de salud ocupacional que llevan a que la interpretación sea coherente y pertinente en cuanto a: 

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.justify-content-center.mb-3(data-aos="zoom-in-down")  
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/images/tema1/ico_1_indu.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-5
                  p.p-3 La selección del vocabulario de acuerdo con los criterios técnicos y de contexto.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/images/tema1/ico_2_indu.svg' alt='AvatarTop')   
              .tarjeta.tarjeta--azul
                .p-5
                  p.p-2 La construcción de la macroestructura del discurso teniendo en cuenta los elementos relevantes del contexto.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/images/tema1/ico_3_indu.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-5
                  p La disposición de la información necesaria para prestar un servicio de calidad de acuerdo con la solicitud. 
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/images/tema1/ico_4_indu.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-5
                  p.p-3 La logística de acuerdo con el proceso establecido.


    p.mb-0 Como resultado final, se espera que, con el abordaje de las temáticas, el aprendiz esté en capacidad de reconocer los contextos donde se prestará el servicio de interpretación desde sus especificidades logísticas y de preparación, al igual que desde los aspectos de salud ocupacional del trabajo.


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
