const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('../database/models/user')
require('../database/index.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact',(req, res) => {
    console.log('DATA ==>', req.body);
    
    const user = req.body;

    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.phoneNumber = user.phoneNumber;
    newUser.shouldAddToNewsletter = user.shouldAddToNewsletter;

    newUser.save((err, data) => {
        if (err) {
            res.send({
                saved: false
            })
        }
        res.send({
            saved: true
        })
    })
})

app.use((req, res) => {
    console.log('holla');
    
    res.send(404);
});

app.listen(3000);