const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://iamashish1604_db_user:30GrZvi8nhpO7O3M@namastenode.kutb2oe.mongodb.net/devTinder");
}

module.exports = connectDB;