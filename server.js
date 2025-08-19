
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    brand: {
      name: 'Indovate Technologies',
      tagline: 'Where Reliability Meets Reinvention'
    }
  });
});

app.post('/subscribe', express.json(), (req, res) => {
  const { email } = req.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email.' });
  }
  console.log(`New subscription: ${email}`);
  return res.json({ message: 'Thanks! We will notify you soon.' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
