# aqui estou estudados conceirtos de lisa no python

carros = [ 'gol' , 'corsa' , 'saveiro' , 'linea' , 'focus', 'touro']# lista criada com []
carros[5] = 'celta'                            # sobrepoem elemento da lista no espaço [5]
carros.append('sandeiro')                      #adiciona elemento a lista, no final
print(str(len(carros)  ) + ' carros na lista') # função len mostra o tamando da lista
print(carros[-2])
carros.remove('gol')                            # remove elemento da lista de forma direta
carros.pop()                                    # remove ultimo item da lista
                                               
carros2 = list(carros)                          # copia lista  carros para carros
carros1 =[ 'fordk', 'corola' 'palio']
carros3 = carros + carros1                      # aqui estou fundindo duas listas de itens
print(carros3)
print(carros2)
print(carros)               

                