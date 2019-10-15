const express = require('express');
const router = express.Router();
const PersonModel = require('../models/Person');

router.post('/', async (req, res) => {
    const person = new PersonModel({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        contactNumber: req.body.contactNumber
    });

    try {
        const result = await person.save();
        res.send(result);
    } catch (err) {
        res.send({ message: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const people = await PersonModel.find();
        res.send(people);
    } catch (err) {
        res.send({ message: err });
    }
});

router.get('/:personId', async (req, res) => {
    try {
        const people = await PersonModel.findById(req.params.personId);
        res.send(people);
    } catch (err) {
        res.send({ message: err });
    }
})

module.exports = router;