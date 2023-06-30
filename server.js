const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const corsOptions = require('./config/corsOption');
const PORT= process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
const path=require("path");
const router = require("./routes/route");

dotenv.config();


const link ="mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/Webspire";
mongoose.connect(process.env.MONGODB_URI || link ,()=> console.log("connected to db"));
app.use("", router);
// --------------------------deployment------------------------------




// --------------------------deployment------------------------------


app.listen(PORT, function () {
  console.log("App is listening on port 3001");
});
