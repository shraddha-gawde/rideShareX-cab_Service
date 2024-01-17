const express = require("express");
const { connection } = require("./db");
const { carDataRouter } = require("./routes/carData.route");
const app = express();

const cors = require("cors")
carDataRouter.use(cors())

app.use("/carData", carDataRouter)
// connecting to server and DB
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log("Server Started");
  } catch (error) {
    console.log(error);
  }
});