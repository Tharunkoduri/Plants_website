import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((user) => user.email === email && user.password === password);

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    navigate("/home");
  }
  return (
    <div className="signin-page">
  <div className="signin-card">

    <div className="left-box-signin">
      <div className="logo-box">
        <img src="https://media.licdn.com/dms/image/v2/C510BAQGhF9zpPH671A/company-logo_200_200/company-logo_200_200/0/1630586158753/nurserylive_logo?e=2147483647&v=beta&t=D2UEBlDkQHgUkRa8hrvr9_3dgnfmrXXCzXHV9cAiGwk" height={40} width={40} />
            <span className="fw-bold text-success fs-2"> nursery</span><span className="fw-bold fs-2 text-dark">live</span>
      </div>

      <h2 className="mt-4">Welcome Back!</h2>

      <p>
        Sign in to continue your journey and
        manage your account.
      </p>

      <ul className="feature-list">
        <li><i className="bi bi-check-circle-fill"></i> Secure Login</li>
        <li><i className="bi bi-check-circle-fill"></i> Track Your Progress</li>
        <li><i className="bi bi-check-circle-fill"></i> Manage Your Account</li>
        <li><i className="bi bi-check-circle-fill"></i> Achieve Your Goals</li>
      </ul>
    </div>

    <div className="right-box-signin">

      <form onSubmit={handleSignin} className="signin-form">

        <h3 className="text-center">Sign In</h3>

        <p className="text-center text-secondary mb-4">
          Welcome back! Please sign in to your account
        </p>

        {error && (
          <div className="alert alert-danger py-2">
            {error}
          </div>
        )}

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control custom-input"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control custom-input"
          />
        </div>

        <div className="text-end mb-3">
          <Link
            to="/forgot-password"
            className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2">
          Sign In
        </button>

        <p className="text-center mt-3">
          Don't have an account?
          <Link
            to="/"
            className="text-primary text-decoration-none ms-1">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>
  )
}