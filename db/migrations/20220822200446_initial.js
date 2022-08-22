/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema
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
      });
  
    // function createGinIndex(table) {
    //   console.log(table);
    // return knex.raw(
    //   "CREATE INDEX modelgin ON public.prediction_models USING GIN (model_params)"
    // );
    // }
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("employees").dropTable("departments");
  };
  