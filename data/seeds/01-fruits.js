
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {id: 1, name: 'apple', avg_weightOz: 17, delicious: true, color: 'red'},
        {id: 2, name: 'banana', avg_weightOz: 16.5, delicious: false, color: 'yellow'},
        {id: 3, name: 'orange', avg_weightOz: 19, delicious: true, color: 'orange'}
      ]);
    });
};
