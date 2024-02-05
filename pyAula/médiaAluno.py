from random import randint 
from time import sleep 

nota1 = float(input('Digite a primeira nota: '))

nota2 = float(input('Digite a sehunda nota:'))

nota3 = float(input('digite a terceira nota:')) 

sleep(3)

# Acima o codido peda para o usuario digitar 3 números 

mediaAluno = (nota1 + nota2 + nota3) /3

if mediaAluno > 7:
    print('Aluno APROVADO, Parabéns')
    print('Sua média foi: {:.2f}!'.format(mediaAluno))

elif mediaAluno >=5:
    print("Aluno em RECUPERAÇÃO")
    print('Sua média foi: {:.2f}!'.format(mediaAluno))
else:
    print(" Aluno REPROVADO")
    print('Sua média foi: {:.2f}!'.format(mediaAluno))

computador = randint(10,100)

print(computador)