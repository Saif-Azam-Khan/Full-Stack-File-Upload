require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileRouter = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use("/api", fileRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
