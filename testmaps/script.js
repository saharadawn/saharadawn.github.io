let foodContainer = document.querySelector('.food-container');
let sortButton = document.querySelector('.srt-btn');

function renderItems(items) {
    items.forEach(item => {
        let foodItem = document.createElement('div');
        foodItem.innerText = item.type;
        foodItem.style.backgroundColor = item.color;
        foodItem.classList.add('food-item');
        foodContainer.append(foodItem);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then((items) => {
            renderItems(items);
            sortButton.addEventListener('click', () => {
                foodContainer.innerHTML=''

              
                let sortedItems = items.sort((a, b) => b.price - a.price); //price is coming from JSON
                // Clear the container before re-rendering
                foodContainer.innerHTML = '';
               
               
                renderItems(sortedItems); // Render sorted items
            });
        });
});
