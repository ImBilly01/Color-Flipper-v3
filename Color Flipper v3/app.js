const colors = ["green", "red", "blue", "orange", "#2c2c2c"];
const textColor = ["white", "black", "yellow", "lightgray", "purple"];
const btn = document.getElementById('btn');
const textBtn = document.getElementById('txtbtn');
const both = document.getElementById('both');
const color = document.querySelector(".color");
const text = document.querySelector('.text');

btn.addEventListener('click', function() {
    // Get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

textBtn.addEventListener('click', function() {
    // Get random number between 0 - 4
    const randomTextNumber = getRandomTextNumber();
    console.log(randomTextNumber);
    document.body.style.color = textColor[randomTextNumber];
    text.textContent = textColor[randomTextNumber];
});


function getRandomTextNumber() {
    return Math.floor(Math.random() * textColor.length);
};

both.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

both.addEventListener('click', function() {
    const randomTextNumber = getRandomTextNumber();
    console.log(randomTextNumber);
    document.body.style.color = textColor[randomTextNumber];
    text.textContent = textColor[randomTextNumber];
});


// hamburger button
const hamburgerButton = document.querySelector('#check');
const html = document.querySelector('html');
hamburgerButton.addEventListener('click', open);

window.onLoad = open();

function open() {
    if (hamburgerButton.matches('#check:checked')) {
        html.classList.add('no-scroll');
    } else {
        html.classList.remove('no-scroll');
    }

}