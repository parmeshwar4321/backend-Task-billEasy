// require("dotenv/config");
const environment = "development";
const config = require("../knexfile")[environment];
const knex = require("knex")(config);
knex.schema
  .createTable("departments", function (table) {
    table.increments("id").primary();
    table.string("department_name");
    table.integer("count").notNullable().defaultTo(0);
    table.string("department_location");

    table.timestamps(true, true);
  })
  .createTable("employees", function (table) {
    table.increments("id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email").unique;
    table.string("position");
    table.integer("sallery");
    table.date("birth_date");
    table.date("hire_date");
    table.integer("department").unsigned();
    table.foreign("department").references("departments.id");

    table.timestamps(true, true);
  })
  .then((data) => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log("Table Already Exist!!");
  });

module.exports = knex;
