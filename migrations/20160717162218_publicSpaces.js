
exports.up = function(knex, Promise) {
 return knex.schema.createTable('publicSpaces',function(table){
   table.increments();
   table.string('name');
   table.
   table.text('address');
   table.string('hours');
   table.text('description');
   table.string('restrooms');
   table.integer('users_id').unsigned().index().references('users.id').onDelete('cascade');
   table.timestamps();

   }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('publicSpaces');
};
