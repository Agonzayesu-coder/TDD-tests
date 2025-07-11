import unittest
from tax_calculator import calculate_tax

class TestTaxCalculator(unittest.TestCase):

    def test_no_tax_under_12000(self):
        self.assertEqual(calculate_tax(12000), 0)


    def test_20_percent_tax_between_12000_and_36000(self):
        self.assertEqual(calculate_tax(15000), (15000 - 12000) * 0.2)  # 600


    def test_40_percent_tax_above_36000(self):
        # For 50,000: 20% on (36000 - 12000) + 40% on (50000 - 36000)
        expected_tax = (36000 - 12000) * 0.2 + (50000 - 36000) * 0.4
        self.assertEqual(calculate_tax(50000), expected_tax)


if __name__ == '__main__':
    unittest.main()