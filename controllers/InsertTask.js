const Task = require('../models/Task')


const insertTask = async(title,desc,due)=>{
    const newTask = new Task({
        title: title,
        description: desc,
        due: due
    })

    await newTask.save();


}

module.exports = insertTask