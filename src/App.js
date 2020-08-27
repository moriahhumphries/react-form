import React, {setState, useState} from "react";
import "./index.css";

export default function App() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(
    )

    const handleFirstNameChange = (event) => {
        setValues({...values, firstName: event.target.value})
    }
    const handleLastNameChange = (event) => {
        setValues({...values, lastName: event.target.value})
    }
    const handleEmailChange = (event) => {
        setValues({...values, email: event.target.value})
    }

  return (
      <div className="form-container">
        <form className="register-form">
           <div className="success-message">Success! Thank you for registering</div>
          <input
              id="first-name"
              value={values.firstName}
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleFirstNameChange}
          />
           <span id="first-name-error">Please enter a first name</span>
          <input
              id="last-name"
              value={values.lastName}
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleLastNameChange}
          />

           <span id="last-name-error">Please enter a last name</span>
          <input
              id="email"
              value={values.email}
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleEmailChange}
          />

           <span id="email-error">Please enter an email address</span>
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
  );
}
