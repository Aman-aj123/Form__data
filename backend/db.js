import mongoose from "mongoose"

const connectToMongoose = async (mongooseURI) =>{
 try {
    await mongoose.connect(mongooseURI)
    console.log("Connection sucessful to mongodb")

 } catch(err){
    console.log(`Some error occurs while connecting mongodb with : ${err}`)
 }
}

export  default connectToMongoose;