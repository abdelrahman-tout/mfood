const menuData = [
    {
        name: "Sweet Corn",
        price: "100.000 LBP",
        image: "Sweet.png"
    },
    {
        name: "Spicy Corn",
        price: "150.000 LBP",
        image: "Spicy.png"
    },
    {
        name: "BBQ Corn",
        price: "150.000 LBP",
        image: "BBQ.png"
    },
    {
        name: "Artisan Pancakes",
        price: "$11.00",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300"
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




