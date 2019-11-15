const express = require('express');
const { listBlogs } = require('../../database/Google/blogger.js');

const router = express.Router();

router.get('/', (req, res) => {
  listBlogs((err, data) => {
    if (err) {
      console.log('could not get :/');
      res.status(400).send();
    } else {
      console.log('here you go');
      res.status(200).send(data);
    }
  });
});

module.exports = router;