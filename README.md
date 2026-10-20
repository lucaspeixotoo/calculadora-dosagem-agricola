# Jogo da Velha em C

Jogo da velha para dois jogadores, no terminal, escrito em C. Desenvolvido como atividade avaliativa da disciplina de Lógica de Programação (Católica SC).

## Recursos

- Dois jogadores (X e O) alternando jogadas
- Placar com vitórias de X, vitórias de O e empates
- Validação de entrada: letras, posições fora do intervalo e casas já ocupadas
- Opção de jogar novamente ao final de cada partida

## Como jogar

As posições são numeradas de 1 a 9:

```
1 2 3
4 5 6
7 8 9
```

A cada turno, digite o número da posição desejada.

## Como compilar e rodar

Requisito: compilador C (por exemplo, gcc).

```bash
git clone https://github.com/lucaspeixotoo/tic-tac-toe.git
cd tic-tac-toe
gcc main.c -o jogo
./jogo
```

No Windows (MinGW): `gcc main.c -o jogo.exe` e depois `jogo.exe`.

## Estrutura

Todo o código está em `main.c`: tabuleiro (matriz 3x3), verificação de vitória por linhas, colunas e diagonais, detecção de empate e laço de reinício.
