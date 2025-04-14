# 📚 Sistema Logosófico de Educação - Portal de Matrículas

## 🛠 Tecnologias Utilizadas

**Frontend:**
- ![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=for-the-badge&logo=alpine.js&logoColor=black) - Framework JavaScript leve para interatividade
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) - Framework CSS utilitário
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) - Build tool e servidor de desenvolvimento

**Analytics:**
- ![Google Analytics](https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white) - Rastreamento de eventos e métricas

## 🚀 Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/heitorc1/xpe_sle.git
   cd xpe_sle
   ```

2. **Instale as dependências**
   ```bash
   npm install -g pnpm
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## ✨ Como Contribuir

1. **Crie um branch** para sua feature/correção:
   ```bash
   git checkout -b minha-feature
   ```

2. **Faça commit das mudanças** seguindo o padrão:
   ```bash
   git commit -m "feat: adiciona validação no formulário"
   ```

3. **Envie para o repositório remoto**:
   ```bash
   git push origin minha-feature
   ```

4. **Abra um Pull Request** descrevendo:
   - O problema/resolução
   - Screenshots (se aplicável)
   - Impacto nas métricas

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)
1. Conecte seu repositório na Vercel
2. O deploy é feito automaticamente ao subir alterações na branch main

### Opção 2: Deploy Manual
1. Gere os arquivos estáticos:
   ```bash
   pnpm run build
   ```
2. Envie a pasta `dist` para seu servidor

## 📊 Monitoramento Pós-Deploy
- Verifique eventos no [Google Analytics](https://analytics.google.com)
- Monitore erros no console
- Acompanhe métricas de performance no Lighthouse

## 📝 Licença
Este projeto está sob licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.