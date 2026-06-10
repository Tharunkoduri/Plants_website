import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/search-context";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CartContext } from "../context/cart-context";

export function SearchResults() {
  const { title } = useParams();
  const { allProducts } = useContext(SearchContext);
  const {addToCart} = useContext(CartContext);

  const results = allProducts.filter((product) =>
    product.title
      .toLowerCase()
      .includes(decodeURIComponent(title).toLowerCase())
  );

  return (
    <div>
      <Header />
      <Navbar />
    <div className="container mt-4">
      <h4 className="text-center text-muted mb-5">Search Results</h4>
      <h6 className="text-muted">
        Search Results for "{decodeURIComponent(title)}"
      </h6>

      <p className="fw-semibold">
        Showing {results.length} result
        {results.length !== 1 ? "s" : ""}
      </p>
      {results.length === 0 ? (
        <div className="text-center py-5">
          <h5>No Results Found</h5>
          <p className="text-muted">
            Try Searching With a new Keyword
          </p>
        </div>
      ):(
      <div className="row">
        {results.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img
                src={product.img || product.image}
                className="card-img-top"
                alt={product.title}  />
              <div className="card-body">
                <h6>{product.title}</h6>
                <div className="fw-semibold mb-2">{product.price.toLocaleString('en-IN',{style:'currency' , currency:'INR'})}</div>
                <button 
                  onClick={()=>addToCart(product)}
                  className="btn btn-outline-success w-100">
                  <i className="bi bi-cart-plus me-1"></i>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
    <Footer />
    </div>
);
}