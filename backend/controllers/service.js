import serviceModel from '../models/service.js'


const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';


/**
 * Route: /service/add
 * Desc: add and update service
 */
export const addService = async (req, res) => {
    
    try {
        
        const { title, catagory, price, description } = req.body;
        const img_url = `${BASE_URL}/service/getImage/`+req.file.filename.replace(/\.jpg$/, '')

        const result = await serviceModel.create({
            img_url,
            title,
            catagory,
            price, 
            description
            });
        
            if(result){
                return res.status(200).json({
                    message: "Service added successfully",
                    id: result._id
                })
            }
            else{
                return res.status(404).json({
                    message: "Service not added",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}


/**
 * Route: /service/getImage/:fileName
 * Desc: get the image from gridfs by its name
 */
export const getImageByName = async (req, res) => {
    const imageName = req.params.filename+'.jpg'
    const gfs = req.app.get('gfs');
    const gridfsBucket = req.app.get('gridfsBucket');
    res.setHeader('Access-Control-Allow-Origin', '*')
    gfs.files.findOne({filename:imageName}).then((files) =>{
        if(!files || !files.length){
          return res.status(404).json({
            message: "Image not found"
          })
        }
        
        if(files.contentType=="image/png" || files.contentType=="image/jpg" || files.contentType=="image/jpeg" || files.contentType=="image/webp"){
            const readstream = gridfsBucket.openDownloadStream(files._id);
            res.setHeader('Content-Type', files.contentType);
            readstream.pipe(res)
        }
        else{
            return res.status(404).json({
                message: "Image not found"
            })
        }
      });
}


/**
 * route: /service/delete/:id
 * Desc: Delete a service with id
 */
export const deleteService = async (req, res) => {
    
    try {
        const result = await serviceModel.deleteOne({_id : req.params.id});
        
            if(result){
                return res.status(200).json({
                    message: "Service deleted successfully",
                    result
                })
            }
            else{
                return res.status(404).json({
                    message: "Service not added",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}


/**
 * Route: /service/get/:id
 * Descr: view service
 */
export const getService = async (req, res) => {
    
    try {
        
        const id = req.params.id
       

        const result = await serviceModel.findById(id);
            if(result){
                return res.status(200).json({
                    message: "Service fetched successfully",
                    result
                })
            }
            else{
                return res.status(404).json({
                    message: "Service not fetched",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}



/**
 * Route: /service/all
 * Descr: view all service
 */
export const getAllService = async (req, res) => {
    
    try {

        const result = await serviceModel.find();
        
            if(result){
                return res.status(200).json({
                    message: "Services fetched successfully",
                    result
                })
            }
            else{
                return res.status(404).json({
                    message: "Services not fetched",
                })
            }
    } catch (error) {
        console.error(error)
    }
    
}