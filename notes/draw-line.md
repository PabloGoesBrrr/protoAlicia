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

    //if theres no beginPath all the lines will be connected
    ctx.beginPath();
    //this is where the drawing begins
    ctx.moveTo(100, 100);
    //where the line goes to
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    //it connects the begin point with the end point
    ctx.closePath();
    //what makes the line appear
    ctx.stroke();
});

html and css didnt change from square