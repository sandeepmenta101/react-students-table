import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import './style.css';
import Students  from './database/students.js';
import Table from './components/Table';
import Modal from './components/Modal';

let updatedStudentsIndex= [];
export default function App() {
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);
  const [remarks, setRemarks] = useState('');

  useEffect(() => {
    setStudents(Students);
  }, []);

  let handleCheckbox = (e) => {
    const checkboxId = event.target.getAttribute('data-id');
    const studentsData = [...students];
    let updatedStudents = studentsData.map((student) =>{
      if(student.id === Number(checkboxId)){
        student.checkbox.checked = e.target.checked;
        updatedStudentsIndex.push(student.id);
        return student;
      }
      return student;
    });
    setStudents(updatedStudents);
  }

  let showModal = () => {
    if(students.some(student => student.checkbox.checked === true)){
      setModal(true);
    }
  }

  let hideModal = () => {
    setModal(false);
    const updatedStudents = [...students];
    if(updatedStudentsIndex.length > 0){
      for(let i=0; i < updatedStudentsIndex.length; i++){
        const updateIndex = updatedStudents.findIndex((student) => student.id === updatedStudentsIndex[i]);
        console.log(updateIndex);
        updatedStudents[updateIndex]["remarks"] = remarks;
      }
    }
    setStudents(updatedStudents);
    setRemarks('');
  }

  let handleInputChange = (e) => {
    setRemarks(e.target.value);
  }
  return (
    <>
      <button onClick={showModal}>Bulk Update</button>
      <Table students={students} handleCheckbox={handleCheckbox}/>
      <Modal show={modal} handleClose={hideModal} header="Update Students">
        <div className="form-control">
          <label htmlFor="remarks">
            <input type="text" name="remarks" placeholder="Please enter the remarks..." onChange={handleInputChange} value={remarks}/>
          </label>
        </div>
      </Modal>
    </>
  );
}

render(<App />, document.getElementById('root'));
