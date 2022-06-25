import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {StudentList} from "./components/student-list";
import {StudentForm} from "./components/student-form";

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(null);

  const fetchStudents = () => {
      axios.get('http://localhost:3030/student')
          .then(res => {
              setStudents(res.data);
          })
  }

  useEffect(() => {
    fetchStudents();
  }, [])

  const handleDeleteStudent = s => {
      axios.delete(`http://localhost:3030/student/${s._id}`)
          .then(() => {
              fetchStudents();
          })
  }

  const handleSubmitForm = s => {
      if(s.id) {
          axios.put(`http://localhost:3030/student/${s.id}`, s).then(() => {
              setStudent(null);
              fetchStudents();
          })
      } else {
          axios.post('http://localhost:3030/student', s).then(() => {
              setStudent(null);
              fetchStudents();
          })
      }
    }

  return (
      <>
          {student && <StudentForm
              student={student}
              onSubmit={handleSubmitForm}
              onCancel={() => setStudent(null)}
          /> }
          <button onClick={() => setStudent({})}>Ekle</button>
          <StudentList students={students}
                       onClickDelete={handleDeleteStudent}
                       onClickUpdate={(s) => setStudent(s)}>
          </StudentList>
      </>
  );
}

export default App;
