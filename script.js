"use strict";

const form = document.getElementById("form");
const span = document.getElementById("span");
const email = document.getElementById('email-one');
const secondEmail = document.getElementById('email-two');
const formTwo = document.querySelector('.form_two');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var emailOne = form["email-one"].value.trim();
  var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  if (pattern.test(emailOne)) {
    success("email-one");
    email.style.border = "1px solid green";
  } else {
    error("email-one", "Please check your email");
    email.style.border = "1px solid red";
  
  }

});

function error(req, msg) {
  const span = form[req].parentNode.querySelector("span");
  span.innerText = msg;
  span.style.opacity = 1;
}

function success(req, msg) {
  const span = form[req].parentNode.querySelector("span");
  span.innerText = msg;
  span.style.opacity = 0;
}

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  var emailTwo = formTwo["email-two"].value.trim();
  var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  if (pattern.test(emailTwo)) {
    successTwo("email-two");
    secondEmail.style.border = "2px solid green";
  } else {
    errorTwo("email-two", "Please check your email");
    secondEmail.style.border = "1px solid red";
  }
});

function errorTwo(req, msg) {
  const span = formTwo[req].parentNode.querySelector("span");
  span.innerText = msg;
  span.style.opacity = 1;
}

function successTwo(req, msg) {
  const span = formTwo[req].parentNode.querySelector("span");
  span.innerText = msg;
  span.style.opacity = 0;
}