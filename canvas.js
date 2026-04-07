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

    //variables

    //so we know when we are drawing, i.e. when we are pressing down or not
    let painting = false;

    function startPos(e){
        painting = true;
        draw(e);
    }
    function finishedPos(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        //return nothing if not drawing
        if(!painting) return;
        ctx.lineWidth = 5;
        //makes the line/brush round
        ctx.lineCap = "round";

        //start drawing. first making the line go to where the mouse is
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //EventListeners
    canvas.addEventListener("mousedown", startPos);
    canvas.addEventListener("mouseup", finishedPos);
    canvas.addEventListener("mousemove", draw);

});

