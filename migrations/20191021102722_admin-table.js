
exports.up = function(knex) {
  return knex.schema.createTable('admin', tbl => {
      tbl.increments();

      tbl.string('email')
        .notNullable()
        .unique();

    tbl.string('password')
        .notNullable();

    tbl.string('name')
        .notNullable();

    tbl.string('location')
        .nullable();

    tbl.string('phone')
        .nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('admin')
};
