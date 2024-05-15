document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  const images = [
      "photo1.jpg",
      "photo2.jpg",
      // Add more image URLs here
  ];

  let loadedImages = 0;

  window.addEventListener("scroll", function() {
      if (isInViewport(gallery) && loadedImages < images.length) {
          const img = new Image();
          img.src = images[loadedImages];
          img.onload = function() {
              gallery.appendChild(img);
              loadedImages++;
          };
      }
  });

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});
