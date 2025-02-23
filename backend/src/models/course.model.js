import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    code: { 
        type: String, 
        required: true, 
        unique: true 
    },
    professor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    students: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }],
  }, { timestamps: true }
);
  

const Course = mongoose.model('Course', courseSchema);
export default Course;