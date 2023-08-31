document.body.classList.toggle('dark');
let h1Element = document.getElementById('intro-text');
// console.log(h1Element.childNodes[0]);
// console.log(h1Element.firstChild.nodeValue);
// h1Element.style.color = "#7286D3";

/* 
HTML Collection

document.getElementsByTagName('p');
document.getElementsByClassName('class-name')

let pElements = document.getElementsByTagName('p');
for(let element of pElements){
    element.style.color = '#444';
}

*/

let topics = [
    'Intro to DOM',
    'Getting Elements',
    'Quering the DOM',
    'Creating Elements',
    'Removing Elements',
    'Modifying Element Classes',
    'Working with Attribute',
    'DOM Event Basics',
    'Common DOM Events'
]

let currentTopicsIndex = 6;

let pElements = document.querySelector('p');
let scriptElement = document.querySelector("script");
let olElement = document.querySelector("ol");
let listTheme = olElement.getAttribute('data-theme');

document.body.insertBefore(olElement, scriptElement);

topics.forEach((text, index) => {
    let li = document.createElement('li');
    li.innerHTML = text;
    if(listTheme.toLowerCase() === 'multi'){
        if(index < currentTopicsIndex) li.classList.add('text-info');
        else if(index > currentTopicsIndex) li.classList.add('text-danger');
        else li.classList.add("text-warning", "current-topic");
    }
    
    olElement.appendChild(li);
});


pElements.insertAdjacentElement('afterend', olElement);
