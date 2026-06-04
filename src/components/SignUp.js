import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";

export function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  let navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (password != confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      setError("Password must be atleast 8 characters and should contain atleast one capital letter,one special symbol and one digit");
      return;

    }

    if (!email.match(/^[a-z][a-z0-9._%+-]*@gmail\.com$/)) {
      setError("Please enter a valid email");
      return;
    }
    if (!phone.match(/^[6-9][0-9]{9}$/)) {
      setError("Please enter a valid mobile number");
      return;
    }
    if (!acceptTerms) {
      setError("Please accept terms & conditions");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyRegistered = storedUsers.some((user) => user.email === email);

    if (alreadyRegistered) {
      setError("This email is already registered");
      return;
    }
    storedUsers.push({ fullName, email, phone, password, confirmPassword });
    localStorage.setItem("users", JSON.stringify(storedUsers));
    navigate("/signin");
  }
  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="left-box">
          <div className="logo-box">
            <img src="https://media.licdn.com/dms/image/v2/C510BAQGhF9zpPH671A/company-logo_200_200/company-logo_200_200/0/1630586158753/nurserylive_logo?e=2147483647&v=beta&t=D2UEBlDkQHgUkRa8hrvr9_3dgnfmrXXCzXHV9cAiGwk" height={40} width={40} />
            <span className="fw-bold text-success fs-2"> nursery</span><span className="fw-bold fs-2 text-dark">live</span>
          </div>

          <h2 className="mt-3">Create Your Account</h2>

          <p>
            Sign up and start your journey with us.
            It's quick and easy.
          </p>

          <ul className="feature-list">
            <li><i className="bi bi-check-circle-fill"></i> Secure & Safe</li>
            <li><i className="bi bi-check-circle-fill"></i> Easy to Use</li>
            <li><i className="bi bi-check-circle-fill"></i> Track Progress</li>
            <li><i className="bi bi-check-circle-fill"></i> Get Started Instantly</li>
          </ul>
        </div>

        <div className="right-box">
          <div className="row">
            <h4 className="text-center fw-bold ">SIGNUP</h4>
            <p className="text-center mb-4">Please fill all the details to create your account</p>
            {error && (
              <div className="alert alert-danger">{error}</div>
            )}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="col-md-12 mb-3">
              <input
                type="password"
                className="form-control custom-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="col-md-12 mb-3">
              <input
                type="password"
                className="form-control custom-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>
          <div className="form-check text-start mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)} />

            <label className="form-check-label" htmlFor="terms">
              I agree to the
              <span className="text-primary ms-1">
                Terms & Conditions
              </span>
              {" "}and{" "}
              <span className="text-primary">
                Privacy Policy
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 mb-3"
            onClick={handleSignup}>
            Sign Up
          </button>
          <p className="text-center mb-0">
            Already have an account?
            <Link
              to="/signin"
              className="text-primary text-decoration-none ms-1 fw-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}