'use strict';




/** Routes and logic

 Any .js file that is found in this folder will be automatically scanned for route definitions.
 The best practice for Kraken applications is to take advantage of this feature by grouping similar paths into
 separate files. (e.g. /user, /user/new and user/profile should exist within controllers/user.js)
 This ensures that your application grows in an orderly fashion.

 Kraken moves the routing logic into separate files in the controllers folder, allowing you to group routes by functionality.

 For example, a route for your home page, would use a controllers/index.js file that looks as follows:


 This file would define the routes and the logic for the home page. The advantage of keeping routes and logic segregated
 in individual files starts to show as the application grows.
 If something fails, it’s very easy to pinpoint where things went wrong.


 */

var IndexModel = require('../models/index');

module.exports = function (router)
{

    var model = new IndexModel();
    //route here goes to http://localhost:8000/
    router.get('/', function (req, res)
    {

        res.render('index', model);

    });

};
