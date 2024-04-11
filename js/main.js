 
 // Footer
 var currentYear = new Date().getFullYear();
 document.getElementById('current-year').textContent += currentYear;


/* For navbar section */


function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var navbar = document.getElementById("navbar");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {

    navbar.classList.remove("navbar-scrolled");
  }
}



// Accordion
accordions.forEach(accordion => {
  accordion.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Close all other panels before opening this one
      closeOtherPanels(panel);
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

function closeOtherPanels(currentPanel) {
  const allPanels = document.querySelectorAll('.panel');
  allPanels.forEach(panel => {
    if (panel !== currentPanel) {
      panel.style.maxHeight = null;
      panel.previousElementSibling.classList.remove('active');
    }
  });
}