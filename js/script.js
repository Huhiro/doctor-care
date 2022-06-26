window.onscroll = function() {myFunction()};

const toggle = document.getElementById("toggle")
const navbar = document.getElementById("navbar")
const doctor = document.getElementById("doctor")
const care = document.getElementById("care")
const menuOne = document.getElementById("menu-one")
const menuTwo = document.getElementById("menu-two")
const menuThree = document.getElementById("menu-three")
const menuFour = document.getElementById("menu-four")
const primaryButton = document.getElementById("primary-button")


const sticky = navbar.offsetTop;

function toggleNav() {
  const x = document.getElementById("open-toggle");
  const y = document.getElementById("logo")

  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none"
    // x.style.marginLeft = "40px";
    // y.style.flexDirection = "column";
    // y.style.display = "flex";
    // y.style.lineHeight = "20px";
    // y.style.textAlign = "center";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function myFunction() {
  if (window.pageYOffset > sticky) {
    toggle.classList.add("icon-fixed")
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
     
      toggle.classList.remove("icon-fixed")
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