var express = require('express');
var router = express.Router();
var tutorialsModel = require('../../models/tutorialsModel');


/* GET Tutorials page. */
router.get('/', async function (req, res, next) {
  
  var tutorials = await tutorialsModel.getTutorials();
  
  res.render('admin/tutorials', {
    layout: 'admin/layout',
    userName: req.session.userName, // ej: flavia, adrian, etc
    tutorials
  });
});

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;
  await tutorialsModel.deleteTutorialsById(id);
  res.redirect('/admin/tutorials')
});

module.exports = router;