const products = [
    { id: 1, name: "Sneaker B35 NXXT", price: 1200, image: "image/chaussure/chaussure1.png" },
    { id: 2, name: "Mocassin Dior ", price: 1000, image: "image/chaussure/chaussure2.png" },
    { id: 3, name: "Richelieu Dior ", price: 500, image: "image/chaussure/chaussure3.png" },
    { id: 4, name: " B30 Countdown", price: 950, image: "image/chaussure/b30.png" },
    { id: 5, name: " B44 Blade DIOR ", price: 900, image: "image/chaussure/b44.png" },
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
