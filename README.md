# iptv-manager-pro
Painel completo de gerenciamento de clientes IPTV com rastreamento de vencimento, status em tempo real e assistente de renovação com IA.

## 🌐 Acesse Online

**[Visite o site em produção aqui!](https://qrcodematrix.github.io/iptv-manager-pro/)**

O aplicativo está hospedado no GitHub Pages e funciona 100% online em seu navegador.

### PIN de Acesso Padrão
- **PIN:** `9973`

## ✨ Funcionalidades Principais

- ✅ **Dashboard Completo** - Visão geral de clientes ativos, vencendo e vencidos
- ✅ **Gerenciamento de Clientes** - Adicionar, editar, remover e buscar clientes
- ✅ **Rastreamento de Vencimento** - Indicadores visuais e cálculo automático de dias
- ✅ **Assistente IA** - Gerador de mensagens de cobrança com Google Gemini
- ✅ **Segurança Local** - Autenticação com PIN
- ✅ **Backup de Dados** - Exporte/importe em JSON
- ✅ **Renovação Rápida** - Adicione dias (30, 90, 180, 365) com um clique

## 🔧 Tecnologias

- **React 19** com TypeScript
- **Tailwind CSS** para estilos
- **Google Gemini API** para IA
- **Vite** como bundler
- **GitHub Pages** para hospedagem

- **Google Gemini API** para IA
- **GitHub Pages** para hospedagem

## 🚀 Como Usar

### Acesso Online
1. Acesse [https://qrcodematrix.github.io/iptv-manager-pro/](https://qrcodematrix.github.io/iptv-manager-pro/)
2. Digite o PIN: `9973`
3. Pronto! Você pode começar a gerenciar seus clientes

### Instalação Local

```bash
# 1. Clone o repositório
git clone https://github.com/QRCodeMatrix/iptv-manager-pro.git
cd iptv-manager-pro

# 2. Instale as dependências
npm install

# 3. (Opcional) Configure a API do Google Gemini
# Crie um arquivo .env na raiz do projeto
echo 'VITE_GOOGLE_GEMINI_API_KEY=sua_chave_aqui' > .env

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

## 📋 Dados e Segurança

- **Armazenamento**: Todos os dados são salvos localmente no `localStorage` do navegador
- **Não há servidor externo** - Seus dados permanecem com você
- **Backup**: Use a função de exportação para baixar um arquivo JSON com seus dados
- **Restauração**: Importe o arquivo JSON para restaurar seus dados em outro navegador

## 🔐 PIN Padrão

O PIN de acesso padrão é: **9973**

Você pode alterar o PIN nas configurações do aplicativo.

## 🙋 Suporteão

Para relatar problemas ou sugerir melhorias, abra uma [issue no GitHub](https://github.com/QRCodeMatrix/iptv-manager-pro/issues).

## 📝 Licença

Este projeto é para uso pessoal e privado.

---

**Desenvolvido com ❤️ por QRCodeMatrix**
