# Festivite 🎉

**Festivite** é um gerador de convites digitais que permite criar convites personalizados para eventos com diferentes temas, cores e estilos.

## Tecnologias

- HTML5
- CSS3 / SCSS
- JavaScript (Vanilla)

## Como rodar o projeto

Este projeto é uma aplicação web estática (sem dependências de back-end ou gerenciadores de pacotes). Para executá-lo localmente, basta servir os arquivos por meio de um servidor HTTP simples.

### Pré-requisitos

Escolha **uma** das opções abaixo:

- **Python 3** (geralmente já instalado no Linux/macOS)
- **Node.js** (para usar o `npx`)
- Qualquer outro servidor HTTP local de sua preferência (ex.: extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VS Code)

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/d3vnicolas/festivite.git
   cd festivite
   ```

2. **Inicie um servidor local:**

   **Com Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Com Node.js (npx):**
   ```bash
   npx http-server -p 8000
   ```

3. **Acesse no navegador:**

   Abra [http://localhost:8000](http://localhost:8000) no seu navegador.

> **Atenção:** Não abra o arquivo `index.html` diretamente pelo sistema de arquivos (protocolo `file://`), pois alguns recursos podem não funcionar corretamente. Utilize sempre um servidor local.

## Funcionalidades

- Criação de convites digitais personalizados
- 12 temas disponíveis: Aniversário, Infantil, Formatura, Casamento, Chá de Bebê, Chá de Cozinha, Carnaval, Páscoa, São João, Halloween, Natal e Outros
- 11 opções de cores principais
- Modo claro e escuro
- Upload de banner personalizado
- Validação de formulário com feedback visual
