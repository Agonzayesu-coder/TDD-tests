
import unittest
from PasswordValidator import  is_valid_password

class TestPasswordValidator(unittest.TestCase):
    def test_valid_password(self):
        self.assertTrue(is_valid_password("xela12.Alex"))

    def test_invalid_password_no_uppercase(self):
        self.assertFalse(is_valid_password("xela12.alex"))
        
    def test_invalid_password_no_lowercase(self):
        self.assertFalse(is_valid_password("XELA12.ALEX"))

    def test_invalid_password_no_digit(self):
        self.assertFalse(is_valid_password("Xela.Alex"))

    def test_invalid_password_no_special_char(self):
        self.assertFalse(is_valid_password("Xela12Alex"))

    def test_invalid_password_too_short(self):
        self.assertFalse(is_valid_password("Xela1.A"))


if __name__ == '__main__':
    unittest.main()
    