const mongoose = require("mongoose");

const InfluencerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name required"]
    },
    follower_No:{
        type:Number,
        required:[true,"No. of Followers required"]
    },
    social_media:{
        type:String,
        required:[true, "Social media handle required"]
    }

})

module.exports= mongoose.model("Influencer",InfluencerSchema)