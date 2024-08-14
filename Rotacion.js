// Obtener referencia al input de rotación
const rotationInput = document.getElementById('rotation-input');

// Función para rotar una figura
function rotateShape(shape, angle) {
  if (shape.type === 'rectangle') {
    shape.rotation = angle;
  } else if (shape.type === 'circle') {
    // No se puede rotar un círculo
  } else if (shape.type === 'square') {
    shape.rotation = angle;
  } else if (shape.type === 'triangle') {
    shape.rotation = angle;
  }
  return shape;
}