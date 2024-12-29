const mongoose = require('mongoose');

// const URI= "mongodb://127.0.0.1:27017/mernproject";
// const URI = "mongodb+srv://prernadesh2004:Prerna@cluster0.r9fxihg.mongodb.net/shops?retryWrites=true&w=majority"
const URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful of Database");
    } catch (error) {
        console.error("Connection failed");
        process.exit(0);
    }
};
module.exports = connectDb; 
