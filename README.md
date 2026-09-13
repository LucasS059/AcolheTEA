# 🧩 AcolheTEA - Painel Administrativo

Base frontend do painel de administração e despacho da plataforma AcolheTEA.

---

## 🛠️ Stack Tecnológica

### **Frontend**
* **React** (Biblioteca de interface de usuário)
* **Vite** (Build tool e servidor de desenvolvimento rápido)
* **React Router DOM** (Gerenciamento de rotas e navegação sem reload)
* **Bootstrap 5** (Estruturação de layout e utilitários CSS)
* **Lucide React** (Biblioteca de ícones vetoriais modernos)

### **Backend & Integrações**
* **Node.js** (Ambiente de execução JavaScript no servidor)
* **Express** (Framework HTTP para criação da API REST)
* **WhatsApp Evolution API** (Módulo de integração para atendimento e despachos)

### **Banco de Dados**
* **PostgreSQL** (Banco de dados relacional SQL robusto e escalável)
* **DBeaver** (Interface visual de gerenciamento e administração do banco)

---

## 💻 Ferramentas Necessárias

Antes de iniciar, instale no seu computador:

1. **[Node.js (versão LTS)](https://nodejs.org/)**: Motor de execução para o React e backend.
2. **[VS Code](https://code.visualstudio.com/)**: Editor de código recomendado.
3. **[Git](https://git-scm.com/)**: Para versionamento e envio dos códigos ao GitHub.
4. **[DBeaver](https://dbeaver.io/)**: Para conectar e gerenciar as tabelas do PostgreSQL.

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LucasS059/AcolheTEA.git
   ```
2. **Acesse a pasta da aplicação:**
  ```bash
  cd acolhetea
  ```
3. **Instale as dependências:**
   Entre na pasta onde se encontra o arquivo package.json, ex: cd frontend
  ```bash
  npm install
  ```
4. **Inicie o servidor de desenvolvimento:**
  ```bash
  npm run dev
  ```

5. Abra no navegador o endereço exibido no terminal (`http://localhost:5173`).

---

## 📁 Estrutura de Pastas

```text
src/
├── assets/             # Arquivos estáticos e vetores (ex: logo-tea.svg)
├── components/         # Componentes globais e reutilizáveis
│   └── Sidebar/        # Menu lateral fixo do sistema
├── pages/              # Telas da aplicação
│   ├── Login/          # Tela de autenticação inicial
│   └── Admin/          # Área restrita da gestão
│       ├── AdminLayout.jsx  # Layout pai com a Sidebar fixa
│       ├── Dashboard/       # Métricas e visão geral
│       ├── Viagens/         # Painel de despachos e corridas
│       ├── Motorista/       # Gestão e cadastro de motoristas
│       └── ConexaoWhats/    # Conexão da instância de WhatsApp
├── App.jsx             # Definição e controle das rotas
└── main.jsx            # Arquivo raiz do React

```

---

## 📌 Rotas da Aplicação

| Rota | Descrição |
| --- | --- |
| `/login` | Acesso administrativo |
| `/admin/dashboard` | Painel de controle e indicadores de operação |
| `/admin/viagens` | Monitoramento e despacho de corridas |
| `/admin/motorista` | Listagem e controle de condutores |
| `/admin/whatsapp` | Status da automação e bot de WhatsApp |

---
