import { useState } from "react";
import EditStudent from "./Comps/EditStudent";
import Form from "./Comps/Form";
import Table from "./Comps/Table";

function App() {
  const [isEditClicked, setisEditClicked] = useState(false);
  const [studentToBeUpdated, setStudentToBeUpdated] = useState();
  const [studentID, setStudentID] = useState();
  console.log(studentID);
  return (
    <div className="App">
      <div className="appBody">
        {isEditClicked === true ? (
          <EditStudent
            studentID={studentID}
            studentToBeUpdated={studentToBeUpdated}
            setStudentToBeUpdated={setStudentToBeUpdated}
          />
        ) : (
          <Form />
        )}

        <Table
          setisEditClicked={setisEditClicked}
          setStudentID={setStudentID}
        />
      </div>
    </div>
  );
}

export default App;
