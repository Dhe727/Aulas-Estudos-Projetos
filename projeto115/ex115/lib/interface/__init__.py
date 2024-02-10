# Função para ler um número inteiro, com tratamento de exceções
def leiaInt(msg):
    while True:
        try:
            n = int(input(msg))  # Tenta converter a entrada para um número inteiro
        except (ValueError, TypeError):  # Captura exceções de valor inválido ou tipo incorreto
            print(('\033[31mERRO: Por favor, digite um número inteiro válido.\033[m'))
            continue
        except (KeyboardInterrupt):  # Captura exceção de interrupção de teclado (Ctrl+C)
            print('\033[31mSaindo do Sistema...\033[m')
            break
        else:
            return n  # Retorna o número inteiro se não houver exceções

# Função que retorna uma linha com um comprimento específico (padrão: 42)
def linha(tan=42):
    return '_' * tan

# Função para imprimir um cabeçalho centralizado
def cabecalho(txt):
    print(linha())
    print(txt.center(42))
    print(linha())

# Função para exibir um menu a partir de uma lista e obter a escolha do usuário
def menu(lista):
    c = 1
    for item in lista:
        print(f'\033[34m{c}\033[m - \033[35m{item}\033[m')  # Imprime o número e o item da lista com cores
        c += 1
    print(linha())
    opcao = leiaInt('\033[36mSua opção:\033[m ')  # Obtém a escolha do usuário usando a função leiaInt
    return opcao
