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
        {route: 'click', name: 'Click Event'},
        {route: 'set', name: 'Set / Get Content'},
        {route: 'elements', name: 'Creating Elements'},
        {route: 'show', name: 'Show / Hide'},
        {route: 'fade', name: 'Fade In / Fade Out'},
        {route: 'slide', name: 'Slide Down / Slide Up'},
        {route: 'classes', name: 'CSS Classes'},
        {route: 'styles', name: 'CSS Styling'},
        {route: 'dimensions', name: 'Dimensions'},
    ];


    res.view({ route: param, navs: navs });
  }

};

