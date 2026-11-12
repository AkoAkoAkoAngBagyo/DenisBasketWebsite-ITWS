let productList = JSON.parse(localStorage.getItem('denis_catalog')) || [
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
    { id: 20, name: "Plastic Bags Small", category: "Plasticware & Food Containers", price: 110.00, unit: "1000 pcs", stock: 50 },
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
    { id: 37, name: "Datu Puti Vinegar Gallon", category: "Condiments & Cooking Ingredients", price: 170.00, unit: "gallon", stock: 27 },
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

const productImages = {
    1: 'images/Marlboro_Red.jpg',
    2: 'images/ItsNeverOver_Marlboro_Red_Rim.jpg',
    3: 'images/Marlboro_Green.png',
    4: 'images/Marlboro_Green_Rim.jpg',
    5: 'images/Marlboro_Blue_Lights.webp',
    6: 'images/Marlboro_Blue_Rim.jpg',
    7: 'images/Fortune_Green.png',
    8: 'images/Fortune_Green_Rim.jpg',
    9: 'images/Fortune_Lights.png',
    10: 'images/Fortune_Lights_Rim.jpg',
    11: 'images/Winston_Red.jpeg',
    12: 'images/Winston_Red_Rim.jpg',
    13: 'images/Winston_Lights.png',
    14: 'images/Winston_Lights_Rim.jpg',
    15: 'images/Tupperware_Small.png',
    16: 'images/Tupperware_Medium.png',
    17: 'images/Tupperware_Large.png',
    18: 'images/Plastic_Labo.jpeg',
    19: 'images/Plastic_Labo.jpeg',
    20: 'images/Plastic_Bag.jpg',
    21: 'images/Plastic_Bag.jpg',
    22: 'images/Plastic_Bag.jpg',
    23: 'images/Normal_San_Marino.jpg',
    24: 'images/San_Marino_Flat.jpg',
    25: 'images/Normal_San_Marino.jpg',
    26: 'images/Tuna_Small.png',
    27: 'images/Century_Tuna.jpg',
    28: 'images/Saba_Squid.jpg',
    29: 'images/Mixed_Fruit.jpg',
    30: 'images/Soy_Suave_Pack.png',
    31: 'images/Soy_Sauce_Small.png',
    32: 'images/Soy_Sauce_Big.jpeg',
    33: 'images/Soy_Sauce_Gallon.jpeg',
    34: 'images/Vinegar_Pack.jpg',
    35: 'images/Vinegar_Small.png',
    36: 'images/Vinegar_Big.webp',
    37: 'images/Vinegar_Gallon.jpeg',
    38: 'images/Silver_Swan_Soy_Pack.jpeg',
    39: 'images/Silver_Swan_Soy_Small.webp',
    40: 'images/Silver_Swan_Soy_Large.png',
    41: 'images/Silver_Swan_Soy_Gallon.jpg',
    42: 'images/Silver_Swan_Pack.jpeg',
    43: 'images/Silver_Swan_Small.png',
    44: 'images/Silwer_Swan_Small.webp',
    45: 'images/Silver_Swan_Gallon.jpg',
    47: 'images/Ground_Pepper.jpg',
    48: 'images/Laurel.webp',
    49: 'images/Iodized_Salt.jpg',
    50: 'images/Victoria_Sugar.jpg',
    51: 'images/Victoria_Brown_Sugar.jpg',
    52: 'images/Victoria_Washed_Sugar.jpg',
    53: 'images/Maya_Cake_Flour.jpg',
    54: 'images/Baking_Soda.jpg',
    55: 'images/Cream_Pure_Cornstrach.webp',
    56: 'images/Local_Cooking_Oil.jpg',
    57: 'images/Extra_Virgin_Olive_Oil.png',
    58: 'images/Golden_Fiesta_Oil.webp',
    59: 'images/Lucky_Me_Pancit_Canton.jpeg',
    60: 'images/Extra_Big_Pancit_Canton.jpg',
    61: 'images/Nissin_Ramen.jpeg',
    62: 'images/Lucky_Me_Chicken.jpeg',
    63: 'images/Lucky_Me_Beef.jpeg',
    64: 'images/Milo.png',
    65: 'images/Energen.jpeg',
    66: 'images/Kopiko.jpg',
    67: 'images/Great_Taste.jpeg',
    68: 'images/Alaska_Evaporated.jpg',
    69: 'images/Alaska_Condensada.jpg',
    70: 'images/Cow_Bell_Evaporated.png',
    71: 'images/Cow_Bell_Evaporated.png',
    72: 'images/Cow_Bell_Evaporated.png',
    73: 'images/Cowbell_Consedensarap.jpg',
    74: 'images/Cowbell_Consedensarap.jpg',
    75: 'images/Cowbell_Consedensarap.jpg',
    76: 'images/Pineapple_Juice.jpg',
    77: 'images/Food_Coloring.jpg',
    78: 'images/Gelatin_Mix.jpg',
    79: 'images/Graham_Crackers.webp',
    80: 'images/Colgate_Big.jpg',
    81: 'images/Colgate_Pack.jpg',
    82: 'images/Colgate_Twinpack.jpeg',
    83: 'images/Hapee_Big.jpg',
    84: 'images/Hapee_Big.webp',
    85: 'images/Close_Up_Big.jpg',
    86: 'images/Close_Up_Big.jpg',
    87: 'images/Close_Up_Twinpack.jpeg',
    88: 'images/Oralb_Toothbrush.jpg',
    89: 'images/Palmolive_Shampoo.webp',
    90: 'images/Pantene_Shampoo.webp',
    91: 'images/Clear_Shampoo.webp',
    92: 'images/Silka_Soap.jpg',
    93: 'images/Kojic_Soap.jpg',
    94: 'images/Safegaurd_Small.webp',
    95: 'images/Safegaurd_Large.jpg',
    96: 'images/Dove_Large.jpg',
    97: 'images/Tide_Powder.webp',
    98: 'images/Champion_Powder.jpg',
    99: 'images/Surf_Powder.webp',
    100: 'images/Breeze_Powder.webp',
    101: 'images/Ariel_Powder.webp',
    102: 'images/Champion_Bar_Soap.png',
    103: 'images/Charcoal_Pack.jpg',
    104: 'images/Bilao_12.png',
    105: 'images/Bilao_14.png',
    106: 'images/Bilao_16.png',
    107: 'images/Bilao_18.png',
    108: 'images/Ginebra_Bottle.jpg',
    109: 'images/Ginebra_Box.jpg',
    110: 'images/Empirador_Single.jpg',
    111: 'images/Empirador_Double.jpg',
    112: 'images/Alfonso_Single.jpg',
    113: 'images/Alfonso_Box.jpg',
    114: 'images/Fundador_Specia.webp'
};

let customerMessages = JSON.parse(localStorage.getItem('dennis_messages')) || [];
let currentCategory = "All";
let adminLogin = false;

function changePage(pageName) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('categoriesPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('adminLoginModal').style.display = 'none';
    document.getElementById('adminPage').style.display = 'none';

    if (pageName === 'home') {
        document.getElementById('homePage').style.display = 'block';
        renderDailyDeals();
    } else if (pageName === 'categories') {
        document.getElementById('categoriesPage').style.display = 'block';
        renderCategoryFilters();
        renderCategoriesGrid();
    } else if (pageName === 'about') {
        document.getElementById('aboutPage').style.display = 'block';
    } else if (pageName === 'contact') {
        document.getElementById('contactPage').style.display = 'block';
    } else if (pageName === 'adminLogin') {
        document.getElementById('adminLoginModal').style.display = 'block';
    } else if (pageName === 'adminDashboard') {
        document.getElementById('adminPage').style.display = 'block';
        renderInboxMessages();
    }
}

function checkAdminAccess() {
    if (adminLogin) {
        changePage('adminDashboard');
    } else {
        changePage('adminLogin');
    }
}

function handleAdminLogin(formEvent) {
    formEvent.preventDefault();
    let adminPassword = document.getElementById('adminPass').value;
    if (adminPassword === 'restaurant') {
        adminLogin = true;
        document.getElementById('loginError').textContent = "";
        document.getElementById('loginForm').reset();
        changePage('adminDashboard');
    } else {
        document.getElementById('loginError').textContent = "Incorrect password! Access denied.";
    }
}

function adminLogout() {
    adminLogin = false;
    alert("Logged out from Admin Panel securely.");
    changePage('home');
}

function switchAdminTab(selectedTab) {
    const inventoryTab = document.getElementById('adminInventoryTab');
    const inboxTab = document.getElementById('adminInboxTab');
    const inventoryButton = document.getElementById('invTabBtn');
    const inboxButton = document.getElementById('inboxTabBtn');

    if (selectedTab === 'inventory') {
        inventoryTab.style.display = 'block';
        inboxTab.style.display = 'none';
        inventoryButton.classList.add('active');
        inboxButton.classList.remove('active');
    } else {
        inventoryTab.style.display = 'none';
        inboxTab.style.display = 'block';
        inboxButton.classList.add('active');
        inventoryButton.classList.remove('active');
        renderInboxMessages();
    }
}

function renderCategoryFilters() {
    const filterContainer = document.getElementById('categoryFilters');
    const categoryList = ["All", ...new Set(productList.map(product => product.category))];

    filterContainer.innerHTML = "";
    categoryList.forEach(category => {
        let filterButton = document.createElement('button');
        filterButton.className = `filter-btn ${category === currentCategory ? 'active' : ''}`;
        filterButton.textContent = category;
        filterButton.onclick = function() {
            currentCategory = category;
            renderCategoryFilters();
            renderCategoriesGrid();
        };
        filterContainer.appendChild(filterButton);
    });
}

function renderCategoriesGrid() {
    const productGrid = document.getElementById('categoriesGrid');
    productGrid.innerHTML = "";

    let displayProducts = currentCategory === "All" 
        ? productList 
        : productList.filter(product => product.category === currentCategory);

    if (displayProducts.length === 0) {
        productGrid.innerHTML = "<p>No products available in this category.</p>";
        return;
    }

    displayProducts.forEach(product => {
        let productCard = document.createElement('div');
        productCard.className = 'product-card';
        const productImagePath = productImages[product.id] || `images/${product.id}.jpg`;

        productCard.innerHTML = `
            <img src="${productImagePath}" alt="${product.name}" class="product-image${product.id === 57 ? ' olive-oil-image' : ''}" onerror="this.onerror=null; this.src='images/default.jpg';">
            <h4 style="margin:5px 0; color:#2d5a27;">${product.name}</h4>
            <p style="margin:2px 0; font-size:12px; color:#555;">Category: <strong>${product.category}</strong></p>
            <p style="margin:2px 0; font-size:13px; color:#2d5a27;"><strong>₱${product.price.toFixed(2)}</strong> / ${product.unit}</p>
            <p style="margin:2px 0; font-size:12px; color:#777;">Stock: ${product.stock}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

function renderDailyDeals() {
    const dealsGrid = document.getElementById('dailyDealsGrid');
    if (!dealsGrid) return;
    dealsGrid.innerHTML = "";

    const featuredDeals = [
        { 
            id: 108, // Ginebra (Each)
            discountLabel: "SPECIAL PROMO", 
            promoText: "5% off when you buy 5 bottles"
        },
        { 
            id: 110, // Emperador Double Light (Each)
            discountLabel: "SPECIAL PROMO", 
            promoText: "5% off when you buy 5 bottles"
        },
        { 
            id: 23, // San Marino Tuna Flat (180g)
            discountLabel: "SAVE ₱5", 
            promoText: "Special discount on single cans"
        },
        { 
            id: 59, // Pancit Canton
            discountLabel: "BUNDLE DEAL", 
            promoText: "Special bundle price"
        }
    ];

    featuredDeals.forEach(deal => {
        const product = productList.find(p => p.id === deal.id);
        if (!product) return;

        const productImagePath = productImages[product.id] || `images/${product.id}.jpg`;
        const card = document.createElement('div');
        card.className = 'deal-card';
        card.innerHTML = `
            <span class="deal-badge">${deal.discountLabel}</span>
            <img src="${productImagePath}" alt="${product.name}" class="product-image" onerror="this.onerror=null; this.src='images/default.jpg';">
            <h4 style="margin: 10px 0 4px 0; color: var(--text-dark); font-size: 15px;">${product.name}</h4>
            <p style="margin: 0; font-size: 12px; color: var(--text-muted);">${product.category}</p>
            <div class="deal-price-row" style="margin-top: 8px;">
                <span class="deal-new-price">₱${product.price.toFixed(2)}</span>
                <span style="font-size: 11.5px; color: #666;">/ ${product.unit}</span>
            </div>
            <p class="deal-condition">${deal.promoText}</p>
            <p style="margin: 6px 0 0 0; font-size: 11.5px; color: #4a664e; font-weight: 600;">Valid only for walk-ins• Stock: ${product.stock}</p>
        `;
        dealsGrid.appendChild(card);
    });
}

function addNewItem(formEvent) {
    formEvent.preventDefault();
    let productName = document.getElementById('itemName').value.trim();
    let productCategory = document.getElementById('itemCategory').value;
    let productPrice = parseFloat(document.getElementById('itemPrice').value);
    let productUnit = document.getElementById('itemUnit').value.trim();
    let productStock = parseInt(document.getElementById('itemStock').value);

    if (productName && productCategory && !isNaN(productPrice) && productUnit && !isNaN(productStock)) {
        let newProductId = productList.length > 0 ? productList[productList.length - 1].id + 1 : 1;
        productList.push({ id: newProductId, name: productName, category: productCategory, price: productPrice, unit: productUnit, stock: productStock });
        localStorage.setItem('denis_catalog', JSON.stringify(productList));
        alert(`Successfully added "${productName}"!`);
        document.getElementById('addItemForm').reset();
    }
}

function handleContact(formEvent) {
    formEvent.preventDefault();
    let customerName = document.getElementById('cName').value.trim();
    let customerEmail = document.getElementById('cEmail').value.trim();
    let customerMessage = document.getElementById('cMsg').value.trim();

    let messageDetails = {
        id: Date.now(),
        name: customerName,
        email: customerEmail,
        message: customerMessage,
        date: new Date().toLocaleString()
    };

    customerMessages.push(messageDetails);
    localStorage.setItem('dennis_messages', JSON.stringify(customerMessages));

    document.getElementById('contactFeedback').textContent = `Thank you, ${customerName}! Your message has been sent to the store admin.`;
    document.getElementById('contactForm').reset();
}

function renderInboxMessages() {
    const messagesContainer = document.getElementById('messagesContainer');
    const inboxCounter = document.getElementById('inboxCount');
    
    inboxCounter.textContent = customerMessages.length;
    messagesContainer.innerHTML = "";

    if (customerMessages.length === 0) {
        messagesContainer.innerHTML = "<p style='color: #777;'>No messages or customer feedback received yet.</p>";
        return;
    }

    [...customerMessages].reverse().forEach(customerMessage => {
        let messageBox = document.createElement('div');
        messageBox.style.cssText = "background: #faf7f2; border: 1px solid #dcd6cd; padding: 15px; border-radius: 6px;";
        messageBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 13px; color: #555; margin-bottom: 5px;">
                <span>From: <strong>${customerMessage.name}</strong> (${customerMessage.email})</span>
                <span>${customerMessage.date}</span>
            </div>
            <p style="margin: 0; color: #2b2b2b; font-size: 14px;">${customerMessage.message}</p>
            <button onclick="deleteMessage(${customerMessage.id})" style="margin-top: 10px; background: #d9534f; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">Delete Message</button>
        `;
        messagesContainer.appendChild(messageBox);
    });
}

function deleteMessage(messageId) {
    customerMessages = customerMessages.filter(customerMessage => customerMessage.id !== messageId);
    localStorage.setItem('dennis_messages', JSON.stringify(customerMessages));
    renderInboxMessages();
}

window.onload = function() {
    changePage('home');
};
