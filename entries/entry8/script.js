$(document).ready(function(){
    $(".animated-image").click(function(){
        // Apply random position on click
        var newX = Math.random() * 200 - 100; // Random X position between -100 and 100
        var newY = Math.random() * 200 - 100; // Random Y position between -100 and 100
        $(this).css({
            transform: 'translate(' + newX + 'px, ' + newY + 'px)',
        });
    });
});
