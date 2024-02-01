#Faça um programa que leia a largura e a altura de uma parede em metros,
#calcule a sua área e a quantidade de tinta necessária para pintá-la,
#sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

Largura = float(input("Qual a  largura da parede?"))
altura = float(input("Qual a altura da parede?"))
metrosQuadrados = Largura * altura
print("A sua parede tem uma dimensão de {}X{} e a área total é de {}m², você vai precisar usar {:.3f} litros de tinta!".format(Largura, altura, metrosQuadrados, metrosQuadrados/ 11))
