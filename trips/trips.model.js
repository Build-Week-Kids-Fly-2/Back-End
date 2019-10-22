const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
  };
  

  function find() {
    return db('trips').select('id', 'name');
  }
  

  function findBy(filter) {
    return db('trips').where(filter);
  }
  

  function findById(id) {
    return db('trips')
      .where({ id })
      .first();
  }

  
  