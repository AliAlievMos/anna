// const text = document.querySelector('#text');
// const svg = "./get"
//
// // define an array of SVG paths to use
// const svgs = [
//     './Капля2.png',
//     'M20,0 L0,20 L20,20 Z',
//     'M0,0 L20,0 L10,20 Z',
//     'M0,20 L20,20 L10,0 Z'
// ];
//
// // loop through each letter in the text string
// for (let i = 0; i < text.textContent.length; i++) {
//     const letter = text.textContent[i];
//     // replace the letter with an SVG image
//         if (letter !== ' ') {
//             if (i === 0) {
//                     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//                     svg.setAttribute('viewBox', '0 0 20 20');
//
//                     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//                     path.setAttribute('d', svgs[Math.floor(Math.random() * svgs.length)]);
//                     path.setAttribute('fill', 'red');
//
//                     svg.appendChild(path);
//
//                     const span = document.createElement('span');
//                     span.appendChild(svg);
//
//                     // replace the letter with the new span element
//                     text.innerHTML = text.innerHTML.replace(letter, span.outerHTML);
//         }
//     }
// }
//
// function randomInt(){
//     return Math.floor(Math.random() * 1146)
// }

// const text = document.querySelector('#text');
// const letters = text.textContent.split('');
//
// const myParagraph = document.getElementById('button'); // get the <p> element
//
// myParagraph.addEventListener('click', function() { // add a 'click' event listener
//
// // create an XMLHttpRequest object
// const xhr = new XMLHttpRequest();
// // specify the URL of the SVG image file
// xhr.open('GET', './drop.svg');
// // set the responseType to document so that the response is parsed as an XML document
// xhr.responseType = 'document';
// // register a callback for when the request completes
//     // get the SVG element from the response
//     const svg = xhr.responseXML.documentElement;
//
//     // loop through each letter in the text
//     for (let i = 0; i < letters.length; i++) {
//         const letter = letters[i];
//
//         if (letter !== ' ' && i === 0)   {
//             // clone the SVG element
//             svg.setAttribute('width', '15px')
//             svg.setAttribute('height', '15px')
//             const clone = svg.cloneNode(true);
//             // set the fill color of the SVG element to red
//             clone.querySelector('path');
//             const span = document.createElement('span');
//             span.appendChild(clone);
//
//             // replace the letter with the new span element
//             text.innerHTML = text.innerHTML.replace(letter, span.outerHTML);
//         }
//     }
//
// xhr.send()
// });
//
//
//
// function randomInt(){
//     return Math.floor(Math.random() * 1146)
// }

// Array of letters to be replaced with SVG images
const lettersToReplace = ['o'];

// Function to replace letters with SVG images
function replaceLetters() {
    // Select all HTML elements that contain the text to be replaced
    const elements = document.querySelectorAll('#text');

    // Loop through each selected element
    elements.forEach(element => {
        // Get the text content of the element
        let content = element.innerHTML;

        // Replace selected letters with SVG image tags
        lettersToReplace.forEach(letter => {
            content = content.replace(new RegExp(letter, 'gi'), '<img src="./drop.svg" width="25px" height="auto" alt="SVG image" />');
        });

        // Update the innerHTML property of the element with the new content
        element.innerHTML = content;
    });
}

// Add event listener to the button
document.getElementById('replace-btn').addEventListener('click', replaceLetters);

function randomInt(){
    return Math.floor(Math.random() * 5)
}