
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.table('milestones', function(table){
      // table.increments();
      table.integer('famous_person_id').unsigned();
      table.foreign('famous_person_id').references('famous_people.id');
      // table.string('description');
      // table.date('date_achieved');
    })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
