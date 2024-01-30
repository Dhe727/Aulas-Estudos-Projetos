#Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar.
#cotação do dólar fixa : 5.12'''

valorNaCarteira = float(input("Quanto de dinheiro você tem de dinheiro sobrando?"))
valorDolar = 5.12
if valorNaCarteira <= 0:
    print('Que pena, você não pode comprar dólar')
else:
    print("Você pode compra {:.2f} Dólares".format(valorNaCarteira / valorDolar))


