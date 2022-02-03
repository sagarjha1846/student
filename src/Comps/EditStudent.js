import React from "react";
import FileBase from "react-file-base64";

function EditStudent({ studentID, setStudentToBeUpdated }) {
  const handleChange = () => {};

  const handleSubmit = () => {};
  const handleReset = () => {};
  console.log(studentID[0]);
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
                defaultValue={studentID[0].student}
              ></input>
            </div>
            <div className="field">
              <label>Father Name</label>
              <input
                onChange={handleChange}
                className="input"
                placeholder="Ravindra Jha"
                name="father"
                defaultValue={studentID[0].father}
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
                defaultValue={studentID[0].dob}
              ></input>
            </div>
            <div className="field">
              <label>Course</label>
              <select
                className="input"
                defaultValue={studentID[0].course}
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
                defaultValue={studentID[0].phone}
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
                defaultValue={studentID[0].email}
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
                    setStudentToBeUpdated[0]({ ...studentID, photo: base64 })
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
                defaultValue={studentID[0].address}
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

export default EditStudent;
