import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

},
{timestamps: true}
);

const Course = mongoose.model('Course', courseSchema);
export default Course;