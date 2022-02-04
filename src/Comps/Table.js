import axios from "axios";
import React, { useEffect, useState } from "react";

function Table({ setisEditClicked, setStudentID }) {
  const [student, setStudent] = useState([
    {
      student: "",
      father: "",
      dob: "",
      email: "",
      phone: "",
      image: "",
      address: "",
      gender: "",
      course: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/student")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setStudent(jsonRes);
      })
      .catch((error) => console.log(error.message));
  }, [student]);

  function deleteStudent(id) {
    axios.delete("http://localhost:5000/delete/" + id);
    alert("deleted");
  }

  async function handleEdit(id) {
    setisEditClicked(true);
    await fetch("http://localhost:5000/fetch/" + id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setStudentID(jsonRes);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="tableView">
      <h1>Database</h1>
      <div className="tableContainer">
        <table>
          <thead>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Image</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Submitted On</th>
            <th>Edit/Delete</th>
          </thead>
          <tbody>
            {student &&
              student.map((el) => (
                <tr key={el._id}>
                  <td>{el._id}</td>
                  <td>{el.student}</td>
                  <td>{el.father}</td>
                  <td>{el.dob}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>
                    {el.photo ? <img src={el.photo} alt={el.student} /> : ""}
                  </td>
                  <td>{el.address}</td>
                  <td>{el.gender}</td>
                  <td>{el.course}</td>
                  <td>{el.CreatedAt}</td>
                  <td>
                    <button className="btn" onClick={() => handleEdit(el._id)}>
                      <i className="far fa-edit"></i>
                    </button>
                    <button
                      className="btn"
                      onClick={() => deleteStudent(el._id)}
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
