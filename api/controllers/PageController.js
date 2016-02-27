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
        {route: 'show', name: 'Show / Hide'},
        {route: 'fade', name: 'Fade In / Fade Out'},
        {route: 'slide', name: 'Slide Down / Slide Up'},
        {route: 'classes', name: 'CSS Classes'},
        {route: 'styles', name: 'CSS Styling'},
        {route: 'dimensions', name: 'Dimensions'},
        {route: 'elements', name: 'Creating Elements'},
    ];


    res.view({ route: param, navs: navs });
  }

};

