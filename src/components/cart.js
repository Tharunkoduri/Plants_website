import { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { ScrollBar } from "./scroll-bar";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, product) => sum + (product.quantity || 1),
    0
  );

  const totalCost = cart.reduce(
    (sum, product) => sum + (product.price * (product.quantity || 1)),
    0
  );

  return (
    <div>
      <ScrollBar />
      <Header />
      <Navbar />
      <div className="container px-2 px-md-5 ">

        <h3 className="fw-bold text-secondary mb-3">Your Cart</h3>

        {cart.length === 0 ? (
          <div className="text-center border border-2 shadow-sm py-5">
            <p className="text-center fw-semibold fs-5">Your cart is empty</p>
            <Link to="/trendinggardening" className="btn btn-warning mx-auto">
              <i className="bi bi-cart3"></i> Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row gy-4">
            <div className="col-12 col-lg-8">
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-3 p-3 shadow-sm mb-4 bg-white">
                  <div className="row align-items-center gy-3">
                    <div className="col-12 col-md-2 text-center">
                      <img
                        src={product.image || product.img}
                        alt={product.title}
                        className="img-fluid"
                        style={{
                          maxHeight: "150px",
                          objectFit: "contain"
                        }} />
                    </div>

                    <div className="col-12 col-md-5">
                      <h5 className="fw-semibold mb-2">{product.title}</h5>
                      <div className="mb-2">
                        {product.original &&(
                        <span className="text-muted text-decoration-line-through me-2">
                          &#8377;{product.original}
                        </span>
                        )}
                        <span className="fw-semibold fs-6">
                          {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </span>
                      </div>
                    </div>

                    <div className="col-6 col-md-2">
                      <label className="form-label small text-muted">Qty</label>
                      <select
                        className="form-select"
                        value={product.quantity || 1}
                        onChange={(e) => updateQuantity(index, e.target.value)} >

                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-4 col-md-2 text-md-center">
                      <div className="small text-muted">Subtotal</div>
                      <h5 className="mb-0">
                        {(product.price * (product.quantity || 1)).toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR"
                        })}
                      </h5>
                    </div>

                    <div className="col-2 col-md-1 text-end">
                      <button
                        className="btn btn-danger rounded-circle"
                        onClick={() => removeFromCart(index)} >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 gx-5  col-lg-4">

              <div className=" border  rounded-3 p-3 bg-white">
                <h5 className="fw-bold mb-3">Order Summary</h5>

                <div className="mb-3">
                  <span className="text-muted">Total items</span>
                  <div className="fs-5 fw-bold">{totalItems}</div>
                </div>

                <div className="mb-3">
                  <span className="text-muted">Total cost</span>
                  <div className="fs-5 fw-bold">
                    {totalCost.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR"
                    })}
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary w-100">Continue Shopping</button>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}