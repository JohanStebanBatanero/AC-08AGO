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

// Manejar el clic en el canvas para dibujar formas
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let shape;
    if (currentShape === 'rectangle') {
        shape = { type: 'rectangle', x, y, width: 100, height: 50 };
    } else if (currentShape === 'circle') {
        shape = { type: 'circle', x, y, radius: 50 };
    } else if (currentShape === 'square') {
        shape = { type: 'square', x, y, size: 80 };
    } else if (currentShape === 'triangle') {
        shape = { type: 'triangle', x, y, size: 80 };
    }
    shapes.push(shape);
    drawShapes();
});

// Función para dibujar todas las formas en el canvas
function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach((shape, index) => {
        ctx.beginPath();
        if (shape.type === 'rectangle') {
            ctx.rect(shape.x, shape.y, shape.width, shape.height);
        } else if (shape.type === 'circle') {
            ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
        } else if (shape.type === 'square') {
            ctx.rect(shape.x, shape.y, shape.size, shape.size);
        } else if (shape.type === 'triangle') {
            ctx.moveTo(shape.x, shape.y);
            ctx.lineTo(shape.x + shape.size / 2, shape.y + shape.size);
            ctx.lineTo(shape.x - shape.size / 2, shape.y + shape.size);
            ctx.closePath();
        }
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 100, 255, 0.3)';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    });
}

// Manejar el botón de limpiar
clearButton.addEventListener('click', () => {
    shapes = [];
    drawShapes();
});