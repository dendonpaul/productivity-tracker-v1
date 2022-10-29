const mongoose = require("mongoose");

const Connection = () => {
  const DBUrl = process.env.DB_CONNECT;
  mongoose
    .connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB Connected successfully");
    });
};

module.exports = Connection;
