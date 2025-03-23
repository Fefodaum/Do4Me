// Seu código da IA aqui
const express = require('express');
const app = express();

// Configurações básicas do servidor
app.get('/', (req, res) => {
  res.send('Agente de IA está funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));