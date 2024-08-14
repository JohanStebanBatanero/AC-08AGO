// Obtener referencias a los elementos
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const shapeSelect = document.getElementById('shape');
const clearButton = document.getElementById('clear');

let currentShape = 'rectangle';
let shapes = [];
let selectedShapeIndex = null;

// Manejar la selección de formas
shapeSelect.addEventListener('change', (e) => {
    currentShape = e.target.value;
});

// Obtener referencia al input de escalado
const scaleInput = document.getElementById('scale-input');


// Manejar el clic en el canvas para dibujar formas
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    let shape;
    if (currentShape === 'rectangle') {
      shape = { type: 'rectangle', x, y, width: 100, height: 50, rotation: 0 };
    } else if (currentShape === 'circle') {
      shape = { type: 'circle', x, y, radius: 50, rotation: 0 };
    } else if (currentShape === 'square') {
      shape = { type: 'square', x, y, size: 80, rotation: 0 };
    } else if (currentShape === 'triangle') {
      shape = { type: 'triangle', x, y, size: 80, rotation: 0 };
    }
  
    // Aplicar el escalado a la forma antes de agregarla al array
    const Vs = parseFloat(scaleInput.value);
    shape.width = shape.width * Vs;
    shape.height = shape.height * Vs;
    if (shape.type === 'circle') {
      shape.radius = shape.radius * Vs;
    } else if (shape.type === 'square' || shape.type === 'triangle') {
      shape.size = shape.size * Vs;
    }
  
    // Aplicar la rotación a la forma antes de agregarla al array
    const angle = parseFloat(rotationInput.value);
    shape = rotateShape(shape, angle);
  
    shapes.push(shape);
    drawShapes();
  });

  function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach((shape, index) => {
        ctx.save(); // Guardar el estado actual del contexto
        ctx.translate(shape.x, shape.y); // Mover el origen a la posición original de la figura
        ctx.rotate(shape.rotation * Math.PI / 180); // Aplicar la rotación

        ctx.beginPath();
        if (shape.type === 'rectangle') {
            ctx.rect(-shape.width / 2, -shape.height / 2, shape.width, shape.height);
        } else if (shape.type === 'circle') {
            ctx.arc(0, 0, shape.radius, 0, Math.PI * 2);
        } else if (shape.type === 'square') {
            ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else if (shape.type === 'triangle') {
            ctx.moveTo(0, -shape.size); // Punto superior del triángulo
            ctx.lineTo(-shape.size / 2, shape.size / 2); // Punto inferior izquierdo
            ctx.lineTo(shape.size / 2, shape.size / 2); // Punto inferior derecho
            ctx.closePath();
        }
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 100, 255, 0.3)';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.restore(); // Restaurar el estado anterior del contexto
    });
}