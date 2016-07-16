var express = require('express');
var router = express.Router();
var knex = require("../db/knex");
var helpers = require("../helpers/authHelpers");
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

// router.use(helpers.currentUser);
//index 
router.get('/', helpers.ensureAuthenticated, (req, res) => {
    knex('users').then((users) => {
        res.render('index', { users });

    });

});
//NEW

router.get('/new', (req, res) => {
    res.render('new'); //if there was a users folder in vies it would be users/new
});


//sign up user
router.get('/signup', (req, res) => {
    // res.send("MADE IT");
    res.render('signup');
});


//login
router.get('/login', (req, res) => {
    res.render("login");
});

//logout
router.get('/logout', (req, res) => {
    req.session = null,
        res.redirect('/users/login');
});

//edit user
router.get('/:id/edit', (req, res) => {
    knex('users').where({ id: req.params.id }).first().then((user) => {
        res.render('edit', { user });

    });

});

//show
router.get('/:id', (req, res) => {
    knex('users').where({ id: req.params.id }).first().then((user) => {
        res.render('show', { user });

    });

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

router.delete('/:id', (req, res) => {
    knex('users').del().where({ id: req.params.id }).then(() => {
        res.redirect("/users");
    });
});


//re hashed 
// router.put('/:id', (req, res) => {
// knex('users').update(req.body.user).where("id",req.params.id).then(() =>{
//   res.redirect('/users');
// });

// });
// res.render()
// });
// router.delet('/:id', (req, res) => {
// res.render()
// });


module.exports = router;
