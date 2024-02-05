# Importação de bibliotecas necessárias
import pygame  # Biblioteca para desenvolvimento de jogos
import sys  # Biblioteca para interação com o sistema operacional
import random  # Biblioteca para geração de números aleatórios

# Inicialização do Pygame
pygame.init()

# Configurações do jogo
largura, altura = 1200, 600  # Dimensões da tela do jogo
tamanho_cobra = 10  # Tamanho de cada segmento da cobra
velocidade = 5  # Velocidade de movimento da cobra

# Cores definidas em formato RGB
cor_cobra = (0, 245, 0)  # Cor verde para a cobra
cor_comida = ("#D9D919")  # Cor vermelha para a comida
cor_fundo = ("#C0C0C0")  # Cor de fundo da tela

# Criação da janela do jogo
tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption("Jogo da Cobrinha")

# Função principal do jogo
def jogo_da_cobrinha():
    cobra = [(largura // 2, altura // 2)]  # Posição inicial da cabeça da cobra no centro da tela
    direcao = (0, 0)  # Direção inicial da cobra
    comida = criar_comida()  # Gera a posição inicial da comida

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.KEYDOWN:
                # Captura eventos de teclado para alterar a direção da cobra
                if event.key == pygame.K_UP and direcao != (0, 1):
                    direcao = (0, -1)
                elif event.key == pygame.K_DOWN and direcao != (0, -1):
                    direcao = (0, 1)
                elif event.key == pygame.K_LEFT and direcao != (1, 0):
                    direcao = (-1, 0)
                elif event.key == pygame.K_RIGHT and direcao != (-1, 0):
                    direcao = (1, 0)

        # Atualiza a posição da cabeça da cobra com base na direção
        cobra[0] = (cobra[0][0] + direcao[0] * tamanho_cobra, cobra[0][1] + direcao[1] * tamanho_cobra)

        # Verifica colisão com as bordas da tela
        if cobra[0][0] < 0 or cobra[0][0] >= largura or cobra[0][1] < 0 or cobra[0][1] >= altura:
            pygame.quit()
            sys.exit()

        # Verifica colisão com a própria cobra
        if cobra[0] in cobra[1:]:
            pygame.quit()
            sys.exit()

        # Verifica colisão com a comida
        if cobra[0] == comida:
            cobra.append((-1, -1))  # Adiciona uma nova parte à cobra
            comida = criar_comida()  # Gera uma nova posição para a comida

        # Atualiza a tela
        tela.fill(cor_fundo)  # Preenche a tela com a cor de fundo
        desenhar_cobra(cobra)  # Desenha a cobra na tela
        desenhar_comida(comida)  # Desenha a comida na tela
        pygame.display.flip()  # Atualiza a tela visível

        # Ajusta a velocidade do jogo
        pygame.time.Clock().tick(velocidade)

# Função para desenhar a cobra na tela
def desenhar_cobra(cobra):
    for parte in cobra:
        pygame.draw.rect(tela, cor_cobra, (parte[0], parte[1], tamanho_cobra, tamanho_cobra))

# Função para criar comida em uma posição aleatória
def criar_comida():
    x = random.randrange(0, largura, tamanho_cobra)
    y = random.randrange(0, altura, tamanho_cobra)
    return x, y

# Função para desenhar a comida na tela
def desenhar_comida(comida):
    pygame.draw.rect(tela, cor_comida, (comida[0], comida[1], tamanho_cobra, tamanho_cobra))

# Inicia o jogo chamando a função principal
jogo_da_cobrinha()
