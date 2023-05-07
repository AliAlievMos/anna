const replaceBtn = document.getElementById('replaceBtn');
const backBtn = document.getElementById('backBtn');
// const originalHTML = document
const dropSvg = ['<img src="drop1.png" alt="Description of your image" width="15" height="auto">',
                            '<img src="drop2.png" alt="Description of your image" width="15" height="auto">',
                            '<img src="drop3.png" alt="Description of your image" width="35" height="auto">']
replaceBtn.addEventListener('click', () => {
    console.log("repl")
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

    context.lineCap = "round"
    context.lineWidth = 2

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
            context.beginPath()
            context.moveTo(x, y)
            context.lineTo(newX, newY)
            context.stroke()
            x = newX
            y = newY
        }
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

paintCanvas3.addEventListener("touchstart", startDrawing3)
paintCanvas3.addEventListener("touchmove", drawLine3)
paintCanvas3.addEventListener("touchend", stopDrawing3)

