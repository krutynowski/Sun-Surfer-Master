
exports.up = function(knex, Promise) {
 return knex.schema.createTable('public_spaces',function(table){
   table.increments();
   table.string('name');
   table.float('latitude');
   table.float('longitude');
   table.integer('zIndex')
   table.text('address');
   table.string('hours');
   table.text('description');
   table.string('restrooms');
   table.integer('user_id').unsigned().index().references('users.id').onDelete('cascade');
   table.timestamps();

   }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('public_spaces');
};
