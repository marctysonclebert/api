const express = require("express");

const port = process.env.PORT || 5000;

const app = express();

app.use("/users", require("./routes/UserRouter"));

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
