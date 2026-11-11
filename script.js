// Complete Supermarket Dataset from Listahan.txt for Dennis' Basket
let catalogItems = JSON.parse(localStorage.getItem('denis_catalog')) || [
    // 1. Cigarettes
    { id: 1, name: "Marlboro Red", category: "Cigarettes", price: 176.00, unit: "pack", stock: 50 },
    { id: 2, name: "Marlboro Red (Rim)", category: "Cigarettes", price: 1760.00, unit: "rim (10 packs)", stock: 10 },
    { id: 3, name: "Marlboro Green", category: "Cigarettes", price: 176.00, unit: "pack", stock: 45 },
    { id: 4, name: "Marlboro Green (Rim)", category: "Cigarettes", price: 1760.00, unit: "rim (10 packs)", stock: 8 },
    { id: 5, name: "Marlboro Blue Lights", category: "Cigarettes", price: 176.00, unit: "pack", stock: 40 },
    { id: 6, name: "Marlboro Blue Lights (Rim)", category: "Cigarettes", price: 1760.00, unit: "rim (10 packs)", stock: 6 },
    { id: 7, name: "Fortune Green", category: "Cigarettes", price: 164.00, unit: "pack", stock: 30 },
    { id: 8, name: "Fortune Green (Rim)", category: "Cigarettes", price: 1640.00, unit: "rim (10 packs)", stock: 5 },
    { id: 9, name: "Fortune Lights", category: "Cigarettes", price: 164.00, unit: "pack", stock: 35 },
    { id: 10, name: "Fortune Lights (Rim)", category: "Cigarettes", price: 1640.00, unit: "rim (10 packs)", stock: 5 },
    { id: 11, name: "Winston Red", category: "Cigarettes", price: 182.00, unit: "pack", stock: 25 },
    { id: 12, name: "Winston Red (Rim)", category: "Cigarettes", price: 1820.00, unit: "rim (10 packs)", stock: 4 },
    { id: 13, name: "Winston Lights", category: "Cigarettes", price: 182.00, unit: "pack", stock: 25 },
    { id: 14, name: "Winston Lights (Rim)", category: "Cigarettes", price: 1820.00, unit: "rim (10 packs)", stock: 4 },

    // 2. Plasticware & Food Containers
    { id: 15, name: "Tupperware Small (500 ml)", category: "Plasticware & Food Containers", price: 45.00, unit: "pc (10 min/bundle)", stock: 100 },
    { id: 16, name: "Tupperware Medium (750 ml)", category: "Plasticware & Food Containers", price: 50.00, unit: "pc (10 min/bundle)", stock: 100 },
    { id: 17, name: "Tupperware Large (1000 ml)", category: "Plasticware & Food Containers", price: 65.00, unit: "pc (10 min/bundle)", stock: 80 },
    { id: 18, name: "Plastic Labo (Roll)", category: "Plasticware & Food Containers", price: 24.00, unit: "roll", stock: 50 },
    { id: 19, name: "Plastic Labo Normal Size (8x11)", category: "Plasticware & Food Containers", price: 12.00, unit: "pc", stock: 150 },
    { id: 20, name: "Plastic Bags Small", category: "Plasticware & Food Containers", price: 110.00, unit: "1000 pcs", stock: 20 },
    { id: 21, name: "Plastic Bags Medium (Rooster Brand)", category: "Plasticware & Food Containers", price: 210.00, unit: "1000 pcs", stock: 15 },
    { id: 22, name: "Plastic Bags Large", category: "Plasticware & Food Containers", price: 360.00, unit: "1000 pcs", stock: 12 },

    // 3. Canned Goods
    { id: 23, name: "San Marino Tuna Flat (180g)", category: "Canned Goods", price: 49.00, unit: "can", stock: 60 },
    { id: 24, name: "San Marino Tuna Flat (85g)", category: "Canned Goods", price: 31.00, unit: "can", stock: 50 },
    { id: 25, name: "San Marino Tuna Slices Size (150g)", category: "Canned Goods", price: 39.00, unit: "can", stock: 40 },
    { id: 26, name: "Century Tuna Small (150g)", category: "Canned Goods", price: 39.00, unit: "can", stock: 70 },
    { id: 27, name: "Century Tuna Big / Flat (180g)", category: "Canned Goods", price: 46.00, unit: "can", stock: 65 },
    { id: 28, name: "Saba Canned Squid (Big)", category: "Canned Goods", price: 120.00, unit: "can", stock: 25 },
    { id: 29, name: "Today's Fruit Cocktail (Gallon)", category: "Canned Goods", price: 315.00, unit: "pack", stock: 15 },

    // 4. Condiments & Cooking Ingredients
    { id: 30, name: "Datu Puti Soy Sauce Budget Pack", category: "Condiments & Cooking Ingredients", price: 11.50, unit: "pack", stock: 100 },
    { id: 31, name: "Datu Puti Soy Sauce Bote", category: "Condiments & Cooking Ingredients", price: 21.00, unit: "bottle", stock: 80 },
    { id: 32, name: "Datu Puti Soy Sauce 1L", category: "Condiments & Cooking Ingredients", price: 55.00, unit: "bottle", stock: 45 },
    { id: 33, name: "Datu Puti Soy Sauce Gallon", category: "Condiments & Cooking Ingredients", price: 205.00, unit: "gallon", stock: 10 },
    { id: 34, name: "Datu Puti Vinegar Budget Pack", category: "Condiments & Cooking Ingredients", price: 9.00, unit: "pack", stock: 100 },
    { id: 35, name: "Datu Puti Vinegar Bote", category: "Condiments & Cooking Ingredients", price: 19.00, unit: "bottle", stock: 80 },
    { id: 36, name: "Datu Puti Vinegar 1L", category: "Condiments & Cooking Ingredients", price: 45.00, unit: "bottle", stock: 50 },
    { id: 37, name: "Datu Puti Vinegar Gallon", category: "Condiments & Cooking Ingredients", price: 170.00, unit: "gallon", stock: 12 },
    { id: 38, name: "Silver Swan Soy Sauce Budget Pack", category: "Condiments & Cooking Ingredients", price: 11.50, unit: "pack", stock: 90 },
    { id: 39, name: "Silver Swan Soy Sauce Bote", category: "Condiments & Cooking Ingredients", price: 21.00, unit: "bottle", stock: 70 },
    { id: 40, name: "Silver Swan Soy Sauce 1L", category: "Condiments & Cooking Ingredients", price: 55.00, unit: "bottle", stock: 40 },
    { id: 41, name: "Silver Swan Soy Sauce Gallon", category: "Condiments & Cooking Ingredients", price: 205.00, unit: "gallon", stock: 8 },
    { id: 42, name: "Silver Swan Vinegar Budget Pack", category: "Condiments & Cooking Ingredients", price: 9.00, unit: "pack", stock: 90 },
    { id: 43, name: "Silver Swan Vinegar Bote", category: "Condiments & Cooking Ingredients", price: 19.00, unit: "bottle", stock: 70 },
    { id: 44, name: "Silver Swan Vinegar 1L", category: "Condiments & Cooking Ingredients", price: 45.00, unit: "bottle", stock: 40 },
    { id: 45, name: "Silver Swan Vinegar Gallon", category: "Condiments & Cooking Ingredients", price: 170.00, unit: "gallon", stock: 8 },
    { id: 47, name: "Pepper (Paminta)", category: "Condiments & Cooking Ingredients", price: 540.00, unit: "kilo", stock: 15 },
    { id: 48, name: "Laurel Leaves", category: "Condiments & Cooking Ingredients", price: 320.00, unit: "kilo", stock: 10 },
    { id: 49, name: "Salt", category: "Condiments & Cooking Ingredients", price: 15.00, unit: "kilo", stock: 100 },
    { id: 50, name: "Sugar White", category: "Condiments & Cooking Ingredients", price: 54.00, unit: "kilo", stock: 80 },
    { id: 51, name: "Sugar Brown", category: "Condiments & Cooking Ingredients", price: 65.00, unit: "kilo", stock: 70 },
    { id: 52, name: "Sugar Washed", category: "Condiments & Cooking Ingredients", price: 108.00, unit: "kilo", stock: 50 },
    { id: 53, name: "Flour", category: "Condiments & Cooking Ingredients", price: 36.00, unit: "kilo", stock: 60 },
    { id: 54, name: "Baking Soda", category: "Condiments & Cooking Ingredients", price: 37.00, unit: "pc", stock: 40 },
    { id: 55, name: "Cornstarch", category: "Condiments & Cooking Ingredients", price: 35.00, unit: "kilo", stock: 50 },

    // 5. Cooking Oil
    { id: 56, name: "Local Cooking Oil", category: "Cooking Oil", price: 90.00, unit: "liter", stock: 50 },
    { id: 57, name: "Olive Oil", category: "Cooking Oil", price: 288.00, unit: "1/4 Liter", stock: 40 },
    { id: 58, name: "Golden Fiesta Cooking Oil", category: "Cooking Oil", price: 130.00, unit: "pc", stock: 35 },

    // 6. Instant Noodles & Pasta
    { id: 59, name: "Pancit Canton", category: "Instant Noodles & Pasta", price: 15.00, unit: "pc", stock: 120 },
    { id: 60, name: "Extra Big Pancit Canton", category: "Instant Noodles & Pasta", price: 19.00, unit: "pc", stock: 80 },
    { id: 61, name: "Nissin Ramen", category: "Instant Noodles & Pasta", price: 15.00, unit: "pc", stock: 90 },
    { id: 62, name: "Lucky Me Chicken na Chicken", category: "Instant Noodles & Pasta", price: 9.00, unit: "pc", stock: 150 },
    { id: 63, name: "Lucky Me Beef na Beef", category: "Instant Noodles & Pasta", price: 9.00, unit: "pc", stock: 150 },

    // 7. Coffee, Chocolate & Energy Drinks
    { id: 64, name: "Milo (12 pcs)", category: "Coffee, Chocolate & Energy Drinks", price: 118.00, unit: "pack (12 pcs)", stock: 40 },
    { id: 65, name: "Energen (10 pcs)", category: "Coffee, Chocolate & Energy Drinks", price: 85.00, unit: "pack (10 pcs)", stock: 35 },
    { id: 66, name: "Kopiko (10 pcs)", category: "Coffee, Chocolate & Energy Drinks", price: 125.00, unit: "pack (10 pcs)", stock: 50 },
    { id: 67, name: "Great Taste White (10 pcs)", category: "Coffee, Chocolate & Energy Drinks", price: 125.00, unit: "pack (10 pcs)", stock: 50 },

    // 8. Milk & Dairy Products
    { id: 68, name: "Alaska Evaporated Milk", category: "Milk & Dairy Products", price: 56.00, unit: "can", stock: 45 },
    { id: 69, name: "Alaska Condensed Milk", category: "Milk & Dairy Products", price: 65.00, unit: "can", stock: 40 },
    { id: 70, name: "Cowbell Evaporated Milk Regular", category: "Milk & Dairy Products", price: 35.00, unit: "can", stock: 50 },
    { id: 71, name: "Cowbell Evaporated Milk Chocolate", category: "Milk & Dairy Products", price: 63.00, unit: "can", stock: 30 },
    { id: 72, name: "Cowbell Evaporated Milk Ube", category: "Milk & Dairy Products", price: 60.00, unit: "can", stock: 30 },
    { id: 73, name: "Cowbell Condensed Milk Regular", category: "Milk & Dairy Products", price: 70.00, unit: "can", stock: 35 },
    { id: 74, name: "Cowbell Condensed Milk Chocolate", category: "Milk & Dairy Products", price: 63.00, unit: "can", stock: 25 },
    { id: 75, name: "Cowbell Condensed Milk Ube", category: "Milk & Dairy Products", price: 60.00, unit: "can", stock: 25 },

    // 9. Juice & Beverages
    { id: 76, name: "Del Monte Pineapple Juice", category: "Juice & Beverages", price: 32.00, unit: "can", stock: 60 },

    // 10. Baking & Dessert Ingredients
    { id: 77, name: "Food Coloring", category: "Baking & Dessert Ingredients", price: 6.00, unit: "pc", stock: 100 },
    { id: 78, name: "Gelatin Powder / Mix", category: "Baking & Dessert Ingredients", price: 15.00, unit: "pack", stock: 80 },
    { id: 79, name: "Graham Crackers", category: "Baking & Dessert Ingredients", price: 50.00, unit: "pack", stock: 45 },

    // 11. Toiletries & Personal Care
    { id: 80, name: "Colgate Big (2 pcs box)", category: "Toiletries & Personal Care", price: 180.00, unit: "box", stock: 30 },
    { id: 81, name: "Colgate Pack (Dozen)", category: "Toiletries & Personal Care", price: 98.00, unit: "dozen", stock: 20 },
    { id: 82, name: "Colgate Twin Pack", category: "Toiletries & Personal Care", price: 64.50, unit: "pack", stock: 25 },
    { id: 83, name: "Happy Toothpaste Pack", category: "Toiletries & Personal Care", price: 12.00, unit: "pc", stock: 50 },
    { id: 84, name: "Happy Toothpaste Twin Pack", category: "Toiletries & Personal Care", price: 64.50, unit: "pack", stock: 30 },
    { id: 85, name: "Close-Up Big (2 pcs box)", category: "Toiletries & Personal Care", price: 175.00, unit: "box", stock: 25 },
    { id: 86, name: "Close-Up Pack (Dozen)", category: "Toiletries & Personal Care", price: 98.00, unit: "dozen", stock: 20 },
    { id: 87, name: "Close-Up Twin Pack", category: "Toiletries & Personal Care", price: 64.50, unit: "pack", stock: 25 },
    { id: 88, name: "Oral-B Toothbrush", category: "Toiletries & Personal Care", price: 25.00, unit: "pc", stock: 60 },
    { id: 89, name: "Palmolive Shampoo (Dozen)", category: "Toiletries & Personal Care", price: 70.00, unit: "dozen", stock: 40 },
    { id: 90, name: "Pantene Shampoo (Dozen)", category: "Toiletries & Personal Care", price: 80.00, unit: "dozen", stock: 35 },
    { id: 91, name: "Clear Shampoo (Dozen)", category: "Toiletries & Personal Care", price: 78.00, unit: "dozen", stock: 35 },
    { id: 92, name: "Silka Soap Large", category: "Toiletries & Personal Care", price: 55.00, unit: "bar", stock: 40 },
    { id: 93, name: "Kojic Soap Large", category: "Toiletries & Personal Care", price: 105.00, unit: "bar", stock: 30 },
    { id: 94, name: "Safeguard Small", category: "Toiletries & Personal Care", price: 44.00, unit: "bar", stock: 50 },
    { id: 95, name: "Safeguard Large", category: "Toiletries & Personal Care", price: 55.00, unit: "bar", stock: 50 },
    { id: 96, name: "Dove Large", category: "Toiletries & Personal Care", price: 115.00, unit: "bar", stock: 35 },

    // 12. Laundry & Household Cleaning Supplies
    { id: 97, name: "Tide Powder (Dozen)", category: "Laundry & Household Cleaning Supplies", price: 88.00, unit: "dozen", stock: 30 },
    { id: 98, name: "Champion Powder (Dozen)", category: "Laundry & Household Cleaning Supplies", price: 64.00, unit: "dozen", stock: 40 },
    { id: 99, name: "Surf Powder (Dozen)", category: "Laundry & Household Cleaning Supplies", price: 84.00, unit: "dozen", stock: 45 },
    { id: 100, name: "Breeze Powder (Dozen)", category: "Laundry & Household Cleaning Supplies", price: 160.00, unit: "dozen", stock: 25 },
    { id: 101, name: "Ariel Powder (Dozen)", category: "Laundry & Household Cleaning Supplies", price: 180.00, unit: "dozen", stock: 25 },
    { id: 102, name: "Champion Soap Bar", category: "Laundry & Household Cleaning Supplies", price: 25.00, unit: "bar", stock: 60 },

    // 13. Household Essentials
    { id: 103, name: "Charcoal (Uling) Bundle (20 pcs)", category: "Household Essentials", price: 150.00, unit: "bundle", stock: 20 },
    { id: 104, name: "Bilao Size 12", category: "Household Essentials", price: 15.00, unit: "pc", stock: 30 },
    { id: 105, name: "Bilao Size 14", category: "Household Essentials", price: 20.00, unit: "pc", stock: 30 },
    { id: 106, name: "Bilao Size 16", category: "Household Essentials", price: 25.00, unit: "pc", stock: 25 },
    { id: 107, name: "Bilao Size 18", category: "Household Essentials", price: 38.00, unit: "pc", stock: 20 },

    // 14. Alcoholic Beverages
    { id: 108, name: "Ginebra (Each)", category: "Alcoholic Beverages", price: 75.00, unit: "bottle", stock: 48 },
    { id: 109, name: "Ginebra (Box)", category: "Alcoholic Beverages", price: 1800.00, unit: "box", stock: 10 },
    { id: 110, name: "Emperador Double Light (Each)", category: "Alcoholic Beverages", price: 173.00, unit: "bottle", stock: 36 },
    { id: 111, name: "Emperador Double Light (Box)", category: "Alcoholic Beverages", price: 2050.00, unit: "box", stock: 8 },
    { id: 112, name: "Alfonso Light (Each)", category: "Alcoholic Beverages", price: 265.00, unit: "bottle", stock: 36 },
    { id: 113, name: "Alfonso Light (Box)", category: "Alcoholic Beverages", price: 3160.00, unit: "box", stock: 6 },
    { id: 114, name: "Fundador Special", category: "Alcoholic Beverages", price: 260.00, unit: "bottle", stock: 24 }
];

