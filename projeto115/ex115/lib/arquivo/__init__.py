from ex115.lib.interface import *

# Função que verifica se o arquivo existe
def arquivoExiste(nome):
    try:
        a = open(nome, 'rt')  # Tenta abrir o arquivo em modo de leitura de texto
        a.close()
    except FileNotFoundError:
        return False  # Retorna False se o arquivo não for encontrado
    else:
        return True  # Deveria ser 'return True' - retorna True se o arquivo existir

# Função que cria um arquivo se ele não existir
# Função que cria um arquivo se ele não existir ou o sobrescreve se já existir
def criarAquivo(nome):
    try:
        # Tenta abrir o arquivo em modo de escrita de texto ('wt+')
        # O '+' indica que o arquivo será criado se não existir e pode ser lido ou atualizado
        a = open(nome, 'wt+')
        a.close()
    except:
        # Exibe uma mensagem em caso de erro na criação ou abertura do arquivo
        print('Houve um erro na criação ou abertura do arquivo!')
    else:
        # Exibe uma mensagem se o arquivo for criado ou aberto com sucesso
        print(f'Arquivo {nome} criado ou aberto com sucesso!')


# Função que lê o conteúdo de um arquivo e exibe na tela
def lerAquivo(nome):
    try:
        a = open(nome, 'rt')  # Tenta abrir o arquivo em modo de leitura de texto
    except:
        print('Erro ao abrir arquivo!')  # Exibe uma mensagem em caso de erro ao abrir o arquivo
    else:
        cabecalho('Pessoas Cadastradas:')  # Chama a função cabecalho para exibir um cabeçalho
        for linha in a:
            dado = linha.split(';')  # Divide a linha em partes usando ';' como delimitador
            dado[1] = dado[1].replace('\n', '')  # Remove o caractere de nova linha da segunda parte
            print(f'{dado[0]:<30}{dado[1]:>3} anos')  # Exibe o nome e a idade formatados

# Função que cadastra uma nova pessoa no arquivo
def cadastrar(arquivo, idade, nome):
    try:
        a = open(arquivo, 'at')  # Tenta abrir o arquivo em modo de anexar texto
    except:
        print('Houve um erro na abertura do arquivo')  # Exibe uma mensagem em caso de erro ao abrir o arquivo
    else:
        try:
            a.write(f'{nome};{idade}\n')  # Escreve os dados no arquivo no formato 'nome;idade'
        except:
            print('Houve um erro na hora de escrever os dados!')  # Exibe uma mensagem em caso de erro ao escrever os dados
        else:
            print(f'Novo registro de {nome} adicionado.')  # Exibe uma mensagem se os dados forem adicionados com sucesso
        a.close()  # Fecha o arquivo






