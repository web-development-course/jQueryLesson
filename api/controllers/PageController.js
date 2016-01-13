/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function (req, res, next) {
    var param = req.allParams();
    res.locals.route = param;
    res.view({ route: param });
  }

};

