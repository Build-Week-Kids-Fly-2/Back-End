
exports.up = function(knex) {
    return knex.schema.createTable('user_trips', tbl => {
      tbl.increments();
  
      // FK for users table
      tbl.integer('user_id', 10)
          .unsigned() // << forces integer to be positive
        //   .notNullable()
          .references('id') // < which column is being referenced?
          .inTable('users') // << reference the column above in which table?
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  
          // FK for trips table
      tbl.integer('trip_id', 10)
          .unsigned() // << forces integer to be positive
        //   .notNullable()
          .references('id') // < which column is being referenced?
          .inTable('trips') // << reference the column above in which table?
          .onUpdate('CASCADE') // << updates all referencing records
          .onDelete('CASCADE'); // << deletes all referencing records
  
      tbl.string('airport', 128)
          .notNullable();
  
      tbl.string('airline', 128)
          .notNullable();
  
      tbl.string('flightNumber', 128)
          .notNullable();
  
      tbl.string('departureTime', 128)
          .notNullable();
  
      tbl.integer('carryOnBags', 3)
          .notNullable();
  
      tbl.integer('checkedBags', 3)
          .notNullable();
  
      tbl.integer('children', 3)
          .notNullable();
  
      tbl.boolean('arrived', 2)
          .notNullable();

        tbl.boolean('en_route', 2)
            .notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_trips')
  };
  