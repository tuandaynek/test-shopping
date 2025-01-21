const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://TuanCodeNNLT:Tuanc06102023@test-database.vcoy8.mongodb.net/testUpload?retryWrites=true&w=majority&appName=Test-Database', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error(error);
        console.log('Error connecting to MongoDB');
        process.exit(1);
    }
}

module.exports = {connect};