let customerMessages = JSON.parse(localStorage.getItem('denis_messages')) || [];
let selectedCategory = "All";
let isAdminLoggedIn = false;

function changePage(pageId) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('categoriesPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('adminLoginModal').style.display = 'none';
    document.getElementById('adminPage').style.display = 'none';

    if (pageId === 'home') {
        document.getElementById('homePage').style.display = 'block';
    } else if (pageId === 'categories') {
        document.getElementById('categoriesPage').style.display = 'block';
        renderCategoryFilters();
        renderCategoriesGrid();
    } else if (pageId === 'about') {
        document.getElementById('aboutPage').style.display = 'block';
    } else if (pageId === 'contact') {
        document.getElementById('contactPage').style.display = 'block';
    } else if (pageId === 'adminLogin') {
        document.getElementById('adminLoginModal').style.display = 'block';
    } else if (pageId === 'adminDashboard') {
        document.getElementById('adminPage').style.display = 'block';
        renderInboxMessages();
    }
}

function checkAdminAccess() {
    if (isAdminLoggedIn) {
        changePage('adminDashboard');
    } else {
        changePage('adminLogin');
    }
}

function handleAdminLogin(event) {
    event.preventDefault();
    let pass = document.getElementById('adminPass').value;
    if (pass === 'restaurant') {
        isAdminLoggedIn = true;
        document.getElementById('loginError').textContent = "";
        document.getElementById('loginForm').reset();
        changePage('adminDashboard');
    } else {
        document.getElementById('loginError').textContent = "Incorrect password! Access denied.";
    }
}

