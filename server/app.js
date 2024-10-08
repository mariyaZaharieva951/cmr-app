const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pdf = require('pdfkit');  

const app = express();

app.use(cors({
  origin: 'https://crispy-broccoli-x77v6rw7x9q36qwv-3000.app.github.dev', 
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'], 
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('CMR App Server is running');
});

app.options('/generate-pdf', cors());

app.post('/generate-pdf', (req, res) => {
  console.log('SERVER')
  const formData = req.body; 
  console.log('сървър', formData) 

  
  const doc = new pdf();
  let filename = 'cmr.pdf';

  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

 
  doc.text(`CMR Document`, { align: 'center' });
  doc.text(`Input1: ${formData.input1}`, { align: 'left' });
  doc.text(`Input2: ${formData.input2}`, { align: 'left' });
  // 
  doc.text(`Input23: ${formData.input23}`, { align: 'left' });

  
  doc.pipe(res);
  doc.end();
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});