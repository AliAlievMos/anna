const replaceBtn = document.getElementById('replaceBtn');
const backBtn = document.getElementById('backBtn');
// const originalHTML = document
const dropSvg = ['<img src="drop1.png" alt="Description of your image" width="15" height="auto">',
    '<img src="drop2.png" alt="Description of your image" width="15" height="auto">',
    '<img src="drop3.png" alt="Description of your image" width="35" height="auto">']
replaceBtn.addEventListener('click', () => {
    let text = document.getElementById('text');
    let divs =    text.querySelectorAll("div");
    divs.forEach(div => {
        let ps = div.querySelectorAll("p")
        ps.forEach(p => {
            let letters = p.textContent.split('');
            for (let i = 0; i < letters.length; i++) {
                let letter = letters[i];
                if (letter !== ' ') {
                    if (randomInt() % 56 === 0) {
                        letters[i] = dropSvg[randomDrop()]
                    }
                }
            }
            p.innerHTML = letters.join('')
        });
    });
});

backBtn.addEventListener('click', ()=>{
        location.reload();
    }
);

// function revertHTML() {
//     document.body.innerHTML = originalHTML;
// }


function randomInt(){
    return Math.floor(Math.random() * 1146)
}
function randomDrop(){
    return Math.floor(Math.random() * 3)
}




const paintCanvas = document.querySelector("#canvas")


const context = paintCanvas.getContext("2d")

var points = [
    { x: 100, y: 50 },
    { x: 120, y: 90 },
    { x: 160, y: 90 },
    { x: 130, y: 120 },
    { x: 140, y: 160 },
    { x: 100, y: 135 },
    { x: 60, y: 160 },
    { x: 70, y: 120 },
    { x: 40, y: 90 },
    { x: 80, y: 90 }
];

context.lineCap = "round"
context.lineWidth = 5

let x = 0
let y = 0
let isMouseDown = false

const stopDrawing = () => {
    isMouseDown = false
}
const startDrawing = (event) => {
    isMouseDown = true
    ;[x, y] = [event.offsetX, event.offsetY]
}

const drawLine = (event) => {
    if (isMouseDown) {
        const newX = event.offsetX
        const newY = event.offsetY
        console.log(isPointInPolygon(newX, newY, points))
        if (isPointInPolygon(newX, newY, points)) {
            context.strokeStyle = "#0e33ba"
        } else {
            context.strokeStyle = "#000000"
        }
        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(newX, newY)
        context.stroke()
        x = newX
        y = newY
    }
}
function isPointInPolygon(x, y, points) {
    var inside = false;
    for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
        var xi = points[i].x, yi = points[i].y;
        var xj = points[j].x, yj = points[j].y;

        var intersect = ((yi > y) != (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) {
            inside = !inside;
        }
    }
    return inside;
}


paintCanvas.addEventListener("mousedown", startDrawing)
paintCanvas.addEventListener("mousemove", drawLine)
paintCanvas.addEventListener("mouseup", stopDrawing)
paintCanvas.addEventListener("mouseout", stopDrawing)



// 1





const paintCanvas1 = document.querySelector("#canvas1")


const context1 = paintCanvas1.getContext("2d")

context1.lineCap = "round"
context1.lineWidth = 2

let x1 = 0
let y1 = 0
let isMouseDown1 = false

const stopDrawing1 = () => {
    isMouseDown1 = false
}
const startDrawing1 = (event) => {
    isMouseDown1 = true
    ;[x1, y1] = [event.offsetX, event.offsetY]
}

const drawLine1 = (event) => {
    if (isMouseDown1) {
        const newX = event.offsetX
        const newY = event.offsetY
        context1.beginPath()
        context1.moveTo(x1, y1)
        context1.lineTo(newX, newY)
        context1.stroke()
        x1 = newX
        y1 = newY
    }
}

paintCanvas1.addEventListener("mousedown", startDrawing1)
paintCanvas1.addEventListener("mousemove", drawLine1)
paintCanvas1.addEventListener("mouseup", stopDrawing1)
paintCanvas1.addEventListener("mouseout", stopDrawing1)


// 2


const paintCanvas2 = document.querySelector("#canvas2")


const context2 = paintCanvas2.getContext("2d")

context2.lineCap = "round"
context2.lineWidth = 2

let x2 = 0
let y2 = 0
let isMouseDown2 = false

const stopDrawing2 = () => {
    isMouseDown2 = false
}
const startDrawing2 = (event) => {
    isMouseDown2 = true
    ;[x2, y2] = [event.offsetX, event.offsetY]
}

const drawLine2 = (event) => {
    if (isMouseDown2) {
        const newX = event.offsetX
        const newY = event.offsetY
        context2.beginPath()
        context2.moveTo(x2, y2)
        context2.lineTo(newX, newY)
        context2.stroke()
        x2 = newX
        y2 = newY
    }
}

paintCanvas2.addEventListener("mousedown", startDrawing2)
paintCanvas2.addEventListener("mousemove", drawLine2)
paintCanvas2.addEventListener("mouseup", stopDrawing2)
paintCanvas2.addEventListener("mouseout", stopDrawing2)


// 3



const paintCanvas3 = document.querySelector("#canvas3")


const context3 = paintCanvas3.getContext("2d")

context3.lineCap = "round"
context3.lineWidth = 2

let x3 = 0
let y3 = 0
let isMouseDown3 = false

