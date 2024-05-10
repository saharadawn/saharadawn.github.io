function toggleSidePanel() {
    var sidePanel = document.getElementById("sidePanel");
    sidePanel.classList.toggle("open");
}
    
    // Define images for the image cycle
    const images = ['openpas.png', 'ams.png', '15.png', 'scan77.png']; // Replace with your image paths

    let currentIndex = 0;
    const projectImage = document.getElementById('projectImage');

    // Function to update the image
    function updateImage() {
        projectImage.src = images[currentIndex];
    }

    // Function to cycle through images
    function cycleImages() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    // Initial call to start the cycle
    updateImage();
    setInterval(cycleImages, 800); // Change the interval as needed (in milliseconds)

    // JavaScript to handle smooth scrolling to sections
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
     // Show scroll-to-top button when scrolling down
     window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
}

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



