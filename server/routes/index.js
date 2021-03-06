var express = require('express');
var router = express.Router();
const app = express()
let invited = []
let notinvited = []


router.get('/', (req, res, next) => {
  res.send('Listening on port 3001 or API and sending invite data')
});

router.get('/invited', (req, res, next) => {
  res.json(invited)
});

router.get('/not-invited', (req, res, next) => {
  res.send('sending list of people not invited')
})

router.post('/invited', (req, res, next) => {
  invited.push(req.body)
  console.log(invited)
  res.json({
    message: 'success'
  })
})

router.post('/not-invited', (req, res, next) => {
  res.send('sending array of people not invited')
})



module.exports = router;
