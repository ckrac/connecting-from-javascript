const settings = require("./settings.json"); // settings.json

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

const firstName = process.argv[2];
const lastName = process.argv[3];
const birthdate = process.argv[4];

knex('famous_people')
.insert({first_name: `${firstName}`, last_name: `${lastName}`, birthdate: `${birthdate}`})
// .returning(['first_name'])
.asCallback(function(err, rows) {

  if (err) return console.error(err);
  console.log(`Inserted ${firstName} ${lastName} to famous_people`);
  process.exit();
});
