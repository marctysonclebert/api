require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", require("./routes/UserRouter"));

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on("error", () => console.log(`Error connecting to the database...`))
  .once("open", () => {
    app.listen(port, () => {
      console.log(`Server is running http://localhost:${port}`);
    });
  });
