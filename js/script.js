var card = document.getElementById("card");

function openRegister(){
    card.style.transform = "rotateY(-180deg)";
}

function openLogin(){
    card.style.transform = "rotateY(0)";
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');