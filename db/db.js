const mongoose = require("mongoose");

const connectDatabase = ()=>{

     
    mongoose.set("strictQuery", true);

    mongoose.connect("mongodb+srv://vanshika:Vanshika66@cluster0.ww9f9rb.mongodb.net/?retryWrites=true&w=majority" , {useNewUrlParser:true}).then((data)=>{
        console.log(`Mongodb connect with server 4000`)
    }).catch((err)=>{
        console.log(err)
    })

}

module.exports = connectDatabase;