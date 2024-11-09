import mongoose from "mongoose";

const conectiondb = mongoose.connect("mongodb+srv://avhisekjaiswal29:youtube@mainproject.t3ujpus.mongodb.net/youtube?retryWrites=true&w=majority&appName=mainproject",{

    serverSelectionTimeoutMS: 3000,
    
}

)
.then((result) => {
    console.log("conection db is working")
}).catch((err) => {
   console.log(err);
   
})
export default conectiondb