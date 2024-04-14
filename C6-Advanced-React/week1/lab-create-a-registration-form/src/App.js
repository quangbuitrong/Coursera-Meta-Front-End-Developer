import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    if (firstName === "" || email === "" || !validateEmail(email)) {
      return false;
    }

    if (password.value.length < 8) {
      return false;
    }

    if (role === "role") {
      return false;
    }

    return true;
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    }
  };

  const handlePassword = (e) => {
    const inputValue = e.target.value;
    setPassword({value: inputValue, isTouched: inputValue.length > 0});
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              id="password"
              value={password.value}
              onChange={handlePassword}
              type="password"
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 && (
              <PasswordErrorMessage />
            )}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
