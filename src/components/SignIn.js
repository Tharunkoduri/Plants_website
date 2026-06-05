import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { SignInForm } from "./SignInForm";

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

    const registeredUser =storedUsers.find((user)=>user.email === email);
    
    if(!registeredUser){
      setError("This email is not registered. Please register to continue");
      return;
    }

    if(registeredUser.password !== password){
      setError("Invalid Password");
      return;
    }

    if(registeredUser.email !== email){
      setError("Invalid Email");
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

       <SignInForm />
      </form>
    </div>
  </div>
</div>
  )
}