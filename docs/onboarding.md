# Onboarding — Calculadora de Dosagem Agrícola

## Instalação e execução
Pré-requisitos: Git, Node.js 22, npm e acesso ao GitHub.

```bash
git clone https://github.com/lucaspeixotoo/calculadora-dosagem-agricola.git
cd calculadora-dosagem-agricola
npm ci
node src/server.js
```

Em outro terminal, teste a API:

```bash
curl -X POST http://localhost:3000/calculos -H 'Content-Type: application/json' -d '{"areaHectares":10,"doseRecomendadaPorHectare":5}'
```

Esperado: HTTP 201 e dosagemTotal 50. O histórico é mantido em memória.

## Verificações locais

```bash
npm run lint
npm run test:coverage
npm run test:smoke
npm audit --audit-level=critical
```

Cobertura mínima global: 60%. O CI tem jobs de qualidade e dependências e o agregador CI OK.

## Fluxo de contribuição
Abra uma Issue, atualize a main e crie uma branch (substitua 123 pelo número real):

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/123-descricao
```

Faça uma alteração pequena, teste, adicione os arquivos e registre um commit convencional. Envie a branch e abra PR para main com título convencional e Closes #123 na descrição. Confira Checks, solicite revisão do par e aguarde CI OK antes do squash merge. Mudanças de alto risco passam pelo formulário CCM.

## CD e rollback
Após merge, Actions > CD mostra versão, pacote e staging. Baixe o artefato e teste. Quando houver nova versão, o responsável aprova production e a Release é publicada. Rollback recebe uma tag real de Release com ZIP e passa pelo mesmo gate; muda a versão oficial sem mudar a main. Não use Pages para esta API.

## Validação do guia
O par deve seguir o guia sem ajuda e abrir PR docs corrigindo um ponto confuso. Não registrar essa validação como realizada antes de ocorrer.
