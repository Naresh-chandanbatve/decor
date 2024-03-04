import  jwt  from "jsonwebtoken";

const USER_SECRET = process.env.USER_SECRET;


const authUser = async (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1]
  
    try {
      const decoded = await jwt.verify(token, USER_SECRET);
      req.UserID = decoded.id;
      next();
    } catch (error) {
      res.status(403).json({ message: 'Invalid token',
       error: error
     });
    }
  }
  
export default authUser;