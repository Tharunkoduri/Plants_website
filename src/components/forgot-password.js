import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgcolor] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  function moveNext(e, nextInput) {
    if (e.target.value.length === 1) {
      nextInput.current.focus();
    }
  }

  function handleSendOtp(e) {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const userExists = storedUsers.find((user) => user.email === email)

    if (!email) {
      setMsg("Please enter email");
      setMsgcolor("red");
      return;
    }

    if (!email.match(/^[a-z][a-z0-9._%+-]*@gmail\.com$/)) {
      setMsg("Please enter a valid email");
      setMsgcolor("red");
      return;
    }

    if (userExists) {
      const otp = Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem("otp", otp);
      setMsg("OTP sent successfully!");
      setShowOtp(true);
      setMsgcolor("green");
      console.log("OTP generated:", otp);
    } else {
      alert("This email is not registered.Please Sign up to continue");
      setShowOtp(false);
      setMsgcolor("red");
      navigate("/");
    }
  }
  function VerifyOtp() {
    const enteredOtp =
      input1.current.value +
      input2.current.value +
      input3.current.value +
      input4.current.value;

    const storedOtp = localStorage.getItem("otp");

    if (enteredOtp === storedOtp) {
      setMsg("OTP verified successfully!");
      setMsgcolor("green");
      setShowPasswordFields(true);
    } else {
      setMsg("Invalid OTP");
      setMsgcolor("red");
    }
  }

  function updatePassword() {
    if (newPassword != confirmPassword) {
      setMsg("Passwords do not match");
      setMsgcolor("red");
      return;
    }
    if (!newPassword.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      setMsg("Password must be atleast 8 characters and should contain atleast one capital letter,one special symbol and one digit");
      setMsgcolor("red");
      return;

    }
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    const updateUsers = storedUsers.map((user) => {
      if (user.email === email) {
        return {
          ...user,
          password: newPassword
        };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updateUsers));
    alert("Password updated successfully");
    setMsgcolor("green");
    navigate("/signin")
  }
  return (
    <div className="container d-flex justify-content-center mt-5">
      <form onSubmit={handleSendOtp} className="border p-4 rounded  shadow w-50">
        <h3 className="text-center mb-4">Forgot Password</h3>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "60px", fontSize: "18px" }} />
        </div>
        <button type="submit" className="btn btn-success w-100 mt-4">Send OTP</button>

        {msg && <div className=" alert text-center mt-3 fw-bold " style={{ color: msgColor, fontSize: "18px" }}>{msg}</div>}

        {showOtp && (
          <div className="d-flex justify-content-center gap-2 mt-4">
            <input
              type="text"
              maxLength="1"
              ref={input1}
              onChange={(e) => moveNext(e, input2)}
              className="form-control text-center"
              style={{ width: "50px", height: "50px" }} />

            <input
              type="text"
              maxLength="1"
              ref={input2}
              onChange={(e) => moveNext(e, input3)}
              className="form-control text-center"
              style={{ width: "50px", height: "50px" }} />

            <input
              type="text"
              maxLength="1"
              ref={input3}
              onChange={(e) => moveNext(e, input4)}
              className="form-control text-center"
              style={{ width: "50px", height: "50px" }} />

            <input
              type="text"
              maxLength="1"
              ref={input4}
              className="form-control text-center"
              style={{ width: "50px", height: "50px" }} />

            <button type="button" className="btn btn-primary mx-5" onClick={VerifyOtp}>Verify OTP</button>
          </div>
        )}

        {showPasswordFields && (
          <div>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              className="form-control mt-4"
              onChange={(e) => setNewPassword(e.target.value)} />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              className="form-control mt-3"
              onChange={(e) => setConfirmPassword(e.target.value)} />

            <button type="button" className="btn btn-info w-100 mt-4" onClick={updatePassword}>Submit</button>
          </div>
        )}

      </form>
    </div>
  )
}