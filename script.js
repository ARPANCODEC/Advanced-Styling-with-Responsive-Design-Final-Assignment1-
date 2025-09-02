// Back to top functionality
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Check if reduced motion is preferred
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (mediaQuery && mediaQuery.matches) {
    // Jump to top without smooth scrolling
    window.scrollTo(0, 0);
  } else {
    // Use smooth scrolling
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// Layout selector functionality (if you want to keep it)
const layoutSelector = document.createElement('div');
layoutSelector.innerHTML = `
  <div style="text-align: center; margin: 20px 0;">
    <label for="layoutSelect">View Mode: </label>
    <select id="layoutSelect">
      <option value="mobile">Mobile</option>
      <option value="tablet">Tablet</option>
      <option value="desktop">Desktop</option>
    </select>
  </div>
`;

// Insert the layout selector after the header
document.querySelector('header').after(layoutSelector);

const selector = document.getElementById("layoutSelect");
const body = document.body;

// Set initial view based on screen width
if (window.innerWidth >= 992) {
  selector.value = "desktop";
} else if (window.innerWidth >= 772) {
  selector.value = "tablet";
} else {
  selector.value = "mobile";
}

selector.addEventListener("change", () => {
  // Remove any existing layout classes
  body.classList.remove("mobile-view", "tablet-view", "desktop-view");
  
  // Add the selected layout class
  body.classList.add(selector.value + "-view");
});

// Update selector when window is resized
window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    selector.value = "desktop";
  } else if (window.innerWidth >= 772) {
    selector.value = "tablet";
  } else {
    selector.value = "mobile";
  }
});