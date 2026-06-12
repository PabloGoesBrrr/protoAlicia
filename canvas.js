//we need to get the element(canvas) so we creat a variable to get the canvas
const canvas = document.getElementById('drawing-board');
//we also need to work inside the canvas and what ctx(2d or 3d)
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext("2d");

const sizeValue = document.getElementById("sizeValue");



function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

let isPainting = false;
let isErasing = false;
let lineWidth = 5;
let startX;
let startY;

// botao clear
toolbar.addEventListener('click', e => {

    // Clear canvas
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Save drawing
    if (e.target.id === 'save') {

        // Create temporary canvas
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        // White background
        tempCtx.fillStyle = '#ffffff';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        // Draw the user's artwork on top
        tempCtx.drawImage(canvas, 0, 0);

        // Download
        const link = document.createElement('a');
        link.download = 'desenho.png';
        link.href = tempCanvas.toDataURL('image/png');
        link.click();
    }
});

toolbar.addEventListener('change', e => {
// slider de cor
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

// slider de tamanho brush
    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
        sizeValue.textContent = lineWidth;
    }
});

const draw = (e) => {
    if (!isPainting) return;

    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(
        e.clientX - rect.left,
        e.clientY - rect.top
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(
        e.clientX - rect.left,
        e.clientY - rect.top
    );
}


canvas.addEventListener('pointerdown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;

    ctx.globalCompositeOperation = isErasing ? "destination-out" : "source-over";

});

canvas.addEventListener('pointerup', (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();

});

canvas.addEventListener('pointermove', draw);

//eraser
const statusTool = document.getElementById("tool");

const eraserBtn = document.getElementById("eraser");

eraserBtn.addEventListener("click", () => {
    isErasing = !isErasing;
    eraserBtn.textContent = isErasing ? "Ativar Caneta" : "Ativar Borracha";
    statusTool.textContent = isErasing ? "Borracha" : "Caneta";
});



