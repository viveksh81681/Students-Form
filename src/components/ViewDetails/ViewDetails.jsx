import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewDetails = () => {
    const [userData,setUserData] = useState([])
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(data)
  });
  const navigate = useNavigate();
  return (
    <div className="details-cont">
      <h1 className="heading">View Detail Page</h1>
      <table className="details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="btn-container">
        <button onClick={() => navigate("/")} className="button">
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
