const settings = require("./settings.json");

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const name = process.argv[2];

knex.select('*').from('famous_people')
.where('first_name', `${name}`)
.orWhere('last_name', `${name}`)
.asCallback(function(err, rows) {

  console.log(`node lookup_people.js ${name}`);
  console.log("Searching ...");

  if (err) return console.error(err);
  console.log(`Found ${rows.length} by the name '${name}':`);
  console.log(rows);
  process.exit();
});
// .disconnect();

