function toggleHamburgerMenu() {
	var element = document.getElementById("hamburger-menu");
	element.classList.toggle("is-active");
  }

  $(document).ready(function() {
    $("#MyModal").modal();
  });	

  function toggleTheme() {
    var element = document.getElementById("toggle-theme");
    document.body.classList.toggle("dark-theme");
    }
  
  
