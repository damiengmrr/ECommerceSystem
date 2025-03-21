package models;

import java.util.Map;

public class Order {
    private int orderID;
    private User user;
    private Map<Product, Integer> items;
    private String status;

    public Order(int orderID, User user, Map<Product, Integer> items) {
        this.orderID = orderID;
        this.user = user;
        this.items = items;
        this.status = "Processing";
    }

    public void placeOrder() {
        for (Map.Entry<Product, Integer> entry : items.entrySet()) {
            entry.getKey().updateStock(entry.getValue());
        }
        user.addOrder(this);
    }

    public void updateStatus(String newStatus) {
        this.status = newStatus;
    }

    public int getOrderID() { return orderID; }
    public String getStatus() { return status; }
}