const mongoose = require("mongoose")
const url = "mongodb+srv://nikhilsirigineedi3:nikhil123@cluster0.zoa8fq0.mongodb.net/?retryWrites=true&w=majority"
exports.connect = ()=>{
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
}