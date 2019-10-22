// add a new trip to the user_trips table
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findById,
    find,
    adminFind
}

async function add(trip) {
const [id] = await db('user_trips').insert(trip, 'id')

return findMyId(id)
}

function findMyId(id) {
    return db('user_trips')
    .where({ id }).first()
}


function findById(id) {
    return db('trips')
    .where({ id }).first()
}

function find() {
    return db('user_trips').select('id', 'airport', 'departureTime', 'children');
}

function adminFind() {
    return db('user_trips').select('id','arrived', 'airport', 'children', 'carryOnBags');
}