function adminLogout() {
    isAdminLoggedIn = false;
    alert("Logged out from Admin Panel securely.");
    changePage('home');
}

function switchAdminTab(tabName) {
    const invTab = document.getElementById('adminInventoryTab');
    const inboxTab = document.getElementById('adminInboxTab');
    const invBtn = document.getElementById('invTabBtn');
    const inboxBtn = document.getElementById('inboxTabBtn');

    if (tabName === 'inventory') {
        invTab.style.display = 'block';
        inboxTab.style.display = 'none';
        invBtn.classList.add('active');
        inboxBtn.classList.remove('active');
    } else {
        invTab.style.display = 'none';
        inboxTab.style.display = 'block';
        inboxBtn.classList.add('active');
        invBtn.classList.remove('active');
        renderInboxMessages();
    }
}

function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    const categories = ["All", ...new Set(catalogItems.map(item => item.category))];

    container.innerHTML = "";
    categories.forEach(cat => {
        let btn = document.createElement('button');
        btn.className = `filter-btn ${cat === selectedCategory ? 'active' : ''}`;
        btn.textContent = cat;
        btn.onclick = function() {
            selectedCategory = cat;
            renderCategoryFilters();
            renderCategoriesGrid();
        };
        container.appendChild(btn);
    });
}

function renderCategoriesGrid() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = "";

    let itemsToDisplay = selectedCategory === "All" 
        ? catalogItems 
        : catalogItems.filter(item => item.category === selectedCategory);

    if (itemsToDisplay.length === 0) {
        grid.innerHTML = "<p>No products available in this category.</p>";
        return;
    }

    const productImagePaths = {
        1: 'Images/Marlboro_Red.jpg',
        2: 'Images/ItsNeverOver_Marlboro_Red_Rim.jpg',
        3: 'Images/Marlboro_Green.png',
        4: 'Images/Marlboro_Green_Rim.jpg',
        5: 'Images/Marlboro_Blue_Lights.webp',
        6: 'Images/Marlboro_Blue_Rim.jpg',
        7: 'Images/Fortune_Green.png',
        8: 'Images/Fortune_Green_Rim.jpg',
        9: 'Images/Fortune_Lights.png',
        10: 'Images/Fortune_Lights_Rim.jpg',
        11: 'Images/Winston_Red.jpeg',
        12: 'Images/Winston_Red_Rim.jpg',
        13: 'Images/Winston_Lights.png',
        14: 'Images/Winston_Lights_Rim.jpg',
        24: 'Images/San_Marino_Flat.jpg',
        25: 'Images/Normal_San_Marino.jpg',
        26: 'Images/Tuna_Small.png',
        27: 'Images/Century_Tuna.jpg',
        28: 'Images/Saba_Squid.jpg',
        29: 'Images/Mixed_Fruit.jpg',
        30: 'Images/Soy_Suave_Pack.png',
        31: 'Images/Soy_Sauce_Small.png',
        32: 'Images/Soy_Sauce_Big.jpeg',
        33: 'Images/Soy_Sauce_Gallon.jpeg',
        34: 'Images/Vinegar_Pack.jpg',
        35: 'Images/Vinegar_Small.png',
        36: 'Images/Vinegar_Big.webp',
        37: 'Images/Vinegar_Gallon.jpeg',
        38: 'Images/Silver_Swan_Soy_Pack.jpeg',
        39: 'Images/Silver_Swan_Soy_Small.webp',
        40: 'Images/Silver_Swan_Soy_Large.png',
        41: 'Images/Silver_Swan_Soy_Gallon.jpg',
        42: 'Images/Silver_Swan_Pack.jpeg',
        43: 'Images/Silver_Swan_Small.png',
        44: 'Images/Silwer_Swan_Small.webp',
        45: 'Images/Silver_Swan_Gallon.jpg',
        47: 'Images/Ground_Pepper.jpg',
        48: 'Images/Laurel.webp',
        49: 'Images/Iodized_Salt.jpg',
        76: 'Images/Pineapple_Juice.jpg',
        53: 'Images/Maya_Cake_Flour.jpg',
        54: 'Images/Baking_Soda.jpg',
        55: 'Images/Cream_Pure_Cornstrach.webp',
        64: 'Images/Milo.png',
        65: 'Images/Energen.jpeg',
        66: 'Images/Kopiko.jpg',
        67: 'Images/Great_Taste.jpeg',
        50: 'Images/Victoria_Sugar.jpg',
        51: 'Images/Victoria_Brown_Sugar.jpg',
        52: 'Images/Victoria_Washed_Sugar.jpg',
        56: 'Images/Local_Cooking_Oil.jpg',
        58: 'Images/Golden_Fiesta_Oil.webp',
        59: 'Images/Lucky_Me_Pancit_Canton.jpeg',
        60: 'Images/Extra_Big_Pancit_Canton.jpg',
        61: 'Images/Nissin_Ramen.jpeg',
        62: 'Images/Lucky_Me_Chicken.jpeg',
        63: 'Images/Lucky_Me_Beef.jpeg',
        68: 'Images/Alaska_Evaporated.jpg',
        69: 'Images/Alaska_Condensada.jpg',
        70: 'Images/Cow_Bell_Evaporated.png',
        71: 'Images/Cow_Bell_Evaporated.png',
        72: 'Images/Cow_Bell_Evaporated.png',
        73: 'Images/Cowbell_Consedensarap.jpg',
        74: 'Images/Cowbell_Consedensarap.jpg',
        75: 'Images/Cowbell_Consedensarap.jpg',
        80: 'Images/Colgate_Big.jpg',
        81: 'Images/Colgate_Pack.jpg',
        82: 'Images/Colgate_Twinpack.jpeg',
        83: 'Images/Hapee_Big.jpg',
        84: 'Images/Hapee_Big.webp',
        85: 'Images/Close_Up_Big.jpg',
        87: 'Images/Close_Up_Twinpack.jpeg',
        88: 'Images/Oralb_Toothbrush.jpg',
        89: 'Images/Palmolive_Shampoo.webp',
        90: 'Images/Pantene_Shampoo.webp',
        91: 'Images/Clear_Shampoo.webp',
        92: 'Images/Silka_Soap.jpg',
        93: 'Images/Kojic_Soap.jpg',
        94: 'Images/Safegaurd_Small.webp',
        95: 'Images/Safegaurd_Large.jpg',
        96: 'Images/Dove_Large.jpg',
        97: 'Images/Tide_Powder.webp',
        98: 'Images/Champion_Powder.jpg',
        99: 'Images/Surf_Powder.webp',
        100: 'Images/Breeze_Powder.webp',
        101: 'Images/Ariel_Powder.webp',
        102: 'Images/Champion_Bar_Soap.png',
        103: 'Images/Charcoal_Pack.jpg',
        104: 'Images/Bilao_12.png',
        105: 'Images/Bilao_14.png',
        106: 'Images/Bilao_16.png',
        107: 'Images/Bilao_18.png',
        108: 'Images/Ginebra_Bottle.jpg',
        109: 'Images/Ginebra_Box.jpg',
        110: 'Images/Empirador_Single.jpg',
        111: 'Images/Empirador_Double.jpg',
        112: 'Images/Alfonso_Single.jpg',
        113: 'Images/Alfonso_Box.jpg',
        114: 'Images/Fundador_Specia.webp',
        15: 'Images/Tupperware_Small.png',
        16: 'Images/Tupperware_Medium.png',
        17: 'Images/Tupperware_Large.png',
        18: 'Images/Plastic_Labo.jpeg',
        19: 'Images/Plastic_Labo.jpeg',
        20: 'Images/Plastic_Bag.jpg',
        21: 'Images/Plastic_Bag.jpg',
        22: 'Images/Plastic_Bag.jpg',
        77: 'Images/Food_Coloring.jpg',
        78: 'Images/Gelatin_Mix.jpg',
        79: 'Images/Graham_Crackers.webp',
        57: 'Images/Extra_Virgin_Olive_Oil.png',
        86: 'Images/Close_Up_Big.jpg',
    };

    itemsToDisplay.forEach(item => {
        let card = document.createElement('div');
        card.className = 'product-card';
        const imagePath = productImagePaths[item.id] || `images/${item.id}.jpg`;

        card.innerHTML = `
            <img src="${imagePath}" alt="${item.name}" class="product-image${item.id === 57 ? ' olive-oil-image' : ''}" onerror="this.onerror=null; this.src='images/default.jpg';">
            <h4 style="margin:5px 0; color:#2d5a27;">${item.name}</h4>
            <p style="margin:2px 0; font-size:12px; color:#555;">Category: <strong>${item.category}</strong></p>
            <p style="margin:2px 0; font-size:13px; color:#2d5a27;"><strong>₱${item.price.toFixed(2)}</strong> / ${item.unit}</p>
            <p style="margin:2px 0; font-size:12px; color:#777;">Stock: ${item.stock}</p>
        `;
        grid.appendChild(card);
    });
}

