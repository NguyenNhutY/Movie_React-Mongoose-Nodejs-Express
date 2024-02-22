const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routers/auth");
const userRoute = require("./routers/user");

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
    
  });
  app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(8101, () => {
  console.log("Backend server is running on port");
});
