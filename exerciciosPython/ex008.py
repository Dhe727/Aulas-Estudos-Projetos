# Escreva um programa que leia um valor em metros e o exiba convertido em centímetros e milímetros.

num = float(input("Digite um número para converção: "))

print("centímetros = {:.2f} milímetros = {} ".format(num * 100, num * 1000))

