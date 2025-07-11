import re

def is_valid_password(password):
    if len(password) < 8:
        return False
    if not re.search(r'[A-Z]', password): #check for uppercase letter
        return False
    if not re.search(r'[a-z]', password): #check for lowercase letter
        return False
    if not re.search(r'\d', password):    #check for digit
        return False
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password): #check for special character
        return False
    return True
    
