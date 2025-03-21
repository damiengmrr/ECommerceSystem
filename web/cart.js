// Récupération du panier depuis localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Affichage des produits du panier
const cartItems = document.getElementById('cart-items');
if (cartItems) {
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h2>${item.name}</h2>
            <p>Prix: ${item.price}€</p>
        `;
        cartItems.appendChild(itemDiv);
    });
}
