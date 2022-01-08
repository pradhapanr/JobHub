// server/index.js

import express from "express";
import route from "./routes/UserRoutes";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use(express.json({ limit: "30mb", extended: true }));

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
