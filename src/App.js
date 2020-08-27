import React, {setState, useState} from "react";
import "./index.css";

export default function App() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false)

    const [valid, setValid] = useState(false)

    const handleFirstNameChange = (event) => {
        setValues({...values, firstName: event.target.value})
    }
    const handleLastNameChange = (event) => {
        setValues({...values, lastName: event.target.value})
    }
    const handleEmailChange = (event) => {
        setValues({...values, email: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    }



  return (
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
          <input
              id="first-name"
              value={values.firstName}
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleFirstNameChange}
          />
            {submitted && !values.firstName ? <span id="first-name-error">Please enter your first name</span> : null}
          <input
              id="last-name"
              value={values.lastName}
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleLastNameChange}
          />

            {submitted && !values.lastName ? <span id="last-name-error">Please enter your last name</span> : null}
          <input
              id="email"
              value={values.email}
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleEmailChange}
          />

            {submitted && !values.email ? <span id="email-error">Please enter your email address</span> : null}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
  );
}
