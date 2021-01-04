const userRoute = require('express').Router();

const insertUser = require('../controllers/insertUser');
const getUser = require('../controllers/getUser');
const deleteUser = require('../controllers/deleteUser');
const updateUser = require('../controllers/updateUser');

userRoute.post('/user', insertUser);
userRoute.get('/user', getUser);
userRoute.delete('/user/:id', deleteUser);
userRoute.put('/user/:id', updateUser);

module.exports = userRoute;