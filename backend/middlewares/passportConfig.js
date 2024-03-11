import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import * as dotenv from "dotenv";
dotenv.config();
import userModel from '../models/user.js';
import session from 'express-session';


const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';


const initializePassport = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());



  passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: `${BASE_URL}/googleAuth/google/callback`
  },
  async (accessToken, refreshToken, profile, done) => {
    // Handle user data and pass it to the 'done' callback
    // Typically, you would save user data to your database here
    try {
      
      let User = await userModel.findOne({ googleID: profile.id });
      // If user already exists, return the user
      if (User) {
        return done(null, User);
      }

      let isAdmin = false

      if(profile.emails[0].value == 'pacharerakesh09@gmail.com'){
        isAdmin = true;
      }
  
      // If user does not exist, create a new user record
      const result = await userModel.create({
        googleID: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        isAdmin
     });
     if(result){
      console.log("user created"+ result)
     }

     let newUser = await userModel.findOne({ googleID: profile.id })

     return done(null, newUser);
    }
    catch(err){
      return done(err);
    }
  }
));

passport.serializeUser((user, done )=>{
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})


}



export default initializePassport;