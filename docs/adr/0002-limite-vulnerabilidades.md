# 0002 — Limite de vulnerabilidades no CI

- Status: proposto (confirmar após consultar os alertas reais)
- Data: 25/11/2026

## Contexto
O CI existente executa npm audit --audit-level=critical. Express é dependência de produção; Jest, Supertest e ESLint são ferramentas de desenvolvimento. A exposição de cada alerta deve ser analisada no grafo de dependências.

## Decisão
Proposta: manter critical temporariamente, com alertas e atualizações de segurança do Dependabot habilitados. Antes de aceitar o risco, registrar os alertas high encontrados, dependências afetadas e exposição em produção. Se houver risco high relevante em produção, elevar o gate a high ou corrigir a dependência antes de aceitar.

## Alternativas consideradas
Bloquear high desde já reduz exposição, mas pode interromper a integração por problemas de ferramentas de desenvolvimento; aceitar sem prazo elimina a rastreabilidade do risco.

## Consequências
Críticas bloqueiam o CI. Alertas inferiores não são automaticamente ignorados. Revisar a decisão em até sete dias após a aceitação e após qualquer novo alerta high ou critical. Registrar responsável, resultado da consulta e data efetiva antes de marcar o ADR como aceito.
