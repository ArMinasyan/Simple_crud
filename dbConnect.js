const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}, err => {
    if (!err) console.log('Connected');
    else throw err;
});

