# 🧪 Teste Técnico – Automação Cypress

Funcionalidade: Adicionar um produto ao carrinho

Este projeto contém a automação da funcionalidade Adicionar um produto específico ao carrinho, utilizando o site de demonstração:

👉 http://lojaebac.ebaconline.art.br/

🚀 Tecnologias

Cypress

Page Objects Pattern

Custom Commands

## 📋 Pré-requisitos

- **Node.js** versão **24.11.1**
- **npm** (vem junto com o Node.js)
- **Git Bash** (recomendado no Windows)

## 🚀 Como iniciar

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio-cypress.git
   cd seu-repositorio-cypress
   ```
2. **Instalar dependências**
   ```bash
   npm install
   ```
3. **Abrir o Cypress**
   ```bash
   npx cypress open
   ```
4. **Abrir o Cypress**
   ```bash
   npx cypress run
   ```

## ✅ Cenários Automatizados

1. Adicionar um produto específico ao carrinho

Garante o fluxo essencial do e-commerce: buscar o produto, acessar a página, selecionar variações e adicionar ao carrinho sem erros.

2. Selecionar variações obrigatórias (cor/tamanho)

Valida que opções obrigatórias aparecem e podem ser selecionadas corretamente — comum em qualquer produto com atributos.

3. Exibir mensagem de confirmação após adicionar

Assegura que o usuário recebe feedback visual de sucesso, evitando falhas silenciosas.

4. Redirecionar para o carrinho ao clicar em “Ver carrinho”

Confirma que a navegação pós-adicionar está funcionando e leva à página correta.

5. Validar produto no carrinho

Garante que o item exibido no carrinho corresponde exatamente ao que foi selecionado.
