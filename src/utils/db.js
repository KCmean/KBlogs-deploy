import mongoose from "mongoose";

const connectDB = async () => {

    try{
        // mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb+srv://kblogs:kblogs@k-cluster.hlwrgde.mongodb.net/?retryWrites=true&w=majority", { 

        })}
        catch(error){
            console.log(`connc failed: ${error.message}`);
        }
    
}

export default connectDB;