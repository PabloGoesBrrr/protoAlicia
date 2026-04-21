//we need to get the element(canvas) so we creat a variable to get the canvas
const canvas = document.getElementById('drawing-board');
//we also need to work inside the canvas and what ctx(2d or 3d)
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop; function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
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
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    }

});

//desenhando com mouse
const draw = (e) => {
    if(!isPainting){
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    //it needs to be subtracted, otherwise the line doesnt start at the mousepointer
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX - canvasOffsetX, e.clientY);
}


canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;

    ctx.globalCompositeOperation = isErasing ? "destination-out" : "source-over";

});

canvas.addEventListener('mouseup', (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();

});

canvas.addEventListener('mousemove', draw);

//eraser
const statusTool = document.getElementById("tool");

const eraserBtn = document.getElementById("eraser");

eraserBtn.addEventListener("click", () => {
    isErasing = !isErasing;
    eraserBtn.textContent = isErasing ? "Ativar Caneta" : "Ativar Borracha";
    statusTool.textContent = isErasing ? "Borracha" : "Caneta";
});



