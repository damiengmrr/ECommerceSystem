class Cart:
    def __init__(self, user):
        self._user = user
        self._items = []  # liste de tuples (product, quantity)

    def add_product(self, product, quantity):
        self._items.append((product, quantity))

    def remove_product(self, product_id):
        self._items = [item for item in self._items if item[0]._product_id != product_id]

    def calculate_total(self):
        return sum(p._price * q for p, q in self._items)
