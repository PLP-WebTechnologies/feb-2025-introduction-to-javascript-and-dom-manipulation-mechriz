// Ensure the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Dynamic Text Change
  const changeTextBtn = document.getElementById("changeTextBtn");
  changeTextBtn.addEventListener("click", function() {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.textContent = "The text has been changed dynamically!";
  });

  // CSS Style Modification
  const changeStyleBtn = document.getElementById("changeStyleBtn");
  changeStyleBtn.addEventListener("click", function() {
    const styleText = document.getElementById("style-text");
    // Toggle the text color between blue and red
    styleText.style.color = (styleText.style.color === "blue") ? "red" : "blue";
    styleText.style.fontWeight = "bold"; // Apply a bold style
  });

  // Element Manipulation: Add/Remove an Element
  const toggleElementBtn = document.getElementById("toggleElementBtn");
  toggleElementBtn.addEventListener("click", function() {
    const container = document.getElementById("container");
    // If the container is not empty, remove its child content
    if (container.children.length > 0) {
      container.innerHTML = "";
    } else {
      // Create a new paragraph element and add it to the container
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "This element has been added back!";
      container.appendChild(newParagraph);
    }
  });

});
