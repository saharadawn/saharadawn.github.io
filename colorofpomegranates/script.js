const gridContainer = document.querySelector('.grid-container');
const gridItems = document.querySelectorAll('.grid-item');
const itemWidth = gridItems[0].offsetWidth + parseInt(window.getComputedStyle(gridItems[0]).marginLeft) + parseInt(window.getComputedStyle(gridItems[0]).marginRight);
let scrollPosition = 0;
let isHovering = false;

// Function to clone grid items and append them to the end of the container
function cloneGridItems() {
  const clonedItems = [];
  gridItems.forEach(item => {
    const clone = item.cloneNode(true);
    clonedItems.push(clone);
  });
  clonedItems.forEach(clone => gridContainer.appendChild(clone));
}

function scrollImages() {
  const speed = isHovering ? 0.2 : 1; // Adjust the speed based on hover state

  scrollPosition -= speed; // Adjust the speed by changing the value here
  gridContainer.style.transform = `translateX(${scrollPosition}px)`;

  // Reset the scroll position if it exceeds the width of the grid container
  if (Math.abs(scrollPosition) >= gridContainer.scrollWidth - gridContainer.offsetWidth) {
    scrollPosition = 0;
  }

  // Call the function recursively to create a continuous scrolling effect
  requestAnimationFrame(scrollImages);
}

// Set the width of grid container to fit all grid items
gridContainer.style.width = `${itemWidth * gridItems.length}px`;

// Clone grid items and append them to the end of the container
cloneGridItems();

// Call the function to start the scrolling animation
scrollImages();

// Event listener for mouseenter to slow down scroll on hover
gridContainer.addEventListener('mouseenter', () => {
  isHovering = true;
});

// Event listener for mouseleave to resume normal scroll speed
gridContainer.addEventListener('mouseleave', () => {
  isHovering = false;
});
