const express = require("express")
const router = express.Router()


router.get('/', function(req, res) {
    var data = {
      title: 'Page Title',
      description: 'Page Description',
      header: 'Page Header'
    };
    res.render('index', data);
  });





module.exports = router