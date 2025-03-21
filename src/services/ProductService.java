package services;

import models.Product;
import java.util.ArrayList;
import java.util.List;

public class ProductService {
    private List<Product> products = new ArrayList<>();
    private int nextProductID = 1;

    public Product addProduct(String productName, double price, int stockQuantity) {
        Product product = new Product(productName, nextProductID++, price, stockQuantity);
        products.add(product);
        return product;
    }

    public List<Product> getAllProducts() {
        return products;
    }

    public Product getProductById(int id) {
        for (Product product : products) {
            if (product.getProductID() == id) {
                return product;
            }
        }
        return null;
    }
}