from ex115.lib.interface import *
from time import sleep
from ex115.lib.arquivo import *

# Nome do arquivo onde os dados serão armazenados
arquivo = 'dadosPessoas.txt'

# Verifica se o arquivo existe e o cria se não existir
if not arquivoExiste(arquivo):
    criarAquivo(arquivo)

# Cabeçalho do programa
cabecalho('Sistema de Cadastro de Pessoas')

# Loop principal do programa
while True:
    # Exibe o menu e obtém a escolha do usuário
    resposta = menu(['Ver Pessoas Cadastradas', 'Cadastrar Nova Pessoas', 'Sair do Sistema'])

    if resposta == 1:
        # Opção: Ver Pessoas Cadastradas
        lerAquivo(arquivo)
        sleep(2)
    elif resposta == 2:
        # Opção: Cadastrar Nova Pessoa
        cabecalho('\033[33mNovo Cadastro:\033[m')
        nome = str(input("Nome: "))
        idade = leiaInt('Idade: ')
        cadastrar(arquivo, idade, nome)
        sleep(2)
    elif resposta == 3:
        # Opção: Sair do Sistema
        cabecalho(' \033[31mSaindo do Sistema...\033[m')
        sleep(2)
        break
    else:
        # Tratamento para opções inválidas
        print(('\033[31mErro! Digite um número inteiro válido.\033[m'))
        sleep(2)

