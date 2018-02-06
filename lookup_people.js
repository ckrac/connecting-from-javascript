const pg = require('pg');

const settings = require("./settings"); // settings.json

// what we'll be querying
const name = process.argv[2];

const client = new pg.Client(settings);

const findByName = require('./models/findName')(client);


client.connect((err) => {

  if (err) {
    return console.log('Something went wrong:', err)
  }

  findByName.findByName(name, (err, result) => {
    console.log(`node lookup_people.js ${name}`);
    console.log("Searching ...");

    if (err) {
      return console.log('Something went wrong:', err)
    }
    console.log(`Found ${result.rowCount} by the name '${name}':`);
    const arrName = result.rows;
    for (let row of arrName) {
      console.log(row);
    }

    client.end(); // Closes the connection and exits the app
  });

});
