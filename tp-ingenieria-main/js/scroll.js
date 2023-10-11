const navBar = document.getElementById("navbar-top");

if (window.scrollY > -50) {
    navBar.classList.add("active-background-navbar");
    alert("HOLAAA")
 }else{
    navBar.classList.remove("active-background-navbar");
 }