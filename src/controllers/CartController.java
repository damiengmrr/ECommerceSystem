import java.util.*;

public class CartController {
    private CartService cartService;

    public CartController() {
        this.cartService = new CartService();
    }

    // Ajouter un produit au panier
    public void addToCart(User user, Product product, int quantity) {
        cartService.addProductToCart(user, product, quantity);
        System.out.println("Produit ajouté au panier.");
    }

    // Retirer un produit du panier
    public void removeFromCart(User user, Product product) {
        cartService.removeProductFromCart(user, product);
        System.out.println("Produit retiré du panier .");
    }

    // Calculer le total des articles dans le panier
    public void calculateCartTotal(User user) {
        double total = cartService.calculateTotal(user);
        System.out.println("Prix total du panier : $" + total);
    }
}
