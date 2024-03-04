import cartModel from '../models/cart.js'


/**
 * Route: /cart/add
 * Desc: add and update cart
 */
export const addCart = async (req, res) => {
    
    try {
        const { userID, serviceID, address, start_time, end_time, date} = req.body;
        

        const time_slot = {
            start_time: new Date(`${date}T${start_time}`),
            end_time: new Date(`${date}T${end_time}`),
          };

        const result = await cartModel.create({
            userID,
            serviceID,
            address,
            time_slot,
            date
            });
        
            if(result){
                return res.status(200).json({
                    message: "order added successfully",
                    id: result._id
                })
            }
            else{
                return res.status(404).json({
                    message: "order not added",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}

/**
 * route: /cart/delete//:cartID
 * Desc: Delete a cart with id
 */
export const deleteCart = async (req, res) => {
    
    try {

        const result = await cartModel.findOneAndDelete({_id: req.params.cartID});
        
            if(result){
                return res.status(200).json({
                    message: "order deleted successfully",
                    result
                })
            }
            else{
                return res.status(404).json({
                    message: "order not added",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}


/**
 * Route: /cart/get
 * Descr: view cart
 */
export const getCart = async (req, res) => {
    
    try {
        const result = await cartModel.find({ 'userID' : req.UserID});
        
        
            if(result){
                return res.status(200).json({
                    message: "order fetched successfully",
                    result
                })
            }
            else{
                return res.status(404).json({
                    message: "order not fetched",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}