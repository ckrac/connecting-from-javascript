// This module returns a function that receives the database connection
// inside the `client` argument
module.exports = function(client) {

  const findByName = function(name, callback) {
    const query = `SELECT * from famous_people WHERE first_name LIKE '%${name}%' OR last_name LIKE '%${name}%';`;
    client.query(query, callback);
  }

  return {
    findByName,
  }

}
