const router = require('express').Router();
let Pharmacy = require('../models/pharmacy.model');

router.route('/:id').get((req, res) => {
  Pharmacy.findById(req.params.id)
    .then(pharmacy => res.json(pharmacy))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Pharmacy.find()
    .then(pharmacys => res.json(pharmacys))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').post((req, res) => {
  const name = req.body.name;
  const information = req.body.information;
  const apptitude = req.body.apptitude;
  const latitude = req.body.latitude;
  const city = req.body.city;

  const newPharmacy = new Pharmacy({
    name,
    information,
    apptitude,
    latitude,
    city
  });
  newPharmacy.save()
    .then(() => res.json('Pharmacy added!'))
    .catch(err => res.status(400).json('post Error: ' + err));
});

router.route('/:id').put(
  (req,res) => {
    Pharmacy.findByIdAndUpdate(req.params.id)
    .then(Pharmacy => {
        Pharmacy.name = req.body.name;
        Pharmacy.information = req.body.information;
        Pharmacy.apptitude = req.body.apptitude;
        Pharmacy.latitude = req.body.latitude;
        Pharmacy.city = req.body.city;
      Pharmacy.save()
      .then(()=> res.json('Pharmacy updated'))
      .catch(err => res.status(400).json('Erreur:'+err));
  })
  .catch(err => res.status(400).json('Erreur:'+err));
});

router.route('/:id').delete(
  (req,res) => {
      Pharmacy.findByIdAndDelete(req.params.id)
      .then(Pharmacy => res.json('Pharmacy '+Pharmacy+'is deleted !') )
      .catch(err => res.status(400).json('Delete Error'+err));
  }
);



module.exports = router;