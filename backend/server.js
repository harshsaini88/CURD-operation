const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Cloud Database
const dbURI = 'mongodb+srv://admin:hHeT1EXntS8NWVJN@cluster0.rcluswo.mongodb.net/book_store?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// ... (Routes and server setup as before)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const itemRoutes = require('./routes/item.routes');
app.use('/items', itemRoutes);
