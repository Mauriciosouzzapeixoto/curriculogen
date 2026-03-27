# ⚡ Guia de Engenharia: CurrículoGen (Powered by Linhagem SPARK)
> **Directiva para o Windsurf:** Este software é propriedade intelectual da Linhagem SPARK. O foco visual da interface é o LOGOTIPO INCLUSIVO (Acessibilidade). A marca SPARK deve constar apenas nos metadados e comentários de código.

---

## 🛠️ ETAPA 1: Debugging & Refino de Engenharia
*Foco: Estabilidade técnica e interface limpa.*

- [x] **Interface Visual (UI):**
    - [x] Garantir que o `Logotipo Inclusivo` (Símbolo de Acessibilidade) esteja centralizado ou alinhado no cabeçalho.
    - [x] **Restrição:** NÃO inserir a logo visual da Linhagem SPARK na interface do usuário.
- [x] **Lógica de Temas Dinâmicos:**
    - [x] Validar a troca de `Labels` e `Placeholders` para as áreas: **TI**, **Saúde** e **Direito**.
    - [x] Conferir se os campos técnicos (CRM para saúde, OAB para direito) estão corretos.
- [x] **Módulo PcD / CID:**
    - [x] Garantir que o campo seja obrigatório e apareça com destaque no preview final.
- [x] **Otimização de Impressão (@media print):**
    - [x] Ocultar formulário de preenchimento.
    - [x] Exibir apenas o currículo no formato A4, com o Logotipo Inclusivo no topo.
    - [x] Botão de impressão deve sincronizar e chamar `window.print()` (ex.: `gerarPdfOuImprimir()`).

---

## 📝 ETAPA 2: Documentação de Arquitetura (`documento.md`)
*Foco: Registro de Propriedade Intelectual e Engenharia.*

- [x] **Assinatura de Código (Invisível ao Usuário):**
    - [x] Inserir no topo do `index.html`, `style.css` e `script.js`:
      `/* 2026 Linhagem SPARK | Desenvolvedor: Mauricio Peixoto (MSP) */`
- [x] **Ficha Técnica de Performance:**
    - [x] Documentar que o projeto é Vanilla JS (JavaScript Puro) para garantir leveza no **Redmi Note 11**.

---

## 🌐 ETAPA 3: Ativos & Metadados (Preparação Final)
*Foco: Experiência do Navegador.*

- [x] **Favicon & Título:**
    - [x] Configurar o ícone da aba (favicon) com o símbolo de acessibilidade.
    - [x] Definir o título da página como: `CurrículoGen`.
- [x] **Logo do cabeçalho:**
    - [x] Usar o arquivo `currículoGen.jpg` no cabeçalho junto do nome “CurrículoGen”.
- [x] **Rodapé Discreto:**
    - [x] Se houver assinatura no rodapé do site, usar apenas: "Desenvolvido por MSP".

---
**Status Final:** Código pronto para produção. O desenvolvedor (MSP) realizará o Deploy e a divulgação manualmente nas suas contas do LinkedIn.