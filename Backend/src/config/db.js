const mongoose = require("mongoose");
console.log("URI:", process.env.MONGODB_URI);
async function connectDB()
{
    try
    {
        //await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        console.log("mongodb connected successfully");
    }
    catch(error)
    {
        console.error("database connection failed");
        console.error(error.message);
        process.exit(1);
    }
} 
module.exports=connectDB;

