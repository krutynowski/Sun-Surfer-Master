exports.up = function(knex, Promise) {
 return knex.schema.createTable('users',function(table){
   table.increments();
   table.text('photo');
   table.string('name');
   table.text('token');
   table.timestamps();
   }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
