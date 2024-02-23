var btn = document.querySelector ('.toggle-container') //query asks if there is anything under the name toggle-container, make javascript find the button//

btn.addEventListener('click',(e) =>{ //when a click event happens, do this//
    console.log('e',e)
    btn.classList.toggle('is-active') //the toggling function is active//

}) //means the same as var btn = document.querySelector ('.toggle-container'), e means event// 

