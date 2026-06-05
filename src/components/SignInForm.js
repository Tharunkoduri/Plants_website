import { useState } from "react"
import {Link, useNavigate } from "react-router-dom";

export function SignInForm({onSuccess}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const registeredUser = storedUsers.find((user) => user.email === email);

    if (!registeredUser) {
      setError("This email is not registered. Please register to continue");
      return;
    }

    if (registeredUser.password !== password) {
      setError("Invalid Password");
      return;
    }

    localStorage.setItem("loggedInUser",JSON.stringify(registeredUser));

    if(onSuccess){
      onSuccess(registeredUser);
    }else{
      navigate("/home");
    }
  }
  return (
    <form onSubmit={handleSignin}>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <input 
        type="email"
        placeholder="Enter Email"
        className="form-control mb-3"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />

      <input 
        type="password"
        placeholder="Enter Password"
        className="form-control mb-3"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />  
         
        <div className="text-end mb-3">
        <Link
            to="/forgot-password"
            className=" text-decoration-none">
            Forgot Password?
          </Link>
        </div>  

      <button className="btn btn-primary w-100" onClick={handleSignin}>Sign In</button>

      <p className="text-center mt-3">
        Don't have an account?
        <Link to="/" className="text-primary text-decoration-none fw-semibold ms-1">
        Sign Up
        </Link>
      </p>
    </form>
  );
}