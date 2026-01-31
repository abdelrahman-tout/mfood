const menuData = [
    {
        name: "Sweet Corn",
        price: "100.000 LBP",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300"
    },
    {
        name: "Berry Smoothie Bowl",
        price: "$9.50",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300"
    },
    {
        name: "Garden Fresh Salad",
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300"
    },
    {
        name: "Artisan Pancakes",
        price: "$11.00",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300"
    }
];

const menuGrid = document.getElementById('menu-grid');

// Function to generate the HTML for each card
function displayMenu() {
    menuGrid.innerHTML = menuData.map(item => `
        <div class="food-card">
            <img src="${item.image}" alt="${item.name}" class="food-img">
            <h3 class="food-name">${item.name}</h3>
            <p class="food-price">${item.price}</p>
        </div>
    `).join('');
}

// Run the function on load

displayMenu();

