/*global require, module,  __dirname */
/*jslint node: true */

'use strict';
// var traverse = {};

function Traverse(data){
  this.tree = data;
}
/*
 * build the methods via prototype
 * the first one is free
 * uncomment the code below, then remove this comment
 */

// Traverse.prototype.getAllNames = function(){};

/* exports the Class Traverse */
module.exports = Traverse;