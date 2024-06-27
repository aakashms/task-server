const express = require('express');
const insertTask = require('../controllers/InsertTask');
const route = express.Router();
const tasks = require('../models/Task')

route.post('/newtask', async(req,res)=>{
    try{
    const {title,description, due} = await req.body;
    console.log(title, description, due);
    await insertTask(title,description,due);
    res.send({ status: 200, title: title, description: description, due: due })
    }catch(err){
        console.error("error from post response:",err)
    }
})

route.get('/tasklist', async(req,res)=>{
    try{
        const tasklist = await tasks.find()
        console.log(tasklist); 
        res.send(tasklist)

    }catch(err){
        console.error("error from get response:",err)
    }
    
})

route.get('/tasklist/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const tasklist = await tasks.find({_id:id});
        res.json(tasklist)
        console.log(tasklist); 


    }catch(err){
        console.error("Error in getting exist task")
    }
})

route.put('/task/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const {title,description, due} = await req.body;
        const updatedTask = await tasks.updateMany({_id:id},{$set:{title:title,description: description,due:due}});
        console.log(updatedTask);
        res.send({status:200, title, description,due})

    }catch(err){
        console.error("Error in updating the task")
    }
})

route.delete('/task/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const updatedTask = await tasks.deleteOne({_id : id});
        console.log(updatedTask);
        res.send({status:200,message:"deleted successfully"})

    }catch(err){
        console.error("Error in deleting the task")
    }

})

module.exports = route