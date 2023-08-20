var canvases = document.getElementsByClassName("candy");

Array.from(canvases).forEach(canvas => {
    var context = canvas.getContext("2d");

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 25;
    var fillColor = null
    switch(canvas.id){
        case 'yellow':
            fillColor = 'yellow';
            break;
        case 'blue':
            fillColor = 'blue';
            break;
    }

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = fillColor;
    context.fill();
    context.closePath();
});

Array.from(canvases).forEach(canvas => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    canvas.addEventListener("mousedown", (e) =>{
        isDragging = true;
        offsetX = e.clientX - canvas.getBoundingClientRect().left;
        offsetY = e.clientY - canvas.getBoundingClientRect().top;
        canvas.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if(!isDragging) return;
        
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        canvas.style.left = "${newX}px";
        canvas.style.top = "${newY}px";
    });
    document.addEventListener("mouseup", ()=> {
        isDragging = false;
        canvas.style.cursor = "grab";
    });
});

//console.log((100*50)/400);