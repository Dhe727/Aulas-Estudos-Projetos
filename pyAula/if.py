# aqui vou estudar sobre o comando condicional IF !
from random import randint
from time import sleep



trabalho = randint(0, 10)
sorteioDinheiro = randint(100,1000)

print(input('vamos jogar? praia ou trablaho?'))
sleep(1)
print('3')
sleep(1)
print('2')
sleep(1)
print('1')
sleep(1)
if trabalho <= 5 and sorteioDinheiro <= 500:
    print('Vamos trabalhar')
    print('Você vai ter que trabalhar {} horas e você tem somente ${} em dinheiro'. format(trabalho, sorteioDinheiro) )

else:
    print('Você vai para a praia, já trabalhou {} horas e você tem  ${} em dinheiro'. format(trabalho,float(sorteioDinheiro) ) )
    print('vamos para a praia')
    
