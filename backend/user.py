class User:
    def __init__(self, username, email, password):
        self._username = username
        self._email = email
        self._password = password
        self._order_history = []

    def register(self):
        pass  # à compléter avec logique réelle

    def login(self):
        pass

    def view_order_history(self):
        return self._order_history

class RegularUser(User):
    def apply_discount(self):
        return 0  # pas de réduction

class AdminUser(User):
    def apply_discount(self):
        return 0.2  # 20% de réduction pour les admins
