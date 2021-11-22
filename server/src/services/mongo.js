const mongoose = require('mongoose')
const {MONGO_URL_CONFIG} = require('../env.js');
 const MONGO_URL = MONGO_URL_CONFIG;

mongoose.connection.once('open', ()=>{
    console.log('MongoDB connection ready')
});

mongoose.connection.on('error', (err)=>{
    console.error(err);
})

async function mongoConnect(){
   await mongoose.connect(MONGO_URL);
    
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}
