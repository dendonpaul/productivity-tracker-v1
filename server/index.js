//create express server
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Connection = require("./db/Connection");
const ActivityRouter = require("./routes/ActivityRouter");

const app = express();

app.use(cors());
app.use(express.json());
Connection();
app.get("/", (req, res) => {
  res.send("This is the API site for Productivity Tracker V1");
});
app.use("/api/", ActivityRouter);

app.listen(5001, () => {
  console.log("The server is running at 5001");
});
