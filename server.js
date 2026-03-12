const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const schemeRoutes = require("./routes/schemes");
const complaintRoutes = require("./routes/complaints");
const landRoutes = require("./routes/land");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/govportal")
.then(()=>console.log("MongoDB Connected"));

app.use("/auth", authRoutes);
app.use("/schemes", schemeRoutes);
app.use("/complaints", complaintRoutes);
app.use("/land", landRoutes);

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
