'use strict';
let Middlewares = require ('xena-middlewares');
let middlewares = new Middlewares();

middlewares.registerMiddleware((req, res, next) => {
  // some code
  req.iterator++;
  console.log ('step 1');
  next();  
}, 1);

middlewares.registerMiddleware((req, res, next) => {
  // some code
  setTimeout(() => {
    // some code
    req.iterator++;
    console.log ('step 2');
    next();
  }, 1000);
}, 2);

middlewares.registerMiddleware((req, res, next) => {
  // some code
  req.iterator++;
  console.log ('step 3');
  next();  
}, 3);

let router = {
  route: function(req, res) {
    console.log (req.iterator);
  }
};
let req = {
  iterator: 0
};
let res = {};

middlewares.onRequest(req, res, router.route, router);