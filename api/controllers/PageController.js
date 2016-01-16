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
        {route: 'position', name: 'Positioning'},
        {route: 'display', name: 'Display'},
        {route: 'color', name: 'Colors'},
        {route: 'sizing', name: 'Sizing'},
        {route: 'box-model', name: 'Box Model'},
        {route: 'border', name: 'Borders'},
        {route: 'overflow', name: 'Overflow'},
        {route: 'font', name: 'Font Styling'},
        {route: 'text', name: 'Text Styling'},
        {route: 'float', name: 'Floats'},
    ];


    res.view({ route: param, navs: navs });
  }

};

