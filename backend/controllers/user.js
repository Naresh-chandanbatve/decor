import userModel from '../models/user.js'

/**
 * Route: /user/getUser
 * Descr: get userdata from token
 */
export const getUser = async (req, res)=>{
    
    const result = await userModel.findById(req.UserID);
    res.json(result);
  }