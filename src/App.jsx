import { useState } from "react";

// components respective styling added in this css file
import "./App.css";

export default function App() {
  // States for form inputs
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [cpass, setCpass] = useState("");

  // States for showing the error and success message
  let [message, setMessage] = useState("");
  let [formStatus, setFormStatus] = useState("");

  // This function will run when the user hits the submit button
  // setTimeout function is used to give the form submitting feel
  function handleSubmit(e) {
    e.preventDefault();

    // condition to check if all the form inputs are present
    if (name == "" || email == "" || pass == "" || cpass == "") {
      setFormStatus("error");
      setMessage("Error: All the fields are mandatory");
    }

    // condition to check if the new password and confirm password match
    else if (pass != cpass) {
      setFormStatus("error");
      setMessage("Error: Two passwords do not match");
    }

    // If the above two conditions failed then only the form will be submitted
    else {
      setFormStatus("submitting");
      setTimeout(() => {
        setFormStatus("success");
        setName("");
        setEmail("");
        setPass("");
        setCpass("");
        setMessage("Successfully Signed Up!");
      }, 3000);
    }
  }

  // rerturnin the component
  return (
    <div className="wrapper">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        {/* input for first name */}
        <div className="input-style">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            className="text-style"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        {/* input for email */}
        <div className="input-style">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="text-style"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* input for new password */}
        <div className="input-style">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="text-style"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>

        {/* input for confirm password */}
        <div className="input-style">
          <input
            type="text"
            name="conf-password"
            id="conf-password"
            placeholder="Confirm Password"
            className="text-style"
            value={cpass}
            onChange={(e) => {
              setCpass(e.target.value);
            }}
          />
        </div>

        {/* this div will appear if the form state is submitting */}
        {formStatus === "submitting" && (
          <div className="success text-style" style={{ color: "yellow" }}>
            Signing you up...
          </div>
        )}

        {/* this div with the message state will be appeared if the form status is error */}
        {formStatus === "error" && (
          <div className="error text-style">{message}</div>
        )}

        {/* this div with the message state will be appeared if the form status is success */}
        {formStatus === "success" && (
          <div className="success text-style">{message}</div>
        )}

        {/* submit button for the form */}
        <div className="input-style submit-btn" style={{ marginTop: "2rem" }}>
          <input type="submit" value="Signup" className="submit-btn" />
        </div>
      </form>
    </div>
  );
}
