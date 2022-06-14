document.addEventListener("DOMContentLoaded", function(event) { 
  var theme = getCookie("theme");
  if (theme == "dark") {
    var element = document.getElementById("toggle-theme");
    document.body.classList.toggle("dark-theme");   
    document.body.classList.add("notransition");   
    document.getElementById("header").classList.add("notransition");  
    var navLinks = document.getElementsByClassName("nav-link");
    for(var i = 0; i < navLinks.length; i++)
    {
      navLinks[i].classList.add('notransition');
    }
   document.getElementById("ball").classList.add("notransition");
  document.getElementById("toggle-theme").checked = true;

  } else {
    document.getElementById("toggle-theme").checked = false;
  }
});

function toggleHamburgerMenu() {
  var element = document.getElementById("hamburger-menu");
  element.classList.toggle("is-active");
}

$(document).ready(function () {
  $("#MyModal").modal();
});

function toggleTheme() {
  var theme = getCookie("theme");
  document.body.classList.remove("notransition");
  document.getElementById("header").classList.remove("notransition");  
  document.getElementById("ball").classList.remove("notransition");

  var navLinks = document.getElementsByClassName("nav-link");
    for(var i = 0; i < navLinks.length; i++)
    {
      navLinks[i].classList.remove('notransition');
    }
//    document.getElementById("email").classList.remove("notransition");


  if (theme == "dark") {
    setCookie('theme','light',7);
    var elements = document.getElementById("toggle-theme");
    document.body.classList.toggle("dark-theme");   
  } else {
    setCookie('theme','dark',7);
    var element = document.getElementById("toggle-theme");
    document.body.classList.toggle("dark-theme");   
  }
  console.log("THEME: "+ theme);
}

/* Cookie Functions */
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
