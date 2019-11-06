const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testnodeexpress', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection ok!')
}).catch( err => {
    console.log('Database connection fails');
})