def calculate_tax(earnings):
    if earnings <= 12000:
        return 0

    tax = 0

    if earnings <= 36000:
        tax = (earnings - 12000) * 0.2   # 12000 is tax free
    else:
        tax = (36000 - 12000) * 0.2       # 20% tax on earnings between 12000 and 36000
        tax += (earnings - 36000) * 0.4

    return tax
