<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Salud ocupacional

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hIuEqUdAVJo?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    Separador 
    
    #t_3_1.titulo-segundo
      .h2 3.1 Definición
    
    .row.justify-content-star
      .col-lg-7(data-aos="fade-right")
        img(src='@/assets/curso/images/tema3/img_1.png').mb-3
      .col-lg-5(data-aos="fade-left") 
        .cajon.color-custom-1.p-4.mb-5
          p.p-1 De acuerdo con la Ley 1562 de 2012 la Seguridad y la Salud en el Trabajo es aquella disciplina que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores. Tiene por objeto mejorar las condiciones y el medio ambiente de trabajo, así como la salud en el trabajo, que conlleva la promoción y el mantenimiento del bienestar físico, mental y social de los trabajadores en todas las ocupaciones. (Artículo 1) En este sentido en la ocupación del intérprete y traductor en Lengua de Señas Colombianas - Español deben plantearse estrategias en el marco del Sistema de Gestión de la Seguridad y la Salud en el Trabajo desde sus procesos de planear documentando el programa, aclarando los objetivos hacer, verificar y actuar que vayan en concordancia con la promoción de la salud y la prevención de la enfermedad.


    Separador 
    
    #t_3_2.titulo-segundo
      .h2 3.2 Enfermedades profesionales

    .row.justify-content-center.mb-3
      .col-lg-10(data-aos="fade-right")
        .cajon.color-custom.p-5.mb-5
          p De acuerdo con la Ley 1562 de 2012 es aquella contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar. El gobierno nacional, determinará, en forma periódica, las enfermedades que se consideran como laborales y en los casos en que una enfermedad no figure en la tabla de enfermedades laborales (Decreto 1444 de 2014), pero se demuestre· la relación de causalidad con los factores de riesgo ocupacionales se reconocerá como enfermedad laboral, conforme lo establecido en las normas legales vigentes (Artículo 4).

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-custom-2.p-5.p-sm-5.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_2.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0 Para el caso de los intérpretes y traductores en Lengua de Señas de acuerdo con Feuerstein, Marshall, Shaw & Burrell (como se citó en Villamil, D. Camacho, L. Quintero, D. Guzmán, B.  y Ruiz, C. 2018) en Estados Unidos es una profesión característica que desarrolla enfermedades por trauma acumulativo como Síndrome de Túnel del Carpo, epicondilitis, bursitis, entre otras. En Colombia es difícil caracterizar este tipo de enfermedades como de origen laboral por la falta de estadísticas formales y por ser una ocupación que puede desempeñarse en cualquier sector económico (p.13-14).

    .bloque-texto-a.color-custom-3.p-md-0.mb-3.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Para el caso de los intérpretes y traductores en Lengua de Señas de acuerdo con Feuerstein, Marshall, Shaw & Burrell (como se citó en Villamil, D. Camacho, L. Quintero, D. Guzmán, B.  y Ruiz, C. 2018) en Estados Unidos es una profesión característica que desarrolla enfermedades por trauma acumulativo como Síndrome de Túnel del Carpo, epicondilitis, bursitis, entre otras. En Colombia es difícil caracterizar este tipo de enfermedades como de origen laboral por la falta de estadísticas formales y por ser una ocupación que puede desempeñarse en cualquier sector económico (p.13-14).
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_2.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        TabsA.color-acento-contenido.mt-5(data-aos="fade")
    
          .tarjeta.back-tab.p-4(titulo="Riesgo biomecánico")
            
            .row 
              .col-lg-12.mb-4
                h3 Riesgo biomecánico
              .row.justify-content-center
                .col-lg-4
                  img(src="@/assets/curso/images/tema3/img_3.png")
                .col-lg-8
                  p.my-3 El cual hace referencia al desgaste físico en tanto este puede ser alterado por los movimientos que deben realizar al señar por tiempos prolongados, relacionado con el discurso de los profesores de área y por las posiciones que deben mantener en periodos largos sin la posibilidad de tener un relevo por la organización de las clases. (Villamil et al. 2018, p.55)
              .row.justify-content-center
                .col-lg-12
                  p.my-3 De acuerdo con el Centro de Intérpretes de Lengua de Signos Española y Guías Intérpretes de Castilla y León, como se citó en Villamil et al. (2018), exponen que los Intérpretes de Lengua de Señas tienen que hacer movimientos manuales donde separan los codos del centro del cuerpo y mantienen los brazos en el aire por periodos largos de tiempo y adicionalmente varían la velocidad de los movimientos según la producción del lenguaje y la comunicación. Además, según Feuerstein, Marshall, Shaw & Burrell, como se citó en Villamil et al. (2018, p.56) los intérpretes de lengua de señas realizan aproximadamente 270 movimientos/min., en intervalos de 13.600/15 min., lo cual puede producir a largo plazo desórdenes musculoesqueléticos en manos y muñecas.
                
          .tarjeta.back-tab.p-4(titulo="El riesgo psicosocialo")
            
            .row 
              .col-lg-12
                h3 El riesgo psicosocialo
              .row.p-3
                .col-lg-4
                  img(src="@/assets/curso/images/tema3/img_4.png").mb-3
                .col-lg-8
                  | Relacionado  con cuatro procesos el primero de ellos es el desgaste mental, lo anterior está sujeto al mismo proceso cognitivo de la interpretación en Lengua de Señas, el INSOR (como se citó en Villamil et al. 2018,  p.61) considera que el proceso de interpretación implica un proceso de recepción, procesamiento y transmisión de la información, además, este proceso exige unas capacidades que debe tener el Intérprete de Lengua de Señas como lo son la discriminación auditiva 
                .col-lg-12
                  p vocal, la comprensión rápida de los mensajes, el conocimiento gramatical  lexical de ambas lenguas, capacidad para analizar y asimilar el mensaje en poco tiempo y capacidades de adaptación con el orador, todo con el fin de articular las ideas de las oraciones para dar un mensaje lógico y ordenado. El Segundo, con el nivel de atención y memoria que deben de prestar y tener al interpretar y el tercero, con el aprendizaje nuevo y constante que deben tener, tanto para dictar sus clases como para ampliar su lenguaje, y así mismo las señas que deben usar para cada momento específico de los discursos. El cuarto, con el estrés laboral percibido por las actividades y funciones tanto de interpretación como de docencia (p. 61-62-63).

                  p.mb-2 Las consecuencias y manifestaciones percibidas por el estrés laboral al que están expuestos, los intérpretes refieren que pueden presentar dolores de cabeza, tensión muscular o diferentes alteraciones en el sistema nerviosos central de manera transitoria como fotofobia, parestesias o tics nerviosos, así mismo, otro tipo de manifestaciones como nerviosismo, ansiedad o actitudes de incomodidad (Villamil et al. 2018, p.63-64).
          
          .tarjeta.back-tab.p-4(titulo="Carga emocional")
            
            .row 
              .col-lg-12.mb-4
                h3 Carga emocional 
              .row.p-3
                .col-lg-4
                  img(src="@/assets/curso/images/tema3/img_5.png").mb-3
                .col-lg-8
                  | Que perciben los intérpretes va enmarcada en los procesos de la no omisión de la información cuando realizan sus servicios de interpretación, así mismo, con las metodologías de enseñanza de los profesores de área y la presión al estar observados por otros al momento de realizar la interpretación (Villamil et al. 2018, p.64) de acuerdo con la Corporación Comuniquémonos sin voz, con voz (cómo se citó en Villamil et al. 2018) es así que los intérpretes terminan 
                .col-lg-12
                  | escuchando a sus alumnos en temas personales y hay una carga emocional por no poder dar una adecuada o correcta consejería por la falta de conocimiento específico en esos temas. También la carga emocional se da por las mismas características del servicio de interpretación y la premisa de transmitir la información lo más fiel posible, sin omitir, ni añadir o alterar el mensaje final (p.65).


          .tarjeta.back-tab.p-4(titulo="Problemas organizacionales")
            
            .row 
              .col-lg-12.mb-4
                h3 Problemas organizacionales
              .row.p-3
                .col-lg-4
                  img(src="@/assets/curso/images/tema3/img_6.png")
                .col-lg-8
                  p.my-3 Relacionado con las dificultades que se tienen a nivel administrativo y organizacional de las funciones y responsabilidades de los Intérpretes y cómo estas dificultades afectan directa o indirectamente la la generación de factores de riesgo psicosociales (Villamil et al. 2018, p.66).
              

    Separador 
    
    #t_3_3.titulo-segundo
      .h2 3.3 Métodos profilácticos de prevención y respiración

    p.mb-5 Los métodos profilácticos hacen referencia a las estrategias generadas en el marco de prevención de la enfermedad desde diferentes niveles que van desde la promoción de la salud, el tratamiento de la enfermedad y la recuperación de la salud. En la interpretación y traducción en Lengua de Señas Colombianas - Español es importante generar medidas como:

    SlyderF.elemento.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            figure
              img.my-3(src='@/assets/curso/images/tema3/ico_1.svg' alt='Volver arriba' style="width:100px; display:block; margin:0 auto;")
              p.text-center Autocuidado realizando pausas activas masajes y ejercicios de estiramiento en los discursos extensos     

      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            figure
              img.my-3(src='@/assets/curso/images/tema3/ico_2.svg' alt='Volver arriba' style="width:100px; display:block; margin:0 auto;")
              p.text-center Solicitar escenarios adecuados en los cuales previo al servicio se revise la iluminación, los ruidos externos, la temperatura del aire, la adecuada ubicación del intérprete entre otros, que al no estar debidamente dispuestos generen mayor desgaste en la interpretación.

      .tarjeta.sp1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-10
            figure
              img.my-3(src='@/assets/curso/images/tema3/ico_3.svg' alt='Volver arriba' style="width:100px; display:block; margin:0 auto;").mb-3
              p.text-center Solicitar que se definan claramente las funciones en el marco de la interpretación y traducción.

      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            figure
              img.my-3(src='@/assets/curso/images/tema3/ico_4.svg' alt='Volver arriba' style="width:100px; display:block; margin:0 auto;")
              p.text-center Definir tiempos de descanso que permitan la disminución de la fatiga mental y cognitiva.

      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            figure
              img.my-3(src='@/assets/curso/images/tema3/ico_5.svg' alt='Volver arriba' style="width:100px; display:block; margin:0 auto;")
              p.text-center Solicitar apoyo del público oyente que permita disminuir el ruido y mejorar la escucha y concentración del intérprete.



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
