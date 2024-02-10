function navFunction() {
  var x = document.getElementById("siteTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// when the page loads first time, set scroll position
window.onload = function () {
  // Get the button
  let mybutton = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  document.getElementById("cookieNotice").style.display = "block";
};


// Set cookie consent
function acceptCookieConsent() {
  if (document.getElementById("cookieNotice"))
    document.getElementById("cookieNotice").style.display = "none";
}


