require("dotenv").config();
const express = require("express");
const app = express();
const webRouter = require("./routes/web.router");

app.use(express.json());

app.use("/api", webRouter);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server up and running on PORT :", port);
}); 