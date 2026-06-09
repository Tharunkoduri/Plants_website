import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/search-context";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function SearchResults() {
  const { title } = useParams();
  const { allProducts } = useContext(SearchContext);

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

      <div className="row">
        {results.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img
                src={product.img || product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h6>{product.title}</h6>
                <div>₹{product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}