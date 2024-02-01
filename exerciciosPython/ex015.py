'''Escreva um programa que pergunte a quantidade de Km percorridos por
um carro alugado e a quantidade de dias pelos quais ele foi alugado.
Calcule o preço a pagar, sabendo
que o carro custa R$60 por dia e R$0,15 por Km rodado.'''

dias = int(input('Quantos dias o carro foi alugado ? R$')) * 60
kmRodados = float(input("Quantos km rodados?")) * 0.15
total = kmRodados + dias
print("O valor total do aluquel do carro é R$ {} ".format(dias))
print("o valor total dos Km rodados foi : R$ {} ".format(kmRodados))
print("total a pagar R$ {}".format(total))