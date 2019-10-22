
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_trips').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_trips').insert([
        {user_id: 1, trip_id: 1, airport: "SFO", airline: "United", flightNumber: "KF200", departureTime: "12:20PM", carryOnBags: 2, checkedBags: 1, children: 2, arrived: 0, en_route: 0},
        {user_id: 2, trip_id: 2, airport: "LAX", airline: "South West", flightNumber: "KF201", departureTime: "12:20AM", carryOnBags: 1, checkedBags: 0, children: 1, arrived: 0, en_route: 0},
        {user_id: 3, trip_id: 3, airport: "JFK", airline: "Alaskan", flightNumber: "KF202", departureTime: "12:02PM", carryOnBags: 0, checkedBags: 1, children: 3, arrived: 0, en_route: 0},
      ]);
    });
};
