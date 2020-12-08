
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('vin')
            .unique()
            .notNullable();
        tbl.text('make');
        tbl.text('model');
        tbl.integer('mileage');
        tbl.text('transmission');
        tbl.text('titleStatus');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
