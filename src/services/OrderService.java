package services;

import models.Order;
import models.User;
import models.Product;
import java.util.HashMap;
import java.util.Map;

public class OrderService {
    private int nextOrderID = 1;

    public Order placeOrder(User user, Map<Product, Integer> items) {
        Order order = new Order(nextOrderID++, user, items);
        order.placeOrder();
        return order;
    }
}