<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> validar la comprensión de los requisitos y buenas prácticas para el transporte terrestre de animales en pie, según la normativa colombiana.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Es permitido movilizar en un mismo vehículo animales de diferentes especies, como bovinos y porcinos, sin necesidad de separarlos físicamente.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La resolución exige que, al transportar diferentes especies, estas deben estar separadas físicamente para prevenir lesiones y estrés.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La Guía Sanitaria de Movilización Interna (GSMI) es un documento opcional para el transporte de animales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La GSMI es un documento obligatorio expedido por el ICA que ampara la movilización de animales y garantiza su trazabilidad y control sanitario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El conductor del vehículo es el único responsable del bienestar de los animales durante todo el trayecto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La responsabilidad es compartida entre el tenedor, el transportador y el conductor. Cada uno tiene obligaciones específicas antes, durante y después del viaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Se permite el uso de picanas eléctricas (tábano eléctrico) en todas las partes del cuerpo del animal para facilitar su movimiento durante el embarque.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La norma prohíbe el uso de picanas eléctricas en áreas sensibles como la cara, ubre, ano o genitales. Su uso debe ser mínimo y solo en los músculos de los cuartos traseros de bovinos y porcinos adultos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Los vehículos de transporte de animales deben tener pisos lisos y pulidos para facilitar su limpieza.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Los pisos deben ser antideslizantes y resistentes para prevenir caídas y lesiones de los animales durante el transporte.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El tiempo máximo de viaje continuo para bovinos adultos sin descanso, agua y alimento es de 12 horas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El tiempo máximo de viaje continuo para bovinos adultos es de 8 horas, tras lo cual deben tener un periodo de descanso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Es obligatorio que el transportador cuente con un plan de contingencia escrito para atender emergencias durante el viaje.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La normativa exige un plan de contingencia que detalle las acciones a seguir en caso de accidentes, fallas mecánicas o cualquier imprevisto que afecte a los animales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Las rampas de embarque y desembarque deben tener una pendiente superior a 45 grados para agilizar el proceso.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Las pendientes de las rampas deben ser suaves, preferiblemente no mayores a 20 grados, para evitar que los animales resbalen, caigan o sufran lesiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La limpieza y desinfección del vehículo se debe realizar únicamente al finalizar el mes de trabajo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El vehículo debe limpiarse y desinfectarse después de cada viaje, antes de cargar un nuevo grupo de animales, para prevenir la propagación de enfermedades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Está permitido transportar animales enfermos o heridos que no pueden mantenerse en pie por sí mismos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Se prohíbe el transporte de animales que no sean aptos para el viaje, incluyendo aquellos con enfermedades graves, heridas o incapacidad para moverse, salvo excepciones veterinarias específicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La densidad de carga se refiere a la cantidad máxima de peso que el vehículo puede soportar, sin importar el espacio por animal.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La densidad de carga se refiere al espacio mínimo requerido por cada animal, asegurando que puedan mantenerse en pie en su posición natural y tengan espacio para pequeños movimientos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Los vehículos deben contar con ventilación adecuada para garantizar el confort térmico y la calidad del aire para los animales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una ventilación apropiada, ya sea natural o forzada, es crucial para evitar el estrés por calor y la acumulación de gases nocivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'El personal que manipula a los animales durante el transporte no necesita ninguna capacitación específica.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Todo el personal involucrado debe estar capacitado en comportamiento animal, métodos de manejo de bajo estrés y los procedimientos establecidos en la normativa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Es aceptable que partes puntiagudas o cortantes sobresalgan en el interior del compartimento de los animales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El interior del vehículo debe ser liso, libre de bordes afilados, tornillos o cualquier elemento que pueda causar heridas a los animales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Durante las paradas de descanso obligatorias, los animales deben ser desembarcados para que puedan moverse libremente.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Los descansos deben realizarse en lugares adecuados (como corrales de descanso) donde los animales puedan ser desembarcados para recibir agua, alimento y descansar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Los techos de los vehículos de transporte son opcionales, incluso si se transportan animales bajo sol intenso o lluvia.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Los vehículos deben contar con un techo que proteja a los animales de las inclemencias del tiempo, como la radiación solar directa, la lluvia o el granizo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Las aves de corral pueden ser transportadas en guacales (cajas) apilados sin límite de altura.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El apilamiento de guacales tiene límites para asegurar la estabilidad de la carga y una ventilación adecuada a todos los niveles, evitando el aplastamiento de las aves en los niveles inferiores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El ayuno previo al transporte es una práctica recomendada para reducir la producción de heces y orina durante el viaje.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Un período de ayuno adecuado, sin restringir el acceso al agua, ayuda a mantener a los animales y al vehículo más limpios, y puede disminuir el riesgo de mareo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'El vehículo de transporte puede ser de cualquier tipo, como un camión de estacas sin carpa, siempre que llegue a su destino.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. El vehículo debe estar diseñado o adaptado específicamente para el transporte de animales, cumpliendo con todos los requisitos de seguridad, ventilación, piso, cerramiento y protección.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Las hembras en el último tercio de gestación pueden ser transportadas sin ninguna consideración especial.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
