const Router = require("express").Router();
const {
  getUserById,
  getemployee,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/employee");

Router.get("/get_all_employees", getemployee);
Router.get("/employee/:id", getUserById);
Router.post("/employee", createUser);
Router.put("/employee/:id", updateUser);
Router.delete("/employee/:id", deleteUser);

module.exports =  Router ;
