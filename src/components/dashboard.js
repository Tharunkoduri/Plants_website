import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const [profile, setProfile] = useState({
    name: user?.fullName || "",
    email: user?.email || "",
    mobile: user?.phone || "",
    address: "",
    city: "",
    pincode: "",
    gender: ""
  });

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/home");
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <Navbar />
    <div className="container mt-4  min-vh-100">
      <div className="row">

        <div className="col-md-3 rounded-3  shadow p-0">
          <div
            className=" rounded-3 p-2 text-white"
            style={{ background: "#6f7331" }} >
            <h4>Hi, {user?.fullName}</h4>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="bi bi-box me-2"></i>
              My Orders
            </li>

            <li className="list-group-item active">
              <i className="bi bi-person me-2"></i>
              My Profile
            </li>

            <li className="list-group-item">
              <i className="bi bi-geo-alt me-2"></i>
              Saved Addresses
            </li>

            <li className="list-group-item">
              <i className="bi bi-gift me-2"></i>
              Gift Vouchers
            </li>

            <li className="list-group-item">
              <i className="bi bi-bell me-2"></i>
              Notification Settings
            </li>

            <li className="list-group-item">
              <i className="bi bi-lock me-2"></i>
              Change Password
            </li>

            <li
              className="list-group-item text-danger"
              style={{ cursor: "pointer" }}
              onClick={logout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </li>
          </ul>
        </div>

        <div className="col-md-9 p-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">

              <h2 className="mb-4">
                My Profile
              </h2>

              <div className="row g-4">

                <div className="col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        name: e.target.value
                      })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label>Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.mobile}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        mobile: e.target.value
                      })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        email: e.target.value
                      })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label>Gender</label>
                  <select
                    className="form-select"
                    value={profile.gender}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        gender: e.target.value
                      })
                    }
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        address: e.target.value
                      })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.city}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        city: e.target.value
                      })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label>Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.pincode}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        pincode: e.target.value
                      })
                    }
                  />
                </div>
              </div>

              <button className="btn btn-success mt-4">Save Changes</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  ); 
}