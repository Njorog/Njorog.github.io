/*dom manipulation

const myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world.";

/*declaring a variable
let myVariable = 'Bob';

if (myVariable === 'Bob') {
    alert("His name is Bob");
} else {
    alert('Who are you again?');
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return results;
}

multiply(2, 3);

document.querySelector('html').addEventListener('click', () => {
    alert('Hello there');
});

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc ==  'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png');
      } else {
        myImage.setAttribute('src','images/firefox-icon.png');
      }
  }

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector(h1);

  function setUserName(){
    let myName = prompt("Please Enter your name?");
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = "You wnt to be good, " + myName;
    }
    
  }

if (!localStorage.getItem('name')){
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "You wnt to be good, " + myName;
  }

  myButton.onclick = function(){
    setUserName();
  }*/

const select = document.querySelector('select');
const html = document.querySelector('html');
function update(bgColor){
    html.style.backgroundColor = bgColor;    
    }
select.addEventListener('change', () => (
    select.value === 'black') ? 
    update('black','white') : 
    update('white','black'));