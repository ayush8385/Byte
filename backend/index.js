const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const {saveChats, getHistory} = require("./src/controllers/controllers");

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("here");
  res.send("App is Working");
});
app.post("/chats", saveChats);
app.get("/history:userId", getHistory);

if (mongoose.connection.readyState === 0) {
  mongoose
    .connect(process.env.REACT_APP_MONGODB_URI,{
        dbName:'chat_ai'
    })
    .then(() =>
      app.listen(8000, () => {
        console.log("Server connected on 8000");
      })
    )
    .catch((err) => console.log(err));
}
module.exports = app;
