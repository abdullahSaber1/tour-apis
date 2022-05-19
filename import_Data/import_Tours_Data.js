const mongoose = require('mongoose');

const TOURS = require('../model/toursModel');

const TOURS_Data=require('../dev-data/data/tours-simple.json');
console.log(TOURS_Data);

console.log(process.argv);


const main=async()=>{

    await mongoose.connect(process.env.DB_URL);


    if(process.argv[2] === '--import'){
        try {
            await TOURS.insertMany(TOURS_Data);

           console.log({
              status:'success',
              message:"All Tours data is Inserted"
            })
    
            
        } catch (error) {
            console.log({
                status:'failuar',
                message:error.message
            })
            
        }
    }
    else if(process.argv[2] === '--delete'){
        try {
             await TOURS.deleteMany();

            console.log({
                status:'success',
                message:"All Tours data is Deleted"
            })
            
        } catch (error) {
            console.log({
                status:'failuar',
                message:error.message
            })

            
        }
        
    }

}

main();


