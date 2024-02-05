

pessoas = []
for i in range(0, 3):
    pessoas.append(str(input(f'digite o nome {i}:')))
    pessoas.append(int(input(f'Digite um Número para a posição {i}:')))

    print('==' *30)
    print(f'você digitou o valor {pessoas}')
    print(f'sua lista tem:', len(pessoas), ' items!')



