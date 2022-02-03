import express from "express";
import student from "../model/student.js";

const router = express.Router();

router.get("/student", (req, res) => {
  student
    .find()
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/create-student", (req, res) => {
  const newStudent = new student({
    student: req.body.student,
    father: req.body.father,
    address: req.body.address,
    gender: req.body.gender,
    dob: req.body.dob,
    photo: req.body.photo,
    email: req.body.email,
    phone: req.body.phone,
    Course: req.body.course,
  });

  newStudent
    .save()
    .then((student) => {
      console.log(student);
    })
    .catch((err) => console.log(err.message));
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  student.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("The Profile Was Deleted from the Database");
    } else {
      console.log(err.message);
    }
  });
});

router.get("/fetch/:id", (req, res) => {
  const id = req.params.id;
  student
    .find({ _id: id })
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error" + err));
});

export default router;
