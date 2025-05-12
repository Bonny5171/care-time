import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = process.env.PORT || 3000;

// Resolve o __dirname no ES Module (import syntax)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  // Servir arquivos estáticos do React build
  app.use(express.static(path.join(__dirname, 'build')));

  // Rota catch-all para SPA (React Router)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
