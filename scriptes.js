function buynow() {
  document.getElementById("work__section").style.display = "none";
  document.getElementById("buynow").style.display = "block";
}

function refresh() {
  window.location.reload();
}


function handleScroll() {
  var scrollPosition = window.scrollY;

  var sections = document.querySelectorAll("section");
  var sectionIds = Array.from(sections).map(function(section) {
      return section.id;
  });
  var links = document.querySelectorAll(".navbar a");

  var currentSectionIndex = sectionIds.findIndex(function(sectionId) {
      var section = document.getElementById(sectionId);
      return section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
  });

  if (currentSectionIndex !== -1) {
      var currentSectionId = sectionIds[currentSectionIndex];
      var currentLink = document.querySelector('.navbar a[href="#' + currentSectionId + '"]');

      links.forEach(function(link) {
          link.classList.remove("active");
      });

      if (currentLink) {
          currentLink.classList.add("active");
          document.title = "Serg's Website | ES | " + currentLink.textContent;
      }
  }
}

window.addEventListener("scroll", handleScroll);

function handleLinkClick(linkId, title) {
  var link = document.getElementById(linkId);

  var navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(function(link) {
      link.classList.remove("active");
  });

  link.classList.add("active");

  document.title = title;

  if (linkId !== "homeButton") {
      var targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

document.getElementById("homeButton").addEventListener("click", function(event) {
  event.preventDefault(); 
  handleLinkClick("homeButton", "Serg's Website | ES | Inicio");
});

document.getElementById("aboutButton").addEventListener("click", function(event) {
  event.preventDefault();
  handleLinkClick("aboutButton", "Serg's Website | ES | Acerca de");
});

document.getElementById("servicesButton").addEventListener("click", function(event) {
  event.preventDefault();
  handleLinkClick("servicesButton", "Serg's Website | ES | Servicios");
});

document.getElementById("contactButton").addEventListener("click", function(event) {
  event.preventDefault();
  var targetId = this.getAttribute("href").substring(1);
  var targetSection = document.getElementById(targetId);

  // Scroll to the target section with smooth scrolling
  targetSection.scrollIntoView({ behavior: "smooth" });

  // Delay updating the active state and title until scrolling animation completes
  setTimeout(function() {
      handleLinkClick("contactButton", "Serg's Website | ES | Contacto");
  }, 750); // Adjust the delay time as needed
});



/////////////////////////////////////////////
/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  var languageOptions = document.querySelectorAll(".firstlang");

  languageOptions.forEach(function(option) {
    option.addEventListener("click", function() {
      // Remove 'active' class from all language options
      languageOptions.forEach(function(opt) {
        opt.classList.remove("active");
      });

      // Add 'active' class to the clicked language option
      option.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var languageOptions = document.querySelectorAll(".firstlang");
  var languageSubmit = document.getElementById("languageSubmit");
  var languageOverlay = document.getElementById("languageOverlay");
  var closeOverlay = document.getElementById("closeOverlay");

  languageOptions.forEach(function(option) {
    option.addEventListener("click", function() {
      // Remove 'active' class from all language options
      languageOptions.forEach(function(opt) {
        opt.classList.remove("active");
      });
        option.classList.add("active");        
    });
  });

  languageSubmit.addEventListener("click", function() {
    // Get the active language option
    var activeOption = document.querySelector(".firstlang.active");

    // Check if the active language is English
    if (activeOption.dataset.lang === "english") {
      // Hide the language overlay
      languageOverlay.style.display = "none";
    } else {
      // Get the href attribute value of the active option
      var href = activeOption.getAttribute("data-href");

      // Navigate to the URL
      window.location.href = href;
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Show language selector overlay on page load
  var languageOverlay = document.getElementById("languageOverlay");
  languageOverlay.style.display = "flex";

  // Language selector submit button functionality
  var languageSubmit = document.getElementById("languageSubmit");
  languageSubmit.addEventListener("click", function() {
    var selectedLanguage = document.getElementById("language").value;
    // You can add logic here to handle language selection, such as redirecting to a different URL based on the selected language
    console.log("Selected language:", selectedLanguage);
    // For now, let's just hide the language selector overlay
    languageOverlay.style.display = "none";
  });

  closeOverlay.addEventListener("click", function() {
      languageOverlay.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var languageSelector = document.getElementById("language");

  languageSelector.addEventListener("change", function() {
    var selectedOption = languageSelector.options[languageSelector.selectedIndex];
    var href = selectedOption.getAttribute("data-href");
    if (href && href !== "default") {
      window.location.href = href;
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("cookieConsent").style.display = "block";
      
      acceptCookies.addEventListener("click", function() {
        document.getElementById("cookieConsent").style.display = "none";
    
    });
  });


document.addEventListener("DOMContentLoaded", function() {
var buyNowButton = document.getElementById("buyNowButton");

buyNowButton.addEventListener("click", function() {
    // Change active class
    var navLinks = document.querySelectorAll('.navbar a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    buyNowButton.classList.add("active");

    document.getElementById("contact").style.display = "none";
    document.getElementById("normal-logic").style.display = "none";
    document.getElementById("buynow-logic").style.display = "block";

    document.title = "Serg's Website | ES | Comprar Ahora";

});
});


document.addEventListener("DOMContentLoaded", function() {
var normalLogic = document.getElementById("normal-logic");
var buyNowLogic = document.getElementById("buynow-logic");
var navLinks = document.querySelectorAll('.navbar a');
var buyNowButton = document.getElementById("buyNowButton");
var Contact = document.getElementById("contact");

navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        // Remove active class from all links and "Buy Now" button
        navLinks.forEach(function(link) {
            link.classList.remove("active");
        });
        buyNowButton.classList.remove("active");

        // Add active class to the clicked link
        this.classList.add("active");

    });
});

buyNowButton.addEventListener("click", function() {
    // Remove active class from all links and "Buy Now" button
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });
    buyNowButton.classList.add("active");

});
});

document.addEventListener('DOMContentLoaded', function () {
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.getElementById('navbar');

        menuBtn.addEventListener('click', function () {
            // Toggle the 'show' class on the navbar
            navbar.classList.toggle('show');
        });

        // Close the navbar if clicking outside
        document.addEventListener('click', function (event) {
            if (!menuBtn.contains(event.target) && !navbar.contains(event.target)) {
                navbar.classList.remove('show');
            }
        });
    });
