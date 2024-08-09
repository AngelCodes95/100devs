document.addEventListener('DOMContentLoaded', () => {
    // Select buttons by class name
    const buttons = document.querySelectorAll('.dash-options');

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();

            switch (buttonText) {
                case 'View All Products in Inventory':
                    location.assign('/view-all-products');
                    break;
                case 'Add Product to Inventory':
                    location.assign('/add-product');
                    break;
                case 'Update Product Details':
                    location.assign('/update-product');
                    break;
                case 'Remove Product from Inventory':
                    location.assign('/remove-product');
                    break;
                default:
                    console.error('Unknown button clicked');
            }
        });
    });
});
