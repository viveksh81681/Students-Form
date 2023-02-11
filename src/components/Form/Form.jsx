import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    data.push(userData);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const navigate = useNavigate();
  return (
    <div className="form-cont">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          className="form-input"
        />
        <label htmlFor="">DOB:</label>
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={userData.dob}
          onChange={handleChange}
          className="form-input"
        />
        <label htmlFor="">Phone:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleChange}
          className="form-input"
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="form-input"
        />
        <div className="btn-cont">
          <br />
          <button type="submit" className="button">
            Save Details
          </button>
          <br />
          <button onClick={() => navigate("/view-details")} className="button">
            Show All Students
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
