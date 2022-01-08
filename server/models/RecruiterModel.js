import express from "express";
import mongoose from "mongoose";

const RecruiterSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone_number: String,
  dob: String,
  location: String,
  company: String,
});

const RecruiterModel = mongoose.model("Recruiters", RecruiterSchema);
export default RecruiterModel;
