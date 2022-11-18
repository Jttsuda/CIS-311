/* 
Student Name: Jared Suda
File Name: script.js
Date: 11/18/2022
*/

// Hamburger menu function
function hamburger() {
    const menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}