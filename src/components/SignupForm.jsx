import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postRegister from "../api/post-register.js";
import { useAuth } from "../hooks/use-auth.js";

import Footer from "./Footer";

function SignupForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.username || !form.password) {
      setErrorMessage("Please enter username and password.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await postRegister({
        username: form.username,
        password: form.password,
        email: form.email || undefined,
      });

      // If API returns a token, stay; otherwise send user to login.
      if (response?.token) {
        window.localStorage.setItem("token", response.token);
        setAuth({ token: response.token });
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (err) {
      const msg = err.message ?? "Registration failed";
      if (msg === "Error trying to register" || msg === "Registration failed") {
        setErrorMessage(
          "Signup failed. Please try again.",
        );
      } else {
        setErrorMessage(msg);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-main">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create an account</h2>
            <div className="username-field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="email-field">
              <label htmlFor="email">Email (optional)</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="password-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="confirmation-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Type password again"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && <p className="text-error">{errorMessage}</p>}

            <button className="submit-button" type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignupForm;