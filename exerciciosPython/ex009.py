''' Faça um programa que leia um número Inteiro qualquer e mostre na tela a sua tabuada.'''

nun = int(input(" digite um número para ver sua tabuada:"))
n1 = 1
print(f'TABUADA {nun}')
while n1 < 11:

    print("{} x {:2} = {} ".format(nun, n1,nun * n1))
    n1 = n1 +1
