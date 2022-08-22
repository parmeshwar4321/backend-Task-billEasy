const knex = require("../config/dbConfig");

const getdepartment = (request, response) => {
  knex
    .select("*")
    .from("departments")
    .then((data) => {
      response.json({ data });
    })
    .catch((er) => {
      response.json({ message: er });
    });
};
const createDepartment = (request, response) => {
  const { department_name, department_location } = request.body;
  knex("departments")
    .insert({ department_name, department_location })
    .then((data) => {
      response.send({ msg: "Department  added successfully", success: true });
    })
    .catch((er) => {
      response.json({ message: er });
    });
};

const updateDepartment = (request, response) => {
  const id = parseInt(request.params.id);
  const { first_name, cin } = request.body;
  knex("departments")
    .where("id", "=", id)
    .update({
      cin,
      first_name,
    })
    .then((data) => {
      response.send("employee updated successfully");
    })
    .catch((er) => {
      response.json({ message: er });
    });
};

const deleteDepartment = (request, response) => {
  const id = parseInt(request.params.id);

  knex("departments")
    .where("id", id)
    .del()
    .then((data) => {
      response.send("employee deleted successfully");
    })
    .catch((er) => {
      response.json({ message: er });
    });
};

module.exports = {
  getdepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};

