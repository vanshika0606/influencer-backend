const app = require('./app.js');

const connectDatabase = require("./db/db.js");

connectDatabase();


app.listen(4000,()=>{
    console.log(`Server is running on  http://localhost:4000`);
})