numero = 0
mutiplicador = 0


while numero < 10 or mutiplicador < 10:
    resultado = mutiplicador * numero
    print( '{} x {} = {}'.format(numero, mutiplicador ,resultado))
    numero =  +1 
    mutiplicador = 1
    
'''numero = 1  # Inicie o número de 1 para a tabela de multiplicação
mutiplicador = 1  # Inicie o multiplicador de 1 para a tabela de multiplicação

while numero <= 10:
    print('____Tabuada {}____'.format(numero))
    print('=='*10)
    while mutiplicador <= 10:
        resultado = numero * mutiplicador
        print('  {} x {}  =  {}'.format(numero, mutiplicador, resultado))
        
        mutiplicador += 1
    numero += 1
    mutiplicador = 1  # Reinicie o multiplicador para a próxima linha da tabela'''
