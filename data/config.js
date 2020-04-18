const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const userModel = require('/data/models/user/user.model.server')

module.exports = function (passport) {
 passport.use(
     new LocalStrategy({usernameField:'email'},(email,password,done)=>{
         userModel.findOne({email:email})
             .then(user=>{
                 if(!user){
                     return done(null, false, {message: "No such Email registered"})
                 }

                 if(password === user.password){
                     return done(null, user)
                 }else{
                     return done(null,false,{messag:"Password Incorrect"})
                 }
             });
         })

 )
}