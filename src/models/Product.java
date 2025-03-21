package models;

public class Product {
    private String productName;
    private int productID;
    private double price;
    private int stockQuantity;

    public Product(String productName, int productID, double price, int stockQuantity) {
        this.productName = productName;
        this.productID = productID;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

    // Getters
    public String getProductName() { return productName; }
    public int getProductID() { return productID; }
    public double getPrice() { return price; }
    public int getStockQuantity() { return stockQuantity; }

    // Methods
    public void updateStock(int quantity) {
        if (stockQuantity >= quantity) {
            stockQuantity -= quantity;
        }
    }

    public String getProductDetails() {
        return productName + " (ID: " + productID + ") - " + price + "€ [" + stockQuantity + " en stock]";
    }
}