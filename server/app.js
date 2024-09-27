const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

// За тестване
app.get('/', (req, res) => {
  res.send('CMR App Server is running');
});

// Стартиране
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});