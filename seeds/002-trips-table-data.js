
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips')
  .set('FOREIGN_KEY_CHECKS', '=', 0)
  .truncate()
  .set('FOREIGN_KEY_CHECKS', '=', 1)
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {name: 'Milano Italy'},
        {name: 'New York City'},
        {name: 'Cape Town South Africa'},
      ], 'id');
    });
};
