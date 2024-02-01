'''Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento.'''

nomeFuncionario = str(input("Qual é o nome no funcionário? "))
salarioAtual = float(input("Qual seu sálario base atual ? R$ "))
reajusteSalario = 15
novoSalário = salarioAtual + (salarioAtual * reajusteSalario)/ 100
print("{} seu novo salário é R$ {} !".format (nomeFuncionario, novoSalário))