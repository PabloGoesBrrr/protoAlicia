html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Canvas</title>
</head>
<body>
    <canvas id="canvas"></canvas>
    <script src="canvas.js"></script>
</body>
</html>

css:
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#canvas {
    /* canvas works pretty much entirely in jscript, even the sizing, so thats why the css wont have a height or width*/
    border: 5px solid black;
}

jscript:

window.addEventListener('load', () => {
    //we need to get the element(canvas) so we creat a variable to get the canvas
    const canvas = document.querySelector("#canvas");
    //we also need to work inside the canvas and what ctx(2d or 3d)
    const ctx = canvas.getContext("2d");

    //Resizing the canvas. like said at the css file, canvas works in its entirety in jscript, even the sizing
    function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    /* this is how we draw.
    fillRect fills in a rectangular shape. it has 4 parameters:
    x, y, w, h
    First 2 are position, so: x, y. Works like pos absolute from CSS
    Next 2 are size, so: w, h
    ==
    colors, you need to define the color before drawing the shape
    */
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 200, 200);
    //stroke makes only the lines
    ctx.strokeStyle = "blue";
    ctx.strokeRect(400, 100, 200, 200);

});