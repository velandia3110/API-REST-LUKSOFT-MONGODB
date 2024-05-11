const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const bodyParser = require('body-parser')

const app = express();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({extended:false});

const router = express.Router();

app.use("/api/empleados",router);
app.use(express.json());

router.post("/",jsonParser,async(req,res)=>{
    try{
        const body = req.body;
        console.log(body);
        const result = await ModelUser.create(body);
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
});

router.get("/",async(req, res) =>{
    try{
        const result = await ModelUser.find({});
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
});
router.get("/:id",async(req, res) =>{
    try{
        const id = req.params.id;
        const result = await ModelUser.findById(id);
        res.send(result); 
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
});

router.put("/:id",jsonParser,async(req, res) =>{
    try{
        const body = req.body;
        console.log(body);
        const id = req.params.id;
        const result = await ModelUser.findOneAndUpdate({_id:id},body);
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
});

router.delete("/:id",jsonParser,async(req, res) =>{
    try{
        const id = req.params.id;
        const result = await ModelUser.deleteOne({_id:id});
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log("Conectado");
});

dbconnect();
