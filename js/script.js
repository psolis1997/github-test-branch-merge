// console.log("Gidday legends");

// declare a variable called hamburger
// make it equal to the hamburger-icon element
let hamburger = document.getElementById("hamburger-icon");

// add a click for our hamburger
// if it's clicked, run the toggleNavMenu function
hamburger.addEventListener("click", toggleNavMenu);

// declare a function which toggles the nav menu
function toggleNavMenu() {
    let navList = document.getElementById("nav-list");
    navList.classList.toggle("visible");
}