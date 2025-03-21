import java.util.*;

public class UserController {
    private UserService userService;

    public UserController() {
        this.userService = new UserService();
    }

    // Enregistrer un nouvel utilisateur
    public void registerUser(String username, String email, String password) {
        User newUser = new User(username, email, password);
        userService.registerUser(newUser);
        System.out.println("Utilisateur enregistré avec succès.");
    }

    // Se connecter avec un utilisateur
    public boolean loginUser(String email, String password) {
        User user = userService.authenticateUser(email, password);
        if (user != null) {
            System.out.println("Connexion réussie.");
            return true;
        }
        System.out.println("Identifiants invalides.");
        return false;
    }

    // Voir l'historique des commandes
    public void viewOrderHistory(int userId) {
        List<Order> orderHistory = userService.getOrderHistory(userId);
        if (orderHistory.isEmpty()) {
            System.out.println("Aucune commande trouvée.");
        } else {
            for (Order order : orderHistory) {
                System.out.println(order.getOrderDetails());
            }
        }
    }
}
