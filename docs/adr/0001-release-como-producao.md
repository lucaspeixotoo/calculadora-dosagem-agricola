# 0001 — Release do GitHub como produção simulada

- Status: proposto (confirmar após validação do CD)
- Data: 25/11/2026

## Contexto
A Calculadora de Dosagem Agrícola é uma API Express sem build, com histórico em memória. Não há servidor de produção provisionado para a atividade.

## Decisão
Empacotar o código versionado uma única vez no CD. Staging disponibiliza o artefato para teste; após aprovação em production, publicar tag SemVer, notas e ZIP em uma Release. Rollback promove uma Release anterior sem recompilar.

## Alternativas consideradas
Hospedar a API em servidor externo exigiria infraestrutura e configuração adicionais. GitHub Pages não executa uma API Express.

## Consequências
A baseline fica rastreável e pode ser recuperada sem alterar a main. A Release não constitui deploy de um servidor real nem restaura histórico em memória. A validação do pacote em staging e a aprovação precisam ser registradas.
