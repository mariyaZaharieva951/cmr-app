const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pdf = require('pdfkit');  

const app = express();

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'OPTIONS'],  
  allowedHeaders: ['Content-Type', 'Authorization'],  
  credentials: true, 
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('CMR App Server is running');
});

// app.options('', cors());

app.post('/generate-pdf', (req, res) => {
 
  const formData = req.body; 
  console.log('сървър', formData) 

  
  const doc = new pdf();
  let filename = 'cmr.pdf';

  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

 
  doc.text(`CMR Document`, { align: 'center' });
  doc.text(`Input1: ${formData.input1}`, { align: 'left' });
  doc.text(`Input2: ${formData.input2}`, { align: 'left' });
  doc.text(`Input3: ${formData.input3}`, { align: 'left' });
  doc.text(`Input41: ${formData.input41}`, { align: 'left' });
  doc.text(`Input42: ${formData.input42}`, { align: 'left' });
  doc.text(`Input5: ${formData.input5}`, { align: 'left' });
  doc.text(`Input6: ${formData.input6}`, { align: 'left' });
  doc.text(`Input10: ${formData.input10}`, { align: 'left' });
  doc.text(`Input11: ${formData.input11}`, { align: 'left' });
  doc.text(`Input12: ${formData.input12}`, { align: 'left' });
  doc.text(`Input13: ${formData.input13}`, { align: 'left' });
  doc.text(`Input14: ${formData.input14}`, { align: 'left' });
  doc.text(`Input15: ${formData.input15}`, { align: 'left' });
  doc.text(`Input16: ${formData.input16}`, { align: 'left' });
  doc.text(`Input17: ${formData.input17}`, { align: 'left' });
  doc.text(`Input18: ${formData.input18}`, { align: 'left' });
  doc.text(`Input19: ${formData.input19}`, { align: 'left' });
  doc.text(`Input20: ${formData.input20}`, { align: 'left' });
  doc.text(`Input211: ${formData.input211}`, { align: 'left' });
  doc.text(`Input212: ${formData.input212}`, { align: 'left' });

  
  doc.pipe(res);
  doc.end();
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});