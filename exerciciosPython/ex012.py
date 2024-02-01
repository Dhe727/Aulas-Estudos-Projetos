#Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto.

precoProduto = int(input("Qual é o preço do produto? R$"))
desconto = 5
total = precoProduto - (precoProduto * desconto /100)
print('O produto custa R$ {:.2f}'.format(precoProduto))
print('Para pagamento avista posso te dar 5% de deconto! o valor total fica R$ {}'.format(total))
print('Você recebeu um desconto de {:.2f}'.format((precoProduto * desconto /100)))
