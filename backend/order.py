class Order:
    def __init__(self, order_id, user, items):
        self._order_id = order_id
        self._user = user
        self._items = items
        self._status = "en attente"

    def place_order(self):
        for product, qty in self._items:
            product.update_stock(qty)
        self._user._order_history.append(self)

    def update_status(self, new_status):
        self._status = new_status
