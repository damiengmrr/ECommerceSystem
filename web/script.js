// Liste des produits simulée (tu peux la synchroniser avec Java via un fichier JSON si besoin)
const products = [
    { id: 1, name: "Ordinateur", price: 1200 },
    { id: 2, name: "Clavier", price: 50 },
    { id: 3, name: "Souris", price: 25 }
];

// Panier en localStorage (garde les produits même si on rafraîchit)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Affichage des produits
const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Prix: ${product.price}€</p>
            <button onclick="addToCart(${product.id})">Ajouter au Panier</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Ajouter un produit au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} ajouté au panier !`);
}

// Affichage du panier
const cartItems = document.getElementById('cart-items');
if (cartItems) {
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product';
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Prix: ${item.price}€</p>
        `;
        cartItems.appendChild(itemDiv);
    });
}