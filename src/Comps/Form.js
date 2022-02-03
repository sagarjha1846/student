import React, { useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
function Form() {
  const [userData, setUserData] = useState({
    student: "",
    father: "",
    dob: "",
    address: "",
    email: "",
    phone: "",
    photo: "",
    course: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/create-student";

    const sendStudentDataToDb = {
      student: userData.student,
      father: userData.father,
      dob: userData.dob,
      phone: userData.phone,
      photo: userData.photo,
      address: userData.address,
      gender: userData.gender,
      course: userData.course,
      email: userData.email,
    };

    axios
      .post(url, sendStudentDataToDb)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setUserData({
      student: "",
      father: "",
      dob: "",
      address: "",
      email: "",
      phone: "",
      photo: "",
      course: "",
      gender: "",
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserData({
      student: "",
      father: "",
      dob: "",
      address: "",
      email: "",
      phone: "",
      photo: "",
      course: "",
      gender: "",
    });
  };
  return (
    <div className="formView">
      <h1>Form</h1>
      <div className="formContainer">
        <form>
          <div className="right">
            <div className="field">
              <label>Student Name</label>
              <input
                onChange={handleChange}
                className="input"
                name="student"
                placeholder="Sagar Jha"
                value={userData.student}
              ></input>
            </div>
            <div className="field">
              <label>Father Name</label>
              <input
                onChange={handleChange}
                className="input"
                placeholder="Ravindra Jha"
                name="father"
                value={userData.father}
              ></input>
            </div>

            <div className="field">
              <label>Gender</label>
              <div className="field">
                <div className="field">
                  <input
                    onChange={handleChange}
                    value="Male"
                    type="radio"
                    name="gender"
                  ></input>
                  <label>Male</label>
                </div>
                <div className="field">
                  <input
                    onChange={handleChange}
                    value="Female"
                    type="radio"
                    name="gender"
                  ></input>
                  <label>Female</label>
                </div>
              </div>
            </div>
            <div className="field">
              <label>Date of birth</label>
              <input
                className="input"
                onChange={handleChange}
                name="dob"
                type="date"
                value={userData.dob}
              ></input>
            </div>
            <div className="field">
              <label>Course</label>
              <select
                className="input"
                value={userData.course}
                name="course"
                onChange={handleChange}
              >
                <option value="Science">Science</option>
                <option value="Commerce">Commerece</option>
                <option value="Arts">Arts</option>
              </select>
            </div>
            <div className="field">
              <label>Mobile Number</label>
              <input
                className="input"
                onChange={handleChange}
                type="text"
                value={userData.phone}
                name="phone"
              ></input>
            </div>
            <div className="field">
              <label>Email Id</label>
              <input
                className="input"
                onChange={handleChange}
                type="email"
                name="email"
                value={userData.email}
              ></input>
            </div>
          </div>
          <div className="left">
            <div className="field">
              <label>Photo</label>
              <label className="container">
                Add a photo
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setUserData({ ...userData, photo: base64 })
                  }
                />
              </label>
            </div>
            <div className="field">
              <label>Address</label>
              <textarea
                className="input"
                onChange={handleChange}
                type="text"
                name="address"
                value={userData.address}
              ></textarea>
            </div>
            <div className="field flex">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
