# Faça um programa que leia um número Inteiro
# e mostre na tela o seu sucessor e seu antecessor.

nun = int(input("Digite um número: "))

antecessorNun = nun - 1
sucessorNum = nun + 1
print('o antecessor de {} é {} e o sucessor é {}!'.format(nun, antecessorNun, sucessorNum))# Aqui estou usando 3 variaveis

print('o antecessor de {} é {} e o sucessor é {}!'.format(nun, (nun-1),(nun+1))) # Aqui estou usando apenas uma variavel