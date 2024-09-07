const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectToDb = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is listenig at port ${port}`);
});
