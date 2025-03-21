import java.util.*;

public class ProductController {
    private ProductService productService;

    public ProductController() {
        this.productService = new ProductService();
    }

    // Ajouter un nouveau produit
    public void addProduct(String productName, double price, int stockQuantity) {
        Product newProduct = new Product(productName, price, stockQuantity);
        productService.addProduct(newProduct);
        System.out.println("Produit ajouté avec succès.");
    }

    // Lister tous les produits
    public void listProducts() {
        List<Product> products = productService.getAllProducts();
        if (products.isEmpty()) {
            System.out.println("Aucun produit disponible.");
        } else {
            for (Product product : products) {
                System.out.println(product.getProductDetails());
            }
        }
    }

    // Obtenir les détails d'un produit par ID
    public void getProductDetails(int productId) {
        Product product = productService.getProductById(productId);
        if (product != null) {
            System.out.println(product.getProductDetails());
        } else {
            System.out.println("Produit non trouvé.");
        }
    }
}
