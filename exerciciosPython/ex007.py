# Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre a sua média.

nota = float(input("Digite a primeira nota:"))
nota2 = float(input("Digite a segunda nota:"))
media = (nota + nota2)/2
print("a média desse aluno é {:.2f}".format(media))