
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin')
  .set('FOREIGN_KEY_CHECKS', '=', 0)
  .truncate()
  .set('FOREIGN_KEY_CHECKS', '=', 1)
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {email: "admin1@kidsfly.com", password: "password", name: "Admin1", location: "SF", phone: "123-456-7890" },
        {email: "admin2@kidsfly.com", password: "password", name: "Admin2", location: "NY", phone: "123-456-7890" },
        {email: "admin3@kidsfly.com", password: "password", name: "Admin3", location: "SA", phone: "123-456-7890" },
      ], 'id');
    });
};
