const mongoose = require('mongoose');
const dbconnect = ()=>{
    mongoose.set('strictQuery',true);
    mongoose.connect("mongodb+srv://velandini:hrgsKjgAS6Umvc0a@luksoft.xsdolby.mongodb.net/?retryWrites=true&w=majority&appName=LukSoft",{},(err, res) =>{
    //
        if(!err){
            console.log("conexión correcta");
        }else{
            console.log("Error de conexión: "+err);
        }
    });
};

module.exports = dbconnect;