import express from "express";

export const getText = async (req, res) => {
  res.status(200).json({ message: "fuck u" });
};
