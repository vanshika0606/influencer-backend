class Features{
    constructor(query, queryStr){

        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        
        const name = this.queryStr.name?{

            name:{
                $regex:this.queryStr.name,
                $options:"i"
            },
            

        }:{
        };

        const social_media= this.queryStr.name?{
            social_media:{
                $regex:this.queryStr.name,
                $options:"i"
            },
        }:{}

        
        

       
       this.query = this.query.find({$or:[{...name},{...social_media}]})




       
       return this;

    }
}

module.exports = Features;