const Services = require('../models/service-model')

const services = async (req, res) => {
    try {
       const response = await Services.find(); // service me jo bhi data h (  find()  )
       if(!response){
        res.status(404).json({msg: "No Servicen found"});
        return;
       }
       res.status(200).json({msg: response});
    } catch (error) { 
        console.log(`services: ${error}`);
    }
}
module.exports = services;