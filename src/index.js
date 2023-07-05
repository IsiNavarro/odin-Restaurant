import home from './home.js';
import contactUs from './contactUs.js';
import menu from './menu.js';
import './style.css';

function clearElementContent(element) {
    element.innerHTML = '';
}

const body = document.querySelector('body');

const content = document.createElement('div');
content.id = 'content';


const header = document.createElement('header');
const h1Aref = document.createElement('a');
const h1 = document.createElement('h1');
h1.textContent = 'Highline Haven';

h1Aref.appendChild(h1);
header.appendChild(h1Aref);

content.appendChild(header);

const nav = document.createElement('nav');
const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.onclick = () => {
    main.innerHTML ='';
    main.appendChild(home());
}
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.onclick = () => {
    main.innerHTML ='';
    main.appendChild(menu());
}
const contactUsBtn = document.createElement('button');
contactUsBtn.textContent = 'Contact us';
contactUsBtn.onclick = () => {
    main.innerHTML ='';
    main.appendChild(contactUs());
}

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactUsBtn);

content.appendChild(nav);


//This is where we will be appending different elements from the js files.
const main = document.createElement('main');
main.appendChild(home());

content.appendChild(main);

const footer = document.createElement('footer');
const p = document.createElement('p');
const date = new Date().getFullYear();
const isiNavarroA = document.createElement('a');
isiNavarroA.id = 'isiNavarro';
isiNavarroA.target = "_blank";
isiNavarroA.textContent = 'isiNavarro';
isiNavarroA.href = "https://github.com/isiNavarro";

p.textContent = `Copyright © ${date} `;
p.appendChild(isiNavarroA);
footer.appendChild(p);

content.appendChild(footer);

body.appendChild(content);


