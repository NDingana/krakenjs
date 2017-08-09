'use strict';


/*
 Routes and logic

 Any .js file that is found in this folder will be automatically scanned for route definitions.
 The best practice for Kraken applications is to take advantage of this feature by grouping similar paths into
 separate files. (e.g. /user, /user/new and user/profile should exist within controllers/user.js)
 This ensures that your application grows in an orderly fashion.

 Kraken moves the routing logic into separate files in the controllers folder, allowing you to group routes by functionality.


 New to 1.x, your controllers are given an instance of your top-level router instead of the app instance,
 and routes are automatically determined for you based on folder-structure.
 FFor example, if we wanted to have a number of routes that start with /users, simple drop this in /controllers/users/index.js:

 With 1.x, route registration is supercharged and very flexible. Check out express-enrouten to learn more.

Calling yo kraken:controller users would be enough to generate the basis for that file.
Want to register routes that begin with /users/all? yo kraken:controller users/all is the command you're looking for.

 Route registration is highly customizable. If you're interested in trying a different behavior,
 be sure to check out the module that takes care of it in kraken: express-enrouten.
*/

module.exports = function (router) {
    // notice that my route is '/' but I respond to '/users'
    router.get('/', function (req, res) {
        res.send('you can find me at /users');
    });

    router.get('/new', function (req, res) {
        res.send('You can find me at /users/new');
    });

    router.get('/all', function (req, res) {
        res.send('You can find me at /users/all');
    });
};/**
 * Created by dinga on 8/6/2017.
 */
