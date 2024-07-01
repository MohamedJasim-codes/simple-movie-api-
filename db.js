import mongoose from 'mongoose';
export const connectDB = async(req,res) =>{

try {
   
    await mongoose.connect(
        "mongodb+srv://jasimbro25:979132@cluster0.xqtyrgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("mongo DB is connected ")
} 
catch (error) {
    console.error(error.message);
    process.exit(1);
}


};
