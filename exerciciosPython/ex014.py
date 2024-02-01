'''Escreva um programa que converta uma temperatura
digitando em graus Celsius e converta para graus Fahrenheit.'''

temperaturaAtual = float(input("digite a temperatura atual em ºC pra a coverção ºF :"))
temperaFahrenheit = temperaturaAtual * 1.8 + 32
print("A temperatura digita foi : {} ºC ".format(temperaturaAtual))
print(" a temperatua em Fahrenheit é de {} ºF ".format(temperaFahrenheit))