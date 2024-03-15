let up = document.querySelector(".up");
window.onscroll = function(){
this.scrollY >=200 ? up.classList.add("show") : up.classList.remove("show");
}

up.onclick = function() {
window.scrollTo({
    top: 0,
    behavior: "smooth",
})
}