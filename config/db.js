const mongoose = require("mongoose");
require('dotenv').config()

const URL = process.env.MONG_URI
async function connectToMongo() {
  try {
    await mongoose.connect(URL);
    console.log(`Connected to db....`);
  } catch (error) {
    console.error(`Failed To connect to db`, error);
  }
}

module.exports = connectToMongo;