const replaceBtn = document.getElementById('replaceBtn');
const testButton = document.getElementById('testButton');
const backBtn = document.getElementById('backBtn');
const originalHTML = document
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