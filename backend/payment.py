from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CreditCard(PaymentMethod):
    def pay(self, amount):
        print(f"Payer {amount}€ par carte de crédit.")

class PayPal(PaymentMethod):
    def pay(self, amount):
        print(f"Payer {amount}€ avec PayPal.")
