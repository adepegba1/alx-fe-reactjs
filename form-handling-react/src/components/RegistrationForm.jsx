import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  const validateValues = (inputvalues) => {
    let newErrors = {};
    if (!inputvalues.username) {
      newErrors.username = "Enter a username";
    }
    if (!inputvalues.email.includes("@")) {
      newErrors.email = "Must include the @ character";
    }
    if (inputvalues.password.length < 4) {
      newErrors.password = "Password must be at least 4 character";
    }
    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateValues(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login Details</legend>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit">Submit Information</button>
        </fieldset>
      </form>
    </>
  );
}

export default RegistrationForm;
