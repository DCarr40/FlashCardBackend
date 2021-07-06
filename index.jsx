const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://DCarr40:Y8q5tFUzq56ZY9d@cluster0.qms4x.mongodb.net/FlashCardDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connect to FlashCardDB...'))
    .catch((error) => console.log(`Couldn\'t connect to FlashCardDB. Error: ${err}`));
