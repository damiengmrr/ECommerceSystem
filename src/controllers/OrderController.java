import java.util.*;

public class OrderController {
    private OrderService orderService;

    public OrderController() {
        this.orderService = new OrderService();
    }

    // Passer une commande
    public void placeOrder(User user) {
        Order order = orderService.placeOrder(user);
        if (order != null) {
            System.out.println("Commande passée avec succès : " + order.getOrderDetails());
        } else {
            System.out.println("Erreur lors de la commande.");
        }
    }

    // Voir les détails d'une commande par ID
    public void viewOrderDetails(int orderId) {
        Order order = orderService.getOrderById(orderId);
        if (order != null) {
            System.out.println(order.getOrderDetails());
        } else {
            System.out.println("Commande non trouvée.");
        }
    }

    // Mettre à jour le statut d'une commande (par exemple, de "en traitement" à "expédiée" ou "livrée")
    public void updateOrderStatus(int orderId, String newStatus) {
        boolean updated = orderService.updateOrderStatus(orderId, newStatus);
        if (updated) {
            System.out.println("Statut de la commande mis à jour avec succès.");
        } else {
            System.out.println("Erreur lors de la mise à jour du statut de la commande.");
        }
    }
}
