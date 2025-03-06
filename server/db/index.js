
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://eniolaadebayo24:Divine120@cluster0.fu3os.mongodb.net/').then(() => console.log('conected mongo db')).catch((e) => console.log(e));
