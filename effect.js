
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});


const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav a")

menu.addEventListener("click",  () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("active");
  });
});


const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});


scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}