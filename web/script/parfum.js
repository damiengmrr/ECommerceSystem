const products = [
    { id: 1, name: "Sauvage Elixir", price: 90, image: "image/parfum/dior.png" },
    { id: 2, name: "Coffret du Parfumeur", price: 310, image: "image/parfum/coffret.png" },
    { id: 3, name: "Sauvage Extrême", price: 120, image: "image/parfum/parfum.png" },
    { id: 4, name: "Higher", price: 120, image: "image/parfum/parfum2.png" },
    { id: 5, name: "Dior Homme Parfum", price: 150, image: "image/parfum/parfums1.png" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2 class="product-title">${product.name}</h2>
            <p class="product-price">💰 Prix: <strong>${product.price}€</strong></p>
            <button class="btn add-to-cart" onclick="addToCart(${product.id})">
                🛒 Ajouter au Panier
            </button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`🎉 ${product.name} a été ajouté au panier !`);
}
