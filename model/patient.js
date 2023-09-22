const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: String,
    phone: Number,
    location: String
  }
);

const Patient = mongoose.model("Patients", patientSchema);

module.exports = Patient