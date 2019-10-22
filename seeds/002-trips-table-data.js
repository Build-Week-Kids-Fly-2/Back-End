
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {name: 'Milano Italy'},
        {name: 'New York City'},
        {name: 'Cape Town South Africa'},
      ], 'id');
    });
};
