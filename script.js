// Cart functionality
let cartCount = 0;

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product-card button');

// Add click event to each button
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Get product info
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        
        // Increase cart count
        cartCount++;
        document.querySelector('.cart-count').textContent = cartCount;
        
        // Show alert
        alert(productName + ' added to cart!\nPrice: ' + productPrice);
        
        // Optional: Add animation
        this.textContent = 'Added!';
        this.style.backgroundColor = 'green';
        
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '';
        }, 1000);
    });
});