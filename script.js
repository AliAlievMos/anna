const replaceBtn = document.getElementById('replaceBtn');
let isReplaced = false
const dropSvg = [
    '<img src="drop1.png" alt="Description of your image" width="10" height="auto">',
    '<img src="drop2.png" alt="Description of your image" width="10" height="auto">',
    '<img src="drop3.png" alt="Description of your image" width="20" height="auto">']
replaceBtn.addEventListener('click', () => {
    let text = document.getElementById('text');
    let divs =    text.querySelectorAll("div");
    if (isReplaced) {
        location.reload();
    } else {
        isReplaced = true
        divs.forEach(div => {
            const elements = document.querySelectorAll("p");
            let ps = div.querySelectorAll("p")
            ps.forEach(p => {
                let letters = p.textContent.split('');
                for (let i = 0; i < letters.length; i++) {
                    let letter = letters[i];
                    if (letter !== ' ') {
                        if (randomInt() % 4 === 0) {
                            letters[i] = dropSvg[randomDrop()]
                        }
                    }
                }
                p.innerHTML = letters.join('')
            });
        });
    }
});

// backBtn.addEventListener('click', ()=>{
//         location.reload();
//     }
// );

function randomInt(){
    return Math.floor(Math.random() * 1146)
}
function randomDrop(){
    return Math.floor(Math.random() * 3)
}


const input = document.getElementById('input');
const output = document.getElementById('output');
const body = document.getElementById('output-body');

function printInput(){
    document.body.style.zoom = "50%";
    let drops = `<p style="margin-top: 30%">${input.value}</p> <p id="drops" style="cursor: pointer">`
    for (let i = 0;i < input.value.length; i++){
        drops += dropSvg[randomDrop()]
    }
    document.body.style.textAlign = 'center'
    body.innerHTML = drops;
    document.getElementById("drops").addEventListener("click", function(event) {
        location.reload();
    });
}
function setMinZoom() {
    var viewport = document.querySelector('meta[name="viewport"]');
    var minScale = 0.5; // Adjust this value to set the minimum zoom level

    viewport.setAttribute('content', 'initial-scale=' + minScale + ', maximum-scale=5');
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

