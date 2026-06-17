document.addEventListener("DOMContentLoaded", function() {
  const divs = document.querySelectorAll("div[id]"); // All divs with an ID (sections)
  const navLinks = document.querySelectorAll("#navbar a"); // Select navbar links directly

  window.addEventListener("scroll", function() {
    let currentDivId = "";

    // Loop through sections and find the one in view
    divs.forEach((div) => {
      const divTop = div.offsetTop - 50; // adjust for fixed navbar if needed
      const divHeight = div.offsetHeight;
      if (window.scrollY >= divTop && window.scrollY < divTop + divHeight) {
        currentDivId = div.getAttribute("id");
      }
    });

    // Update active class on navbar links
    navLinks.forEach((link) => {
      link.classList.remove("active"); // Remove active class from all links
      if (link.getAttribute("href") === "#" + currentDivId) {
        link.classList.add("active"); // Add active class to the corresponding link
      }
    });
  });
});

