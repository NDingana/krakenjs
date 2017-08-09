'use strict';

var AllModel = require('../../models/all');


module.exports = function (router) {

    var model = new AllModel();

    //route here is /users/all
    router.get('/', function (req, res) {


        res.render('users/all', model);


    });

};
