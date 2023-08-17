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

//console.log((100*50)/400);