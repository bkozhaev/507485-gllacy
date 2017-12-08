var connectBtn = document.querySelector(".location-button");
var popup = document.querySelector(".modal-wrapper");
var formPopup = popup.querySelector(".modal-feedback")
var closeBtn = popup.querySelector(".close-button");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email-2]")
var storage = localStorage.getItem("login");
var body = document.querySelector(".body");
var slideBtn_1 = body.querySelector(".slide-1");
var slideBtn_2 = body.querySelector(".slide-2");
var slideBtn_3 = body.querySelector(".slide-3");
var slide_1 = body.querySelector(".slide-block-1");
var slide_2 = body.querySelector(".slide-block-2");
var slide_3 = body.querySelector(".slide-block-3");

window.onload = function () {
    slideBtn_1.focus();
};

slideBtn_1.addEventListener("click", function(evt){
  evt.preventDefault();
  body.style.backgroundColor = "rgb(132, 157, 143)";
  slide_2.classList.remove("active");
  slide_3.classList.remove("active");
  slide_1.classList.add("active");
})

slideBtn_2.addEventListener("click", function(evt){
  evt.preventDefault();
  body.style.backgroundColor = "#8996a6";
  slide_1.classList.remove("active");
  slide_3.classList.remove("active");
  slide_2.classList.add("active");
})

slideBtn_3.addEventListener("click", function(evt){
  evt.preventDefault();
  body.style.backgroundColor = "#9d8b84";
  slide_2.classList.remove("active");
  slide_1.classList.remove("active");
  slide_3.classList.add("active");
})

connectBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
  login.focus();
  }
})

closeBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
})

form.addEventListener("submit", function(evt){
  if (!login.value || !email.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("login", login.value);
  }
})

window.addEventListener("keydown", function (evt){
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
})
