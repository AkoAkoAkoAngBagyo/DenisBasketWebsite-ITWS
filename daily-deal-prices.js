(function () {
    const deals = {
        108: { type: 'quantityPercent', quantity: 5, discountRate: 0.05 },
        110: { type: 'quantityPercent', quantity: 5, discountRate: 0.05 },
        23: { type: 'fixedAmount', discountAmount: 5 }
    };

    const originalRenderDailyDeals = window.renderDailyDeals;
    if (typeof originalRenderDailyDeals !== 'function') return;

    window.renderDailyDeals = function () {
        originalRenderDailyDeals.apply(this, arguments);

        const dealsGrid = document.getElementById('dailyDealsGrid');
        if (!dealsGrid) return;

        dealsGrid.querySelectorAll('.deal-card').forEach(card => {
            const productName = card.querySelector('h4')?.textContent;
            const product = productList.find(item => item.name === productName);
            const deal = product && deals[Number(product.id)];
            if (!product || !deal) return;

            const priceRow = card.querySelector('.deal-price-row');
            if (!priceRow) return;

            const originalPrice = Number(product.price);
            const discountedUnitPrice = deal.type === 'quantityPercent'
                ? Number((originalPrice * (1 - deal.discountRate)).toFixed(2))
                : Number((originalPrice - deal.discountAmount).toFixed(2));

            priceRow.replaceChildren();

            const oldPrice = document.createElement('span');
            oldPrice.className = 'deal-old-price';
            oldPrice.textContent = `₱${originalPrice.toFixed(2)}`;

            const newPrice = document.createElement('span');
            newPrice.className = 'deal-new-price';
            newPrice.textContent = `₱${discountedUnitPrice.toFixed(2)}`;

            const unit = document.createElement('span');
            unit.style.cssText = 'font-size: 11.5px; color: #666;';
            unit.textContent = `/ ${product.unit}${deal.type === 'quantityPercent' ? ' each' : ''}`;

            priceRow.append(oldPrice, newPrice, unit);

            const condition = card.querySelector('.deal-condition');
            if (condition && deal.type === 'quantityPercent') {
                const discountedTotal = Number((discountedUnitPrice * deal.quantity).toFixed(2));
                condition.textContent = `5% off each when you buy ${deal.quantity}; ₱${discountedTotal.toFixed(2)} for ${deal.quantity}.`;
            } else if (condition && deal.type === 'fixedAmount') {
                condition.textContent = `Save ₱${deal.discountAmount.toFixed(2)} per can.`;
            }
        });
    };
})();
