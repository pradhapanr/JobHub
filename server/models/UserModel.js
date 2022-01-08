import express from "express";
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone_number: String,
  dob: String,
  location: String,
  core_skills: [String],
  secondary_skills: [String],
  experience: Number,
  salary: Number,
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
