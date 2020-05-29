const router = require('express').Router();
let Drug = require('../models/drug.model');

router.route('/:id').get((req, res) => {
  Drug.findById(req.params.id)
    .then(drug => res.json(drug))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Drug.find()
    .then(drugs => res.json(drugs))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').post((req, res) => {
  const name = req.body.name;
  const information = req.body.information;
  const ordennance = req.body.ordennance;
  const quantity = req.body.quantity;

  const newDrug = new Drug({
    name,
    information,
    quantity,
    ordennance
  });
  newDrug.save()
    .then(() => res.json('Drug added!'))
    .catch(err => res.status(400).json('post Error: ' + err));
});

router.route('/:id').put(
  (req,res) => {
    Drug.findByIdAndUpdate(req.params.id)
    .then(Drug => {
        Drug.name = req.body.name;
        Drug.information = req.body.information;
        Drug.ordennance = req.body.ordennance;
        Drug.quantity = req.body.quantity;
      Drug.save()
      .then(()=> res.json('Drug updated'))
      .catch(err => res.status(400).json('Erreur:'+err));
  })
  .catch(err => res.status(400).json('Erreur:'+err));
});

router.route('/:id').delete(
  (req,res) => {
      Drug.findByIdAndDelete(req.params.id)
      .then(Drug => res.json('Drug '+Drug+'is deleted !') )
      .catch(err => res.status(400).json('Delete Error'+err));
  }
);



module.exports = router;