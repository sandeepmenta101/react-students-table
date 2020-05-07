import React from 'react';

export default function Table({students, handleCheckbox}){
  return(
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Standard</th>
          <th>Gender</th>
          <th>Remarks</th>
          <th>Checked</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, i) => (
          <tr key={i}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.standard}</td>
            <td>{student.gender}</td>
            <td>{student.remarks}</td>
            <td><input type="checkbox" onChange={handleCheckbox} data-id={student.id}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}