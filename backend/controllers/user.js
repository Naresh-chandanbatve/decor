import userModel from '../models/user.js'

/**
 * Route: /user/getUser
 * Descr: get userdata from token
 */
export const getUser = async (req, res)=>{
    
    const result = await userModel.findById(req.UserID);
    res.json(result);
  }

 
  /**
 * Route: /user/update
 * Descr: update user
 */
  export const updateUser = async (req, res)=>{
    const { name, phone, email, address } = req.body;
    const updateData= {
      name,
      phone,
      email,
      address
    }
    try{
      const result = await userModel.findOneAndUpdate( { _id: req.UserID },
        updateData,
        { new: true } );
        res.status(200).json({
          message: "User updated successfully",
          result
        })
    }
    catch(err){
      console.log(err);
    }
    
  }