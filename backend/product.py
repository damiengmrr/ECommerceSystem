class Product:
    def __init__(self, product_id, name, price, stock_quantity):
        self._product_id = product_id
        self._name = name
        self._price = price
        self._stock_quantity = stock_quantity

    def update_stock(self, quantity):
        self._stock_quantity -= quantity

    def get_product_details(self):
        return {
            "id": self._product_id,
            "name": self._name,
            "price": self._price,
            "stock": self._stock_quantity
        }
