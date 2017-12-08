var connectBtn = document.querySelector(".location-button");
var popup = document.querySelector(".modal-wrapper");
var closeBtn = popup.querySelector(".close-button")

connectBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
})

closeBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
})
