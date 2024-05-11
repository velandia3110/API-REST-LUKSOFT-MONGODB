const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String
    }
},
{
    timestamps:true,
    versionKey: false,

}
);

const ModelUser = mongoose.model("empleados",userSchema);
module.exports = ModelUser;