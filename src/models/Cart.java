package models;

import java.util.HashMap;
import java.util.Map;

public class Cart {
    private User user;
    private Map<Product, Integer> items;

    public Cart(User user) {
        this.user = user;
        this.items = new HashMap<>();
    }

    // Methods
    public void addProduct(Product product, int quantity) {
        items.put(product, items.getOrDefault(product, 0) + quantity);
    }

    public void removeProduct(Product product) {
        items.remove(product);
    }

    public double calculateTotal() {
        double total = 0;
        for (Map.Entry<Product, Integer> entry : items.entrySet()) {
            total += entry.getKey().getPrice() * entry.getValue();
        }
        return total;
    }

    public Map<Product, Integer> getItems() {
        return items;
    }
}