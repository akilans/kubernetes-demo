import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  // get employees
  const getEmployees = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/employees"
    );
    setEmployees(response.data);
  };

  // call get employees function on load
  useEffect(() => {
    getEmployees();
  }, []);

  // delete employee
  const deleteEmployee = async (id) => {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "/employees/" + id
    );
    console.log(response.data);
    getEmployees();
  };

  // add empployee
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, location, designation);
    const emp_data = {
      name,
      location,
      designation,
    };

    let res = await axios.post(
      process.env.REACT_APP_API_URL + "/employees/",
      emp_data
    );
    console.log(res.data);
    setName("");
    setLocation("");
    setDesignation("");
    getEmployees();
  };

  return (
    <div className="App container">
      <h1 className="display-1 text-center">Intellipaat Demo - v1</h1>
      <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="designation"
            placeholder="designation"
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add Employee
          </button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            {/*<th scope="col">Designation</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((emp) => {
            return (
              <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.name}</td>
                <td>{emp.location}</td>
                {/*<td>{emp.designation}</td> */}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
