const mongoose= require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        due: String
    },
    {
        collection:"TaskList",
    }
)

module.exports = mongoose.model("Task", TaskSchema)