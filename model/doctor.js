const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: String,
    specialty: String,
    availability: String,
    experience: Number,
    rating: mongoose.Types.Decimal128,
    avg_time: Number,
  },
  { Timestamp: true }
);

const Doctor = mongoose.model("Doctors", doctorSchema);

module.exports = Doctor