const stopDrawing3 = () => {
    isMouseDown3 = false
}
const startDrawing3 = (event) => {
    isMouseDown3 = true
    ;[x3, y3] = [event.offsetX, event.offsetY]
}

const drawLine3 = (event) => {
    if (isMouseDown3) {
        const newX = event.offsetX
        const newY = event.offsetY
        context3.beginPath()
        context3.moveTo(x3, y3)
        context3.lineTo(newX, newY)
        context3.stroke()
        x3 = newX
        y3 = newY
    }
}

paintCanvas3.addEventListener("mousedown", startDrawing3)
paintCanvas3.addEventListener("mousemove", drawLine3)
paintCanvas3.addEventListener("mouseup", stopDrawing3)
paintCanvas3.addEventListener("mouseout", stopDrawing3)

paintCanvas3.addEventListener("touchstart", startDrawing3, false);
paintCanvas3.addEventListener("touchmove", drawLine3, true);
paintCanvas3.addEventListener("touchend", stopDrawing3, false);
document.body.addEventListener("touchcancel", stopDrawing3, false);



// mobile draw


$(document).ready(function () {
    //User Variables
    var canvas = document.querySelector('#canvas');  //canvas element
    var context = canvas.getContext("2d");           //context element
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    canvas.addEventListener("touchstart", mouseDown, false);
    canvas.addEventListener("touchmove", mouseXY, true);
    canvas.addEventListener("touchend", mouseUp, false);
    document.body.addEventListener("touchcancel", mouseUp, false);

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

        context.strokeStyle = "#000000";  //set the "ink" color
        context.lineJoin = "miter";       //line join
        context.lineWidth = 2;            //"ink" width

        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();                               //create a path
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);  //move to
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);      //move to
            }
            context.lineTo(clickX[i], clickY[i]);              //draw a line
            context.stroke();                                  //filled with "ink"
            context.closePath();                               //close path
        }
    }

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }


    function mouseXY (e) {
        var touches = e.touches || [];
        var touch = touches[0] || {};
        if (paint) {
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop - 40, true);
            draw();
        }
    }
    function mouseUp() {
        paint = false;
    }

    function mouseDown(e) {
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop - 40);
        draw();
    }
});

$(document).ready(function () {
    var canvas = document.querySelector('#canvas1');  //canvas element
    var context = canvas.getContext("2d");           //context element
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    canvas.addEventListener("touchstart", mouseDown, false);
    canvas.addEventListener("touchmove", mouseXY, true);
    canvas.addEventListener("touchend", mouseUp, false);
    document.body.addEventListener("touchcancel", mouseUp, false);

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

        context.strokeStyle = "#000000";  //set the "ink" color
        context.lineJoin = "miter";       //line join
        context.lineWidth = 2;            //"ink" width

        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();                               //create a path
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);  //move to
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);      //move to
            }
            context.lineTo(clickX[i], clickY[i]);              //draw a line
            context.stroke();                                  //filled with "ink"
            context.closePath();                               //close path
        }
    }

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }


    function mouseXY (e) {
        var touches = e.touches || [];
        var touch = touches[0] || {};
        if (paint) {
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop - 40, true);
            draw();
        }
    }
    function mouseUp() {
        paint = false;
    }

    function mouseDown(e) {
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop - 40);
        draw();
    }
});

$(document).ready(function () {
    var canvas = document.querySelector('#canvas2');  //canvas element
    var context = canvas.getContext("2d");           //context element
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    canvas.addEventListener("touchstart", mouseDown, false);
    canvas.addEventListener("touchmove", mouseXY, true);
    canvas.addEventListener("touchend", mouseUp, false);
    document.body.addEventListener("touchcancel", mouseUp, false);

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

        context.strokeStyle = "#000000";  //set the "ink" color
        context.lineJoin = "miter";       //line join
        context.lineWidth = 2;            //"ink" width

        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();                               //create a path
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);  //move to
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);      //move to
            }
            context.lineTo(clickX[i], clickY[i]);              //draw a line
            context.stroke();                                  //filled with "ink"
            context.closePath();                               //close path
        }
    }

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }


    function mouseXY (e) {
        var touches = e.touches || [];
        var touch = touches[0] || {};
        if (paint) {
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop - 40, true);
            draw();
        }
    }
    function mouseUp() {
        paint = false;
    }

    function mouseDown(e) {
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop - 40);
        draw();
    }
});

$(document).ready(function () {
    var canvas = document.querySelector('#canvas3');  //canvas element
    var context = canvas.getContext("2d");           //context element
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    canvas.addEventListener("touchstart", mouseDown, false);
    canvas.addEventListener("touchmove", mouseXY, true);
    canvas.addEventListener("touchend", mouseUp, false);
    document.body.addEventListener("touchcancel", mouseUp, false);

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

        context.strokeStyle = "#000000";  //set the "ink" color
        context.lineJoin = "miter";       //line join
        context.lineWidth = 2;            //"ink" width

        for (var i = 0; i < clickX.length; i++) {
            context.beginPath();                               //create a path
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);  //move to
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);      //move to
            }
            context.lineTo(clickX[i], clickY[i]);              //draw a line
            context.stroke();                                  //filled with "ink"
            context.closePath();                               //close path
        }
    }

    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }


    function mouseXY (e) {
        var touches = e.touches || [];
        var touch = touches[0] || {};
        if (paint) {
            addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop - 40, true);
            draw();
        }
    }
    function mouseUp() {
        paint = false;
    }

    function mouseDown(e) {
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop - 40);
        draw();
    }
});