import orderModel from '../models/order.js'


/**
 * Route: /order/add
 * Desc: add and update order
 */
export const addOrder = async (req, res) => {
    
    try {
        const { userID, serviceID, address, start_time, end_time, date} = req.body;
        

        const time_slot = {
            start_time: new Date(`${date}T${start_time}`),
            end_time: new Date(`${date}T${end_time}`),
          };

        const result = await orderModel.create({
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
 * route: /order/delete/:orderID
 * Desc: Delete a order with id
 */
export const deleteOrder = async (req, res) => {
    
    try {

        const result = await orderModel.findOneAndDelete(req.params.orderID);
        console.log(req.params.orderID);
        
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
 * Route: /order/get
 * Descr: view order
 */
export const getOrder = async (req, res) => {
    
    try {
        const { id } = req.body;

        const result = await orderModel.findById(id);
        
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




/**
 * Route: /order/all
 * Descr: view all order
 */
export const getAllOrder = async (req, res) => {
    
    try {

        const result = await orderModel.find();
        
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