const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// const touristSpots = require("./data/touristSpots.json");

app.get("/", (req, res) => {
  res.send("Go pro server is running..");
});

app.listen(port, () => {
  console.log(`Go Pro server is running on port ${port}`);
});
