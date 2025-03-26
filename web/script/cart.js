let cart = JSON.parse(localStorage.getItem('cart')) || [];


const cartItems = document.getElementById('cart-items');

function displayCart() {
    cartItems.innerHTML = ''; 
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h2>${item.name}</h2>
            <p>Prix: ${item.price}€</p>
            <button class="remove-btn" data-index="${index}">Supprimer</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}


function removeFromCart(event) {
    const index = event.target.getAttribute('data-index');
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}

if (cartItems) {
    displayCart();
}
const clearCartBtn = document.getElementById('clear-cart');

function clearCart() {
    cart = []; 
    localStorage.removeItem('cart'); 
    displayCart(); 
}

if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
}

