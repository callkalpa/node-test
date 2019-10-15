const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

router.post('/', async (req, res) => {
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const users = await UserModel.findById(req.params.userId);
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;