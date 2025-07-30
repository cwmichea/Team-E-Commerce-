const router = require('express').Router();

const{
    call
}=require('./handlers');

router.get('/call', call);

// Define your routes here

module.exports = router;