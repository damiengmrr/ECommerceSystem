// Liste des produits avec images
const products = [
    { id: 1, name: "Ordinateur", price: 1200, image: "image/ordinateur.png" },
    { id: 2, name: "Clavier", price: 50, image: "image/clavier.png" },
    { id: 3, name: "Souris", price: 25, image: "image/souris.png" },
    { id: 4, name: "Casque", price: 100, image: "image/casque.png" },
];

// Récupération du panier depuis localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Affichage des produits
const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p>Prix: ${product.price}€</p>
            <button onclick="addToCart(${product.id})">Ajouter au Panier</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} ajouté au panier !`);
}
