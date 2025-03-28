require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeModel = require("./employe");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      return callback(null, origin);
    },

    credentials: true,
  })
);
app.use(express.json());

try {
  mongoose.connect(
  "mongodb+srv://login:login@login.0pis22k.mongodb.net/?retryWrites=true&w=majority&appName=login"
);
  console.log("Connected to MongoDB");
}catch(err) {
  console.error("Could not connect to MongoDB", err);
  process.exit();
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect password");
      }
    } else {
      res.json("User not found");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeModel.create(req.body)
    .then((emplyees) => res.json(emplyees))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
