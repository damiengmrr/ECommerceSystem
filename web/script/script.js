const products = [
    { id: 1, name: "T-Shirt", price: 1200, image: "image/vetement/t-shirt1.png" },
    { id: 2, name: "T-Shirt", price: 1200, image: "image/vetement/t-shirt2.png" },
    { id: 3, name: "Chemise", price: 1500, image: "image/vetement/chemise1.png" },
    { id: 4, name: "Pantalon", price: 2000, image: "image/vetement/pantalon.png" },
    { id: 5, name: "Short", price: 1500, image: "image/vetement/short.png" },
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
