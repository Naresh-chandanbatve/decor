import '../middlewares/passportConfig.js'
import  passport  from 'passport'
import generateToken from "../middlewares/generateToken.js";

const FRONT_URL = process.env.FRONT_URL || 'http://localhost:5173'


/**
 * Route: /googleAuth/google
 * Desc:  Open google consent screen
 */
export const authGoogle = passport.authenticate('google', { scope: [ 'email', 'profile' ]})


/**
 * Route: /googleAuth/google/callback
 * Desc: handle callback from google
 */
export const callbackGoogle = passport.authenticate('google', { successRedirect: '/googleAuth/protected', failureRedirect: '/googleAuth/failed' })




/**
 * Route /protected
 * desc: reditrection after successfull 
 *       google auth with userdata in req
 */
export const  authenticated = (req, res)=>{

  const SECRET = process.env.USER_SECRET
  const token = generateToken(req.user, SECRET);


    req.session.user = {
      token: token,
      user: req.user,
      isAdmin: req.user.isAdmin,
    }

    const userData = {
      name: req.user.name,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
      token: token
  }
  console.log(FRONT_URL)
    res.redirect(`${FRONT_URL}/?userData=${encodeURIComponent(JSON.stringify(userData))}`);

    // res.status(200).json({
    //   success: true,
    //   result: req.user,
    //   token: token
    // })
}


/**
 * Route: /failed
 * Desc: Redirection if google authentication failed
 */
export const failed = (req, res)=>{
  res.status(401).send("google authentication failed")
}