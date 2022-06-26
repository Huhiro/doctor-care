window.onscroll = function() {myFunction()};

const navbar = document.getElementById("navbar");
const doctor = document.getElementById("doctor");
const care = document.getElementById("care");
const menuOne = document.getElementById("menu-one")
const menuTwo = document.getElementById("menu-two")
const menuThree = document.getElementById("menu-three")
const menuFour = document.getElementById("menu-four")
const primaryButton = document.getElementById("primary-button")

const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("navigation-fixed");
    doctor.classList.add("doctor-fixed");
    care.classList.add("care-fixed");
    menuOne.classList.add("menu-fixed");
    menuTwo.classList.add("menu-fixed");
    menuThree.classList.add("menu-fixed");
    menuFour.classList.add("menu-fixed");
    primaryButton.classList.add("button-fixed")
    
    }
    else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("navigation-fixed")
      doctor.classList.remove("doctor-fixed");
      care.classList.remove("care-fixed");
      menuOne.classList.remove("menu-fixed");
      menuTwo.classList.remove("menu-fixed");
      menuThree.classList.remove("menu-fixed");
      menuFour.classList.remove("menu-fixed");
      primaryButton.classList.remove("button-fixed")
    }
}

// const none = document.getElementById("none");

// function teste() {
//     none.classList.add("color");
// }