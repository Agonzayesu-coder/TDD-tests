from abc import ABC, abstractmethod


# Abstraction
class PaymentMethod(ABC):
    @abstractmethod
    def make_payment(self, amount):
        pass


# Low-level module 1
class CreditCard(PaymentMethod):
    def make_payment(self, amount):
        print(f"CreditCard: Processed payment of ${amount}")


# Low-level module 2
class MobileMoney(PaymentMethod):
    def make_payment(self, amount):
        print(f"MobileMoney: Paid ${amount} via mobile transfer")


# High-level module
class PaymentProcessor:
    def __init__(self, payment_method: PaymentMethod):
        self.payment_method = payment_method

    def process(self, amount):
        self.payment_method.make_payment(amount)


# Usage
credit_payment = PaymentProcessor(CreditCard())
credit_payment.process(100)

mobile_payment = PaymentProcessor(MobileMoney())
mobile_payment.process(250)
