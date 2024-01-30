# Crie um algoritmo que leia um número e mostre o seu dobro, triplo e raiz quadrada.

nun = int(input("Digite un número:"))

print("o dobro de {} é {}".format(nun, nun * 2))
print("o tripulo de {} é {}.".format(nun, nun * 3))
print("a raiz quadrada de {} é {:.2f}".format(nun, (nun ** 0.5)))  # aqui é uma forma de calculo de raiz quadrada
print("a raiz quadrada de {} é {:.2f}".format(nun, pow(nun, (1/2))))  # tbm é uma forma de calculo de raiz quadrada
