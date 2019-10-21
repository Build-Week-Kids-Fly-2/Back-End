
exports.up = function(knex) {
    return knex.schema.createTable('user_trips', tbl => {
      tbl.increments();
  
      // FK for users table
      tbl.integer('user_id', 10)
          .unsigned() // << forces integer to be positive
          .notNullable()
          .references('id') // < which column is being referenced?
          .inTable('users') // << reference the column above in which table?
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  
          // FK for trips table
      tbl.integer('trip_id', 10)
          .unsigned() // << forces integer to be positive
          .notNullable()
          .references('id') // < which column is being referenced?
          .inTable('trips') // << reference the column above in which table?
          .onUpdate('CASCADE') // << updates all referencing records
          .onDelete('CASCADE'); // << deletes all referencing records
  
      tbl.string('airport', 128)
          .notNullable();
  
      tbl.string('airline', 128)
          .notNullable();
  
      tbl.string('flight-number', 128)
          .notNullable();
  
      tbl.string('departure-time', 128)
          .notNullable();
  
      tbl.integer('carry-on-bags', 3)
          .notNullable();
  
      tbl.integer('checked-bags', 3)
          .notNullable();
  
      tbl.integer('children', 3)
          .notNullable();
  
      tbl.time('arrival-time', { precision: 6 })
          .notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trips')
  };
  