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
//
const color = 'black';

const canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', setPosition);
    canvas.addEventListener('mouseenter', setPosition);

    let x, y;

    function setPosition(event) {
        x = event.clientX - canvas.offsetLeft;
        y = event.clientY - canvas.offsetTop;
    }

    function draw(event) {
        if (event.buttons !== 1) return;

        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.lineCap = 'round';
        context.moveTo(x, y);
        setPosition(event);
        context.lineTo(x, y);
        context.stroke();
    }

function getCanvasPosition(canvas) {
    const rect = canvas.getBoundingClientRect();
    const doc = document.documentElement;
    const left = rect.left + (window.pageXOffset || doc.scrollLeft);
    const top = rect.top + (window.pageYOffset || doc.scrollTop);
    return { left, top };
}

function updateCanvasPosition() {
    const { left, top } = getCanvasPosition(canvas);
    canvas.style.left = left + 'px';
    canvas.style.top = top + 'px';
}

window.addEventListener('scroll', updateCanvasPosition);


// 1

// const canvas1 = document.getElementById('canvas1');
// const context1 = canvas1.getContext('2d');
//     canvas1.addEventListener('mousemove', draw1);
//     canvas1.addEventListener('mousedown', setPosition1);
//     canvas1.addEventListener('mouseenter', setPosition1);
//
//     let x1, y1;
//
//     function setPosition1(event, canavas) {
//         x1 = event.clientX - canvas1.offsetLeft;
//         y1 = event.clientY - canvas1.offsetTop;
//     }
//
//     function draw1(event) {
//         if (event.buttons !== 1) return;
//
//         context1.beginPath();
//         context1.strokeStyle = color;
//         context1.lineWidth = 2;
//         context1.lineCap = 'round';
//         context1.moveTo(x, y);
//         setPosition1(event);
//         context1.lineTo(x, y);
//         context1.stroke();
//     }
// }

