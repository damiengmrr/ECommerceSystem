package services;

import models.Cart;
import models.Product;
import models.User;

public class CartService {
    private Cart cart;

    public CartService(User user) {
        this.cart = new Cart(user);
    }

    public void addProductToCart(Product product, int quantity) {
        cart.addProduct(product, quantity);
    }

    public void removeProductFromCart(Product product) {
        cart.removeProduct(product);
    }

    public double getTotal() {
        return cart.calculateTotal();
    }

    public Cart getCart() {
        return cart;
    }
}