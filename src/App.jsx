import { useState } from "react";
import "./App.css";

export default function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [cpass, setCpass] = useState("");

  let [message, setMessage] = useState("");
  let [formStatus, setFormStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "" || email == "" || pass == "" || cpass == "") {
      setFormStatus("error");
      setMessage("Error: All the fields are mandatory");
    } else if (pass != cpass) {
      setFormStatus("error");
      setMessage("Error: Two passwords do not match");
    } else {
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

  return (
    <div className="wrapper">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
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
        {formStatus === "submitting" && (
          <div className="success text-style" style={{ color: "yellow" }}>
            Signing you up...
          </div>
        )}
        {formStatus === "error" && (
          <div className="error text-style">{message}</div>
        )}
        {formStatus === "success" && (
          <div className="success text-style">{message}</div>
        )}

        <div className="input-style submit-btn" style={{ marginTop: "2rem" }}>
          <input type="submit" value="Signup" className="submit-btn" />
        </div>
      </form>
    </div>
  );
}
