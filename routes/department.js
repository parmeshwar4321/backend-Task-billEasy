const Router = require("express").Router();
const {
  getdepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/department");

Router.get("/get_all_departments", getdepartment);
Router.post("/department", createDepartment);
Router.put("/department/:id", updateDepartment);
Router.delete("/department/:id", deleteDepartment);

module.exports = Router;
