import unittest
from math_utils import is_even

class TestMathUtils(unittest.TestCase):
    def test_is_even(self):
        self.assertTrue(is_even(2))
        self.assertFalse(is_even(3))

if __name__ == '__main__':
    unittest.main()