function addNewItem(event) {
    event.preventDefault();
    let name = document.getElementById('itemName').value.trim();
    let category = document.getElementById('itemCategory').value;
    let price = parseFloat(document.getElementById('itemPrice').value);
    let unit = document.getElementById('itemUnit').value.trim();
    let stock = parseInt(document.getElementById('itemStock').value);

    if (name && category && !isNaN(price) && unit && !isNaN(stock)) {
        let newId = catalogItems.length > 0 ? catalogItems[catalogItems.length - 1].id + 1 : 1;
        catalogItems.push({ id: newId, name, category, price, unit, stock });
        localStorage.setItem('denis_catalog', JSON.stringify(catalogItems));
        alert(`Successfully added "${name}"!`);
        document.getElementById('addItemForm').reset();
    }
}

function handleContact(event) {
    event.preventDefault();
    let name = document.getElementById('cName').value.trim();
    let email = document.getElementById('cEmail').value.trim();
    let message = document.getElementById('cMsg').value.trim();

    let newMessage = {
        id: Date.now(),
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    customerMessages.push(newMessage);
    localStorage.setItem('denis_messages', JSON.stringify(customerMessages));

    document.getElementById('contactFeedback').textContent = `Thank you, ${name}! Your message has been sent to the store admin.`;
    document.getElementById('contactForm').reset();
}

function renderInboxMessages() {
    const container = document.getElementById('messagesContainer');
    const badgeCount = document.getElementById('inboxCount');
    
    badgeCount.textContent = customerMessages.length;
    container.innerHTML = "";

    if (customerMessages.length === 0) {
        container.innerHTML = "<p style='color: #777;'>No messages or customer feedback received yet.</p>";
        return;
    }

    [...customerMessages].reverse().forEach(msg => {
        let msgBox = document.createElement('div');
        msgBox.style.cssText = "background: #faf7f2; border: 1px solid #dcd6cd; padding: 15px; border-radius: 6px;";
        msgBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 13px; color: #555; margin-bottom: 5px;">
                <span>From: <strong>${msg.name}</strong> (${msg.email})</span>
                <span>${msg.date}</span>
            </div>
            <p style="margin: 0; color: #2b2b2b; font-size: 14px;">${msg.message}</p>
            <button onclick="deleteMessage(${msg.id})" style="margin-top: 10px; background: #d9534f; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">Delete Message</button>
        `;
        container.appendChild(msgBox);
    });
}

function deleteMessage(id) {
    customerMessages = customerMessages.filter(m => m.id !== id);
    localStorage.setItem('denis_messages', JSON.stringify(customerMessages));
    renderInboxMessages();
}

window.onload = function() {
    changePage('home');
};