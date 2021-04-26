const {Router} = require('express');
const passport = require('passport');
const router = Router();
const db = require('../database');
//const bcrypt = require('bcryptjs');

router.post('/login',passport.authenticate('local'),async (req,res)=>{
    
    res.send(200);
});
module.exports = router;