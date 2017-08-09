'use strict';

var UsersModel = require('../models/users');


module.exports = function (router) {

    var model = new UsersModel();

    //route goes to /users
    router.get('/', function (req, res) {


        res.render('users', model);


    });

    //route goes to /users/all
    router.get('/all', function (req, res) {


        res.render('users/all', model);


    });
};
