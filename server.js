const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const employee = require("./routes/employee");
const department = require("./routes/department");
var corsOptions = {
  Origin: "['http://localhost:3000]",
  optionsSuccessStatus: 200,
}; // For legacy browser support
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", employee);
app.use("/api", department);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
