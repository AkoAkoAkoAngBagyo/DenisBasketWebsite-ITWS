/* Product catalog images. Keep these paths in lowercase for GitHub Pages/Linux. */
(function () {
    const productImageFiles = {
        1: 'Marlboro_Red.jpg',
        2: 'ItsNeverOver_Marlboro_Red_Rim.jpg',
        3: 'Marlboro_Green.png',
        4: 'Marlboro_Green_Rim.jpg',
        5: 'Marlboro_Blue_Lights.webp',
        6: 'Marlboro_Blue_Rim.jpg',
        7: 'Fortune_Green.png',
        8: 'Fortune_Green_Rim.jpg',
        9: 'Fortune_Lights.png',
        10: 'Fortune_Lights_Rim.jpg',
        11: 'Winston_Red.jpeg',
        12: 'Winston_Red_Rim.jpg',
        13: 'Winston_Lights.png',
        14: 'Winston_Lights_Rim.jpg',
        15: 'Tupperware_Small.png',
        16: 'Tupperware_Medium.png',
        17: 'Tupperware_Large.png',
        18: 'Plastic_Labo.jpeg',
        19: 'Plastic_Labo.jpeg',
        20: 'Plastic_Bag.jpg',
        21: 'Plastic_Bag.jpg',
        22: 'Plastic_Bag.jpg',
        23: 'San_Marino_Flat.jpg',
        24: 'San_Marino_Flat.jpg',
        25: 'Normal_San_Marino.jpg',
        26: 'Tuna_Small.png',
        27: 'Century_Tuna.jpg',
        28: 'Saba_Squid.jpg',
        29: 'Mixed_Fruit.jpg',
        30: 'Soy_Suave_Pack.png',
        31: 'Soy_Sauce_Small.png',
        32: 'Soy_Sauce_Big.jpeg',
        33: 'Soy_Sauce_Gallon.jpeg',
        34: 'Vinegar_Pack.jpg',
        35: 'Vinegar_Small.png',
        36: 'Vinegar_Big.webp',
        37: 'Vinegar_Gallon.jpeg',
        38: 'Silver_Swan_Soy_Pack.jpeg',
        39: 'Silver_Swan_Soy_Small.webp',
        40: 'Silver_Swan_Soy_Large.png',
        41: 'Silver_Swan_Soy_Gallon.jpg',
        42: 'Silver_Swan_Pack.jpeg',
        43: 'Silver_Swan_Small.png',
        44: 'Silwer_Swan_Small.webp',
        45: 'Silver_Swan_Gallon.jpg',
        47: 'Ground_Pepper.jpg',
        48: 'Laurel.webp',
        49: 'Iodized_Salt.jpg',
        50: 'Victoria_Sugar.jpg',
        51: 'Victoria_Brown_Sugar.jpg',
        52: 'Victoria_Washed_Sugar.jpg',
        53: 'Maya_Cake_Flour.jpg',
        54: 'Baking_Soda.jpg',
        55: 'Cream_Pure_Cornstrach.webp',
        56: 'Local_Cooking_Oil.jpg',
        57: 'Extra_Virgin_Olive_Oil.png',
        58: 'Golden_Fiesta_Oil.webp',
        59: 'Lucky_Me_Pancit_Canton.jpeg',
        60: 'Extra_Big_Pancit_Canton.jpg',
        61: 'Nissin_Ramen.jpeg',
        62: 'Lucky_Me_Chicken.jpeg',
        63: 'Lucky_Me_Beef.jpeg',
        64: 'Milo.png',
        65: 'Energen.jpeg',
        66: 'Kopiko.jpg',
        67: 'Great_Taste.jpeg',
        68: 'Alaska_Evaporated.jpg',
        69: 'Alaska_Condensada.jpg',
        70: 'Cow_Bell_Evaporated.png',
        71: 'Cowbell_Condensed_Chocolate.png',
        72: 'Cowbell_Condensed_Ube.jpg',
        73: 'Cowbell_Consedensarap.jpg',
        74: 'Cowbell_Condensed_Chocolate.png',
        75: 'Cowbell_Condensed_Ube.jpg',
        76: 'Pineapple_Juice.jpg',
        77: 'Food_Coloring.jpg',
        78: 'Gelatin_Mix.jpg',
        79: 'Graham_Crackers.webp',
        80: 'Colgate_Big.jpg',
        81: 'Colgate_Pack.jpg',
        82: 'Colgate_Twinpack.jpeg',
        83: 'Hapee_Big.jpg',
        84: 'Hapee_Big.webp',
        85: 'Close_Up_Big.jpg',
        86: 'Close_Dozen.jpg',
        87: 'Close_Up_Twinpack.jpeg',
        88: 'Oralb_Toothbrush.jpg',
        89: 'Palmolive_Shampoo.webp',
        90: 'Pantene_Shampoo.webp',
        91: 'Clear_Shampoo.webp',
        92: 'Silka_Soap.jpg',
        93: 'Kojic_Soap.jpg',
        94: 'Safegaurd_Small.webp',
        95: 'Safegaurd_Large.jpg',
        96: 'Dove_Large.jpg',
        97: 'Tide_Powder.webp',
        98: 'Champion_Powder.jpg',
        99: 'Surf_Powder.webp',
        100: 'Breeze_Powder.webp',
        101: 'Ariel_Powder.webp',
        102: 'Champion_Bar_Soap.png',
        103: 'Charcoal_Pack.jpg',
        104: 'Bilao_12.png',
        105: 'Bilao_14.png',
        106: 'Bilao_16.png',
        107: 'Bilao_18.png',
        108: 'Ginebra_Bottle.jpg',
        109: 'Ginebra_Box.jpg',
        110: 'Empirador_Single.jpg',
        111: 'Empirador_Double.jpg',
        112: 'Alfonso_Single.jpg',
        113: 'Alfonso_Box.jpg',
        114: 'Fundador_Specia.webp'
    };

    const imageBase = new URL('images/', document.currentScript.src);
    const placeholder = new URL('store-image-placeholder.svg', document.currentScript.src).href;

    // Override the renderer after script.js has defined its original version.
    window.renderCategoriesGrid = function () {
        const productGrid = document.getElementById('categoriesGrid');
        if (!productGrid) return;

        productGrid.replaceChildren();
        const visibleProducts = currentCategory === 'All'
            ? productList
            : productList.filter(product => product.category === currentCategory);

        if (!visibleProducts.length) {
            productGrid.innerHTML = '<p>No products available in this category.</p>';
            return;
        }

        visibleProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const image = document.createElement('img');
            image.className = `product-image${Number(product.id) === 57 ? ' olive-oil-image' : ''}`;
            image.alt = product.name;
            image.src = productImageFiles[Number(product.id)]
                ? new URL(encodeURIComponent(productImageFiles[Number(product.id)]), imageBase).href
                : placeholder;
            image.onerror = function () {
                this.onerror = null;
                this.src = placeholder;
            };

            const title = document.createElement('h4');
            title.style.cssText = 'margin:5px 0; color:#2d5a27;';
            title.textContent = product.name;

            const category = document.createElement('p');
            category.style.cssText = 'margin:2px 0; font-size:12px; color:#555;';
            category.textContent = `Category: ${product.category}`;

            const price = document.createElement('p');
            price.style.cssText = 'margin:2px 0; font-size:13px; color:#2d5a27;';
            price.textContent = `₱${Number(product.price).toFixed(2)} / ${product.unit}`;

            const stock = document.createElement('p');
            stock.style.cssText = 'margin:2px 0; font-size:12px; color:#777;';
            stock.textContent = `Stock: ${product.stock}`;

            card.append(image, title, category, price, stock);
            productGrid.appendChild(card);
        });
    };
})();
