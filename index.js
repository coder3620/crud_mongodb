const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.json({ status: 200, message: 'API is working' });
});

async function startServer() {
  try {
      await mongoose.connect('mongodb://localhost:27017/demo_mongo');
      console.log('Database connected successfully');
      app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
      });
  } catch (err) {
      console.error('Database connection failed', err);
      process.exit(1);
  }
}

startServer();
