const userRoute = require('express').Router();

const insertUser = require('../controllers/insertUser');
const getUser = require('../controllers/getUser');
const deleteUser = require('../controllers/deleteUser');
const deleteBulkUser = require('../controllers/deleteBulkUser');
const updateUser = require('../controllers/updateUser');

userRoute.post('/user', insertUser);
userRoute.get('/user', getUser);
userRoute.put('/user/:id', updateUser);
userRoute.delete('/user/:id', deleteUser);
userRoute.delete('/user/:id', deleteBulkUser);


module.exports = userRoute;