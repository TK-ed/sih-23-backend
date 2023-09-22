const Doctor = require("../model/doctor");
const mongoose = require('mongoose')

const createDoc = async (req, res) => {
  try {
    const { name, specialty, availability, experience, rating, avg_time } =
      req.body;
    const newDoc = new Doctor({
      name: name,
      specialty: specialty,
      availability: availability,
      experience: experience,
      rating: rating,
      avg_time: avg_time,
    });
    newDoc.save();
    res.send(newDoc);
  } catch (err) {
    console.log(err);
  }
};

const getDocs = async (req, res) => {
  try {
    const datas = await Doctor.find();
    res.status(200).send(datas);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getBySpecialty = async (req, res) => {
  try {
    const doc = req.params.doc
    console.log(doc);
    const datas = await Doctor.find({ specialty: doc })
    res.send(datas)
  } catch (err) {
    console.log(err);    
  }
}

module.exports = { createDoc, getDocs, getBySpecialty };
