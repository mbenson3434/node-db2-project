
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '4Y1SL65848Z411439', make: 'toyota', model: 'camry', mileage: 12000, transmission: 'automatic', titleStatus: 'salvage' },
        { vin: '4Y1SL65555Z411439', make: 'honda', model: 'civic', mileage: 289000, transmission: 'manual', titleStatus: 'clear' }
      ]);
    });
};
