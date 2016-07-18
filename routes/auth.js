const express = require("express");
// const passport = require('passport');
const knex = require("../db/knex");
const router = express.Router();

//login
router.get('/login', (req, res) => {
    res.render("login");
});

//logout
router.get('/logout', (req, res) => {
    req.session = null,
        res.redirect('/users/login');
});

//initial signup 

router.post('/signup', (req, res) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        bcrypt.hash(req.body.user.password, salt, (err, hash) => { //
            knex('users').insert({
                name: req.body.user.username,
                user_pasword: hash
            }).then(() => {
                res.redirect('/users');
            });
        });

    });

});
//login
router.post('/login', (req, res) => {
    knex('users').where({name: req.body.user.username}).first().then(user => {
        // is the username correct?
        if (user) {
            bcrypt.compare(req.body.user.password, user.user_pasword, (err, isMatch) => {
                console.log('isMatch!', isMatch);
                // is the password correct?
                if (isMatch) {
                  req.session.id = user.id
                  res.redirect('/users');
                  console.log('success!');
                } else {
                    //req.flash('logginMessage', 'Invalid username/password');
                    res.redirect('/users/login');
                    console.log('failing things');
                }
            });
        } else {
            //req.flash('logginMessage', 'Invalid username/password');
            res.redirect('/users/login');
        }
    });
});
module.exports = router;