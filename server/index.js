const express = require('express');
const config = require('./config/dev');
const mongoose = require('mongoose');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals');


const app = express();
app.use('/api/v1/rentals', rentalRoutes);

mongoose.connect(config.DB_URL).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('I am server')
});


