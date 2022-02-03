import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  student: String,
  father: String,
  address: String,
  gender: String,
  dob: Date,
  photo: String,
  email: String,
  mobile: String,
  course: String,
  CreatedAt: {
    type: Date,
    default: new Date(),
  },
});

const student = mongoose.model("student", studentSchema);

export default student;
