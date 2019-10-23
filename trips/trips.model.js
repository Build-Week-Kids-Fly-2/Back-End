const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    update,
    remove
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

  function update(id, changes) {
    return db('trips')
      .where({ id })
      .update(changes)
  }

  function remove(id) {
    return db('trips')
      .where('id', id)
      .del();
  }

  
  