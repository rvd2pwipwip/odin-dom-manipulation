const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const redText = document.createElement('p');
redText.classList.add('red-text');
redText.setAttribute('style', 'color: red; background: white;');
redText.textContent = 'Hey I’m red!';
container.appendChild(redText);

// an <h3> with blue text that says “I’m a blue h3!”
const blueText = document.createElement('h3');
blueText.classList.add('blue-text');
blueText.setAttribute('style', 'color: blue');
blueText.textContent = 'I’m a blue h3!';
container.appendChild(blueText);

// a <div> with a black border and pink background color with the following elements inside of it:
//    another <h1> that says “I’m in a div”
//    a <p> that says “ME TOO!”
//    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border: 3px solid black;');

const divTitle = document.createElement('h1');
divTitle.textContent = 'I’m in a div';
div.appendChild(divTitle);

const divText = document.createElement('p');
divText.textContent = 'ME TOO!';
div.appendChild(divText);

container.appendChild(div);
