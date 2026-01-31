const menuData = [
    {
        name: "Sweet Corn",
        desc: "ذرة + بهارات",
        price: "100.000 LBP",
        image: "Sweet.png"
    },
    {
        name: "Spicy Corn",
        desc: "ذرة + بهارات + جبنة + زبدة + شطة حرة",
        price: "150.000 LBP",
        image: "Spicy.png"
    },
    {
        name: "BBQ Corn",
        desc: "ذرة + جبنة + زبدة + باربكيو",
        price: "150.000 LBP",
        image: "BBQ.png"
    },
    {
        name: "Extra Sitos",
        price: "20.000 LBP",
        image: "Nachos.png"
    },
    {
        name: "Extra Mortadella",
        price: "50.000 LBP",
        image: "Mortadella.png"
    }
];

const menuGrid = document.getElementById('menu-grid');

// Function to generate the HTML for each card
function displayMenu() {
    menuGrid.innerHTML = menuData.map(item => `
        <div class="food-card">
            <img src="${item.image}" alt="${item.name}" class="food-img">
            <h3 class="food-name">${item.name}</h3>
            <h5 class="food-desc">${item.desc}</h3>
            <p class="food-price">${item.price}</p>
        </div>
    `).join('');
}

// Run the function on load

displayMenu();






