let container = document.querySelector('.squirrel')

document.addEventListener("DOMContentLoaded", function (){
    fetch('data.json')
    .then(response => response.json())
    .then((blocks) => {
       blocks.forEach((block, index)=>{
        let element = document.createElement('div');
        element.innerText=block.name;
        element.classList.add(`block`);
        element.style.backgroundColor = block.color;
        

        container.append(element)

       container.addEventListener('click', () => {
        
       })


       });
    });
})

document.addEventListener('scroll', (event) => {
    let container = document.querySelector('.tree')
    let containerHeight=container.offsetHeight - document.documentElement.clientHeight

    let scrollPercent = window.scrollY / containerHeight * 100

    let leftColumn = document.querySelector('.street')
    let rightColumn = document.querySelector('.car')

    console.log('scrollPercent', scrollPercent);

    leftColumn.style.transform = `translateY(-${scrollPercent}%)`
    rightColumn.style.transform = `translateY(-${scrollPercent}%)`
});