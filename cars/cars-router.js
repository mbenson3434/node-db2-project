const express = require('express');
const { where } = require('../data/dbConfig');
// database access using knex
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
    // get list of accounts from database
    // SELECT * FROM db
    db.select('*')
        .from('cars')
        .then(cars => {
            res.status(200).json({ data: cars });
        })
        .catch(error => {
            handleError(error, res)
        });
    // return the list of accounts
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.select('*')
        .from('cars')
        .where({ id })
        .first()
        .then(cars => {
            res.status(200).json({ data: cars });
        })
        .catch(error => {
            handleError(error, res)
        });
}); 

router.post('/', (req, res) => {
    const carData = req.body

    db('cars')
        .insert(carData, "id")
        .then(ids => {
            db('cars')
                .where({ id: ids[0] })
                .first()
                .then(cars => {
                    res.status(200).json({ data: cars });
                })

        })
        .catch(error => {
            handleError(error, res)
        });
});

module.exports = router;