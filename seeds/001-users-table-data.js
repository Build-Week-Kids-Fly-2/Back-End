
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: `test@test.com`, password: 'password', fullName: 'Test Me', address: '123 here SanFrancisco CA', phone: '123-456-7890', localAirport: 'SFO'},
        {email: `backup@test.com`, password: 'password', fullName: 'Dont at Me', address: '123 anywhere Los Angeles CA', phone: '123-456-7890', localAirport: 'LAX'},
        {email: `tester@test.com`, password: 'password', fullName: 'Test Me', address: '123 where NY NY', phone: '123-456-7890', localAirport: 'JFK'},
      ]);
    });
};
