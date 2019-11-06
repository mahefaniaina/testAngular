const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = schema({
    name: String,
    email: String,
    phoneNumber: String,
    shouldAddToNewsletter: Boolean
})

const Users = mongoose.model('users', userSchema)

module.exports = Users;