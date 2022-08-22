const knex = require("../config/dbConfig");

const getemployee = (request, response) => {
  knex
    .select("*")
    .from("employees")
    .join("departments", "employees.department", "=", "departments.id")
    .then((data) => {
      response.json({ data });
    })
    .catch((er) => {
      response.json({ message: er });
    });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  knex.query(
    "SELECT * FROM employees WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
const createUser = (request, response) => {
  const {
    first_name,
    last_name,
    email,
    birth_date,
    position,
    hire_date,
    department,
    sallery,
  } = request.body;
  knex("employees")
    .insert({
      first_name,
      last_name,
      email,
      birth_date,
      hire_date,
      department,
      position,
      sallery,
    })
    .then((data) => {
      response.send({ message: "Employee  added successfully", success: true });
    })
    .catch((er) => {
      response.json({ message: er });
    });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { first_name, cin } = request.body;
  knex("employees")
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

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  knex("Users")
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
  getemployee,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
