// Obtener referencia al input de escalado
const scaleInput = document.getElementById('scale-input');

// Función para escalar una figura
function scaleShape(shape, Vs) {
  if (shape.type === 'rectangle') {
    shape.width = shape.width * Vs;
    shape.height = shape.height * Vs;
  } else if (shape.type === 'circle') {
    shape.radius = shape.radius * Vs;
  } else if (shape.type === 'square') {
    shape.size = shape.size * Vs;
  } else if (shape.type === 'triangle') {
    shape.size = shape.size * Vs;
  }
  return shape;
}

