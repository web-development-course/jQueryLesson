/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function (req, res, next) {
    var param = req.allParams();

    var navs = [
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
        {route: 'position', name: 'Position'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Color'},
    ];


    res.view({ route: param, navs: navs });
  }

};

