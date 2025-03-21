package models;

import java.util.ArrayList;
import java.util.List;

public class User {
    private String username;
    private String email;
    private String password;
    private List<Order> orderHistory;

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.orderHistory = new ArrayList<>();
    }

    // Getters
    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public List<Order> getOrderHistory() { return orderHistory; }

    // Methods
    public void addOrder(Order order) {
        orderHistory.add(order);
    }

    public boolean login(String password) {
        return this.password.equals(password);
    }
}