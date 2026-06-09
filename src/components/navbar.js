import { menuData } from "./data";
import { useContext, useState } from "react";
import "../styles/home.css";
import { CartContext } from "../context/cart-context";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search-context";
import { SignInForm } from "./SignInForm";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const { searchTerm, setSearchTerm, allProducts } = useContext(SearchContext);
  const { cart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")));

  const navigate = useNavigate();

  console.log("searchTerm:", searchTerm);
console.log("allProducts:", allProducts.length);
console.log("suggestions:", suggestions);
  return (
    <nav className="bg-white shadow-sm ">
      <div className="container-fluid px-4 py-3">
        <div className=" d-flex align-items-center flex-wrap gap-3  flex-lg-nowrap">

          <button className="btn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
            <i className="bi bi-list fs-2"></i>
          </button>

          <a className="navbar-brand fw-bold fs-2 m-0 text-center" href="/home">
            <span className=" text-success">nursery</span>
            <span className="text-dark">live</span>
          </a>
          <Link to="/cart" className="text-dark  fs-3 d-lg-none ms-auto">
            <i className="bi bi-cart"></i>
          </Link>

          <div className=" flex-grow-1 search-box " >
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3 shadow-sm"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchTerm(value);

                  if (value.trim()) {
                    const filtered = allProducts.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
                    setSuggestions(filtered.slice(0, 5));
                  } else {
                    setSuggestions([]);
                  }
                }} />
                
              {searchTerm && suggestions.length > 0 && (
                <div
                  className="position-absolute bg-white border shadow-sm w-100 rounded"
                  style={{
                    top: "100%",
                    left: 0,
                    zIndex: 1050,
                    maxHeight: "300px",
                    overflowY: "auto"
                  }}
                >
                  {suggestions.map((product, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center p-2 border-bottom suggestion-item"
                      style={{ cursor: "pointer" }}
                      onClick={()=>{
                        navigate(`/search/${encodeURIComponent(product.title)}`);
                        setSuggestions([]);
                        setSearchTerm("");
                      }}
                    >
                      <img
                        src={product.img || product.image}
                        alt={product.title}
                        width="50"
                        height="50"
                        className="me-3"
                      />

                      <div>
                        <div className="fw-semibold">
                          {product.title}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button className="btn btn-danger shadow-sm px-4">
                <i className="bi bi-search text-white"></i>
              </button>
            </div>


              
          </div>


          <div className="d-none d-lg-flex align-items-center gap-4 px-3 px-md-4 py-2">

            <button className="btn border location rounded-pill me-3">
              <i className="bi bi-geo-alt-fill text-success me-3"></i>
              Select Delivery Location
            </button>

            {/* <a
              href="/signin"
              className="text-decoration-none text-dark fw-semibold"
            /> */}
            {user ? (
              <Link
                to="/dashboard"
                className="text-decoration-none text-dark fw-semibold">
                <i className="bi bi-person-circle me-1"></i>
                {user.fullName}
              </Link>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                <i className="bi bi-person-fill me-1"></i>
                Login
              </button>
            )}


            <Link
              to="/cart"
              className="text-dark position-relative"
              style={{ fontSize: "25px" }}
            >
              <span className="bi bi-cart"></span>

              {cart.length > 0 &&

                <span
                  className="position-absolute translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: "10px",
                    top: "8px",
                    left: "100px"
                  }}>
                  {cart.length}
                </span>
              }

            </Link>

          </div>
        </div>
      </div>

      <div className="d-none d-lg-block">
        <ul className="navbar-nav d-flex flex-row flex-wrap mx-3 gap-4 py-3">
          {menuData.map((section, index) => (
            <li className="nav-item dropdown" key={index}>
              <a
                className={`nav-link fw-semibold ${section.menus ? "dropdown-toggle" : ""
                  }`}
                {...(section.menus && {
                  "data-bs-toggle": "dropdown",
                })}
                href="#"
              >{section.heading}</a>

              {section.menus && (
                <ul className=" dropdown-menu p-3">
                  {section.menus.map((menu, menuIndex) => (
                    <li key={menuIndex}>
                      <h6 className="dropdown-header">
                        {menu.title}
                      </h6>

                      {menu.subItems && (
                        menu.subItems.map((subItem, subIndex) => (
                          <a href="/trendinggardening"
                            className="dropdown-item"
                            key={subIndex}>
                            {subItem}
                          </a>
                        ))
                      )}

                      {menu.subItems && (
                        <hr className=" dropdown-divider"></hr>
                      )}

                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu">
        <div className="offcanvas-header">
          {user ? (
            <Link
              to="/dashboard"
              className="text-decoration-none text-dark fw-semibold">
              <i className="bi bi-person-circle me-1"></i>
              {user.fullName}
            </Link>
          ) : (
            <p
              className="fw-semibold fs-5 text-muted"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-person-fill me-1"></i>
              Login
            </p>
          )}

          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-0">
          {menuData.map((section, sectionIndex) => (
            <div className="menu-section" key={sectionIndex}>
              <div className={`d-flex menu-heading justify-content-between align-items-center ${openMenu === sectionIndex ? "active-heading" : ""}`}
                onClick={() => {
                  if (section.menus) {
                    setOpenMenu(openMenu === sectionIndex ? null : sectionIndex)
                  }
                }}
              >
                <h6>
                  {section.heading}
                </h6>
                {section.menus && (
                  <i className={`bi ${openMenu === sectionIndex ? "bi-dash-lg" : "bi-chevron-down"}`}></i>
                )}
              </div>
              {section.menus && (
                <div className={openMenu === sectionIndex ? "d-block" : "d-none"}>
                  {section.menus.map((menu, menuIndex) => (
                    <div className="menu-item" key={menuIndex}>
                      <div
                        className={`d-flex menu-title-heading justify-content-between  align-items-center ${openSubMenu === `${sectionIndex}${menuIndex}` ? "active-submenu" : ""}`}
                        onClick={() => {
                          if (menu.subItems) {
                            setOpenSubMenu(openSubMenu === `${sectionIndex}${menuIndex}` ? null : `${sectionIndex}${menuIndex}`);
                          }
                        }} >

                        <span className="menu-title">{menu.title}</span>
                        {menu.subItems && (
                          <i className={`bi ${openSubMenu === `${sectionIndex}${menuIndex}` ? "bi-dash-lg" : "bi-chevron-down"}`}></i>
                        )}
                      </div>
                      {menu.subItems && (
                        <div className={openSubMenu === `${sectionIndex}${menuIndex}` ? "d-block" : "d-none"}>

                          <ul className="list-unstyled ps-4 mb-0">
                            {menu.subItems.map((subItem, subIndex) => (
                              <li className="py-2 list-item" key={subIndex}>
                                <a href="#" className="text-decoration-none text-dark">
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-top mt-3 p-3 text-secondary">
            <div className="d-flex flex-column gap-3">
              <span className="bg-danger rounded  py-1 text-white fw-semibold w-25 text-center">
                Rewards
              </span>
              <span>Help</span>
              <span>My Orders</span>
              <span>Offers</span>
            </div>

            <div className="d-flex gap-4 mt-4 fs-5">
              <a target="_blank" href="https://www.facebook.com/nurserylive" className="bi bi-facebook text-secondary"></a>
              <a target="_blank" href="https://x.com/nurserylive" className="bi bi-twitter-x text-secondary"></a>
              <a target="_blank" href="https://www.instagram.com/nurserylive_" className="bi bi-instagram text-secondary"></a>
              <a target="_blank" href="https://www.youtube.com/nurserylive" className="bi bi-youtube text-secondary"></a>
              <a target="_blank" href="https://www.linkedin.com/company/nurserylive/" className="bi bi-linkedin text-secondary"></a>
            </div>
          </div>

        </div>
      </div>
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign In</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <SignInForm
                  onSuccess={(loggedUser) => {
                    setUser(loggedUser);
                    setShowModal(false);
                  }} />
              </div>
            </div>
          </div>

        </div>
      )}
    </nav>
  )
}