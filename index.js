const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let customers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// Get all customers
app.get('/customers', (req, res) => {
  res.status(200).send(customers); 
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });