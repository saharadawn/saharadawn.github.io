document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById('toggleButton');
  const mainImage = document.getElementById('mainImage');
  let imageIndex = 1;

  toggleButton.addEventListener('click', function() {
      imageIndex = imageIndex === 1 ? 2 : 1;
      mainImage.src = `leaf${imageIndex}.jpg`;
      mainImage.alt = `Leaf ${imageIndex}`;
  });
});
