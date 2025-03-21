package services;

import models.User;
import java.util.HashMap;
import java.util.Map;

public class UserService {
    private Map<String, User> users = new HashMap<>();

    public boolean register(String username, String email, String password) {
        if (users.containsKey(email)) {
            return false;  // utilisateur deja existant
        }
        users.put(email, new User(username, email, password));
        return true;
    }

    public User login(String email, String password) {
        User user = users.get(email);
        if (user != null && user.login(password)) {
            return user;
        }
        return null;  // authentification echouee
    }

    public User getUserByEmail(String email) {
        return users.get(email);
    }
}