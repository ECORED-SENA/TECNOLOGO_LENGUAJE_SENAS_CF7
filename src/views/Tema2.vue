<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requerimientos para el servicio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-down")
        img(src="@/assets/curso/images/tema2/img_1.png")
          
    p.mb-3 Al prestar un servicio de interpretación, no basta con simplemente realizar las señas, que es lo más relevante de la actividad; también existen otros elementos realmente necesarios que aportan un soporte para quién está prestando el servicio. Podemos hablar de acuerdos y ayudas previas al servicio que el usuario ofrecerá en aras de una interpretación de calidad.

    Separador 

    #t_2_1.titulo-segundo
      .h2 2.1 Acuerdos metodológicos

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_2.png').mb-3
      .col-lg-5(data-aos="fade-left") 
        .cajon.color-custom.p-5.h-100
          p.p-2 Para lograr un servicio de interpretación exitoso, lo que más le conviene tanto al usuario como al intérprete, es que el intérprete conozca de antemano el tipo de información que se tratará, el tema; y, si es posible, los contenidos. También es necesario acordar el tipo de interpretación que requiere el usuario, referente al vocabulario, la velocidad y la gesticulación vocal. Además, se tendrán en cuenta como acuerdos metodológicos, los deberes y responsabilidades del intérprete; así como lo que no implica una obligación a la hora de prestar el servicio.

    Separador 
    
    #t_2_2.titulo-segundo
      .h2 2.2 Medios

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-custom-2.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img.m-left(data-aos="fade-left")(
        :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_3.png')})`}"
        )
          .bloque-texto-g__texto.p-5(data-aos="fade-right")
            p.mb-3 Dependiendo del tipo del lugar en donde se presta el servicio, también es necesario tener en cuenta por cuál medio se realizará la interpretación, si será en el mismo lugar del evento y si allí se transmitirá por <i> Video Beam; </i> si se usará alguna plataforma tecnológica de interpretación a distancia vía <i> Streaming </i> o si se utilizará algún sistema de video llamada o video conferencia. Si se transmitirá por televisión. Todo esto le permitirá al intérprete hacerse una clara idea de cómo prestar un servicio óptimo.
    
    .bloque-texto-a.color-custom-3.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Dependiendo del tipo del lugar en donde se presta el servicio, también es necesario tener en cuenta por cuál medio se realizará la interpretación, si será en el mismo lugar del evento y si allí se transmitirá por <i> Video Beam; </i> si se usará alguna plataforma tecnológica de interpretación a distancia vía <i> Streaming </i> o si se utilizará algún sistema de video llamada o video conferencia. Si se transmitirá por televisión. Todo esto le permitirá al intérprete hacerse una clara idea de cómo prestar un servicio óptimo.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema2/img_3.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    Separador 
    
    #t_2_3.titulo-segundo
      .h2 2.3 Aspectos prosódicos
    

    .row.align-items-center.justify-content-center.mb-3  
      .col-lg-7(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema2/img_4.png')
      .col-lg-5(data-aos="fade-right") 
        .cajon-b.color-primario.p-3.my-3
          p.mb-3 Estos están presentes naturalmente en la manera cómo nos comunicamos. Tienen que ver con los cambios en la frecuencia de la voz, el tono, el ritmo, el volumen y la modulación de las palabras. Esta rama de la lingüística también toma en cuenta el acento, las sílabas tónicas y atónicas y la importancia de conocer su aplicación a la hora de hacer una exposición. Como se mencionó antes, aunque la prosodia está presente de manera natural en el estilo propio de la comunicación, es importante reconocer que esta se puede aprender de manera técnica, para cuando se pretende exponer ante un público. Si trasladamos este concepto a la lengua de señas colombiana, notaremos cómo la prosodia se revela en la velocidad con que se realiza la seña, si es acelerada, o más bien, se realiza de forma lenta; qué espacio utiliza, si abarca gran parte del alcance corporal como cuando se exagera, o se utiliza una porción reducida de espacio; también se tomará en cuenta la gesticulación facial, si amplía la mirada o más bien la cierra, si expande o contrae las mejillas; y la repetición de una seña en la misma oración para dar claridad acerca de quién o de qué se habla.

      
      











































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
