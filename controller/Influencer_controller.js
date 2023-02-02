const Influencer = require("../model/InfluencerModel.js")

const Features = require("../util/Feature.js");




exports.Add= async(req,res,next)=>{
    

 try{

    var msg;

    if(req.body.name==""){
        
        msg="Enter Name"

    }
    else if(req.body.follower_No==null){
        msg="Enter No. of Followers"

    }else if(req.body.social_media==null){
         msg="Provide the link of Social media handle"
    }

    const influencer = await Influencer.create(req.body);

    res.status(200).json({
        message:"Influencer added successfully! "
    })
 }catch(e){
    res.status(400).json({
        message:`${msg}`
    })

 }
 

}

exports.List= async(req,res,next)=>{

   const influencers= await Influencer.find();

   res.status(200).json({
    message:"success",
    influencers
   })

}

exports.Update= async(req,res,next)=>{
    var influencer = Influencer.findById(req.params.id)

    if(!influencer){

        return ( res.status(404).json({
            success:true,
            message:"Influencer not found",
            
          })
        )
    }

    influencer = await Influencer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
    
      res.status(200).json({
        success: true,
        message:"Influencer details updated successfully",
        influencer,
      })
}


exports.Delete= async(req,res,next)=>{

    var influencer = Influencer.findById(req.params.id)
   
   
    if (!influencer) {
      return ( res.status(404).json({
        success:true,
        message:"Row not found",
        
      }))
    }
  
    
   
    await influencer.deleteOne();
  
    res.status(200).json({
      success: true,
      message: "Influencer Deleted Successfully",
    });
}

exports.search = async(req,res,next)=>{
    var influencer=[];
    
  

        const feature = new Features(Influencer.find().sort(req.query.sort), req.query).search();
    influencer = await feature.query;

 

    
    

    res.status(201).json({
        success:true,
        influencer
    })
}



