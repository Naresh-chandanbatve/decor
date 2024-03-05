import userModel from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

import sendEmail from "../middlewares/sendEmail.js";
import generateToken from "../middlewares/generateToken.js";

const USER_SECRET = process.env.USER_SECRET;
const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

/**
 * route: /auth/signup
 * Desc: user registration aannd updation
 */
export const signup = async (req, res)=>{

    try {
    const { name, username, email, password, confirmPassword, phone, address, img_url } = req.body;

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;
  const emailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "outlook.com",
  ];

  if (name.length < 3) {
    return res
      .status(404)
      .json({ message: "Name must be atleast 3 characters long." });
  }

  if (!passwordRegex.test(password)) {
    return res.status(404).json({
      message:
        "Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 symbol (@$%#^&*), and 1 number (0-9)",
    });
  }

  if (!emailDomains.some((v) => email.indexOf(v) >= 0)) {
    return res.status(404).json({
      message: "Please enter a valid email address",
    })};
    if (!name || !email || !password || !confirmPassword) {
      return res.status(404).json({
        success: false,
        message: "Please Fill all the Details.",
      });
    }
    const oldUser = await userModel.findOne({ email });

    if (oldUser)
      return res.status(404).json({
        success: false,
        message: "User already exist",
      });

    if (password !== confirmPassword)
      return res.status(404).json({
        success: false,
        message: "Password doesn't Match",
      });

      const isAdmin = false

      if(email == 'pacharerakesh09@gmail.com'){
        isAdmin = true;
      }


    const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userModel.create({
            name,
            password: hashedPassword,
            username,
            email,
            phone,
            isAdmin,
            address,
            img_url,
          });

          if(result){
            const token = generateToken(result, USER_SECRET, "300s");
            const url = `${BASE_URL}/auth/verify?token=${token}`;
      
            const options = {
              name: result.name,
              email: result.email,
              subject: "Verify Email",
              message_Content:
                "<p> Hi " +
                result.name +
                ",<br /> Please verify your Decor Account by clicking on the verification link. This Verification link is valid for 5:00 minutes <br /> <a href =" +
                url +
                " >Verify</a></p> ",
            };
            
            await sendEmail(options);
          }
    
        res.status(201).send("user created successfully, please verify your email address");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}


export const signin = async (req, res)=>{

  try {
    const { email, password } = req.body;
        const user = await userModel.findOne({email})

        if(user){
          const isMatch = await bcrypt.compare(password, user.password);
          if(!isMatch) {
            return res.status(404).json({
              success: false,
              message: "Password doesn't Match",
            });
          }

          const token = generateToken(user, USER_SECRET, "300s")
        req.session.user =  token ;
        res.status(201).json({
          message: "logged in successfully",
          token: token,
          isAdmin: user.isAdmin
        });

        }
        else{
          return res.status(400).json({
            success: false,
            message: "User doesn't exist",
          });
        }
 
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

}








/**
 * Route : /auth/verify
 * Description : Verify email using token sent to mail
 */
export const verifyEmail = async (req, res) => {
  try {
    const token = req.query.token
    const decodedUser = await jwt.verify(token, USER_SECRET);
    const user = await userModel.findOne({ _id: decodedUser.id });
    const data = {
      isVerified: true,
    };

    // set the status of user verified
    const verifieduser = await userModel.findByIdAndUpdate(
      user._id,
      data,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Email Verified Successfully",
      verifieduser,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error,
    });
  }
};