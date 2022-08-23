const express = require("express");
require("dotenv/config")
const app = express();
const cors = require("cors");
const PORT = process.env.PORT||8080;

const employee = require("./routes/employee");
const department = require("./routes/department");
const middleware = require("./utils/middleware");

var corsOptions = {
  Origin: "['http://localhost:3000]",
  optionsSuccessStatus: 200,
}; // For legacy browser support
app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) =>
  res.send({ msg: "you are connected to application" })
);
app.use("/api", employee);
app.use("/api", department);

//errroHandelers
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
