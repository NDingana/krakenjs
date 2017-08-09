'use strict';

/*
 Kraken follows a complete decoupling of application logic, data and presentation.
 The convention to follow is that any data model objects should be placed in this folder, along with any functionality
 that they require (Retrieval from a database, class specific functions, etc.)
 The basic application creates a models/index.js model that simply returns the application name for display.

*/

module.exports = function IndexModel()
{
    return {name: 'index'    };
};
