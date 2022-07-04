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

// add an event on a DOM object
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World');

// add an event listener to a node
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Hello World');
});

// use a named function with an event listener
const myAlert = (e) => {
  alert('Hello World');
  console.log(e.target);
  e.target.setAttribute('style', 'background: yellow; color: green;');
};

const btn4 = document.querySelector('#btn4');
btn4.setAttribute('style', 'color: green;');
btn4.addEventListener('click', myAlert);

// use a nodelist to add an event listener to all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', myAlert);
});
