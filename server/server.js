const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Configurația CORS să permită doar anumite origini
const corsOptions = {
  origin: 'https://chitisimarius.com', // Adresa ta publică
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: 'Serverul este activ!' });
});

app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});