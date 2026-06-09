import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { ScrollBar } from "./scroll-bar";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { CartContext } from "../context/cart-context";
import { SearchContext } from "../context/search-context";

export function TrendingGardening() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([200, 5000]);
  const [sortOrder,setSortOrder] = useState("");

  const { addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  function LoadProducts() {
    fetch("/db.json")
      .then(res => res.json())
      .then((data) => setProducts(data))
  }

  useEffect(() => {
    LoadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const minMatch =
      priceRange[0] === "" ||
      product.price >= Number(priceRange[0]);

    const maxMatch =
      priceRange[1] === "" ||
      product.price <= Number(priceRange[1]);

    return matchesSearch && minMatch && maxMatch;
  }).sort((a,b)=>{
    if(sortOrder === "lowToHigh"){
      return a.price - b.price;
    }
    if(sortOrder === "highToLow"){
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <ScrollBar />
      <Header />
      <Navbar />
      <h3 className="mt-4 text-center fw-bold">Trending in Gardening</h3>
      <p className="text-center fw-semibold text-secondary"> Your Ultimate Plant Collection Discover the latest trends in gardening with our curated collection of plants</p>
      <hr />

      <div className="container-fluid px-3  mt-5">
        <div className="row align-items-start">
          <div className="col-md-3 mb-4">
            <div className="border rounded p-3 shadow-sm sticky-top">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>Filter</h4>
                <button
                  className="btn btn-link text-decoration-none p-0"
                  onClick={() => setPriceRange([200, 5000])}>
                  Clear All
                </button>
              </div>
              <h6 className="mb-4">Price</h6>
              <Slider
                range
                min={200}
                max={5000}
                value={priceRange}
                onChange={(value) => setPriceRange(value)}
                trackStyle={[{ backgroundColor: "#198754" }]}
                railStyle={{ backgroundColor: "#dee2e6" }}
                handleStyle={[
                  {
                    borderColor: "#198754",
                    backgroundColor: "#198754",
                  },
                  {
                    borderColor: "#198754",
                    backgroundColor: "#198754",
                  },
                ]}
              />
              <div className="row mt-4">
                <div className="col-6">
                  <label className="form-label">Minimum</label>
                
                  <input
                    type="number"
                    className="form-control"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([
                        e.target.value,
                        priceRange[1]
                      ])
                    } />
                </div>
                <div className="col-6">
                  <label className="form-label">Maximum</label>
                  <input
                    type="number"
                    className="form-control"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        e.target.value
                      ])
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""}
              </h6>   

            <div className="ms-auto">
            <div className="d-flex align-items-center">
              <label className="me-2 fw-semibold">Sort by:</label>
              <select 
                className="form-select"
                style={{width:"200px"}}
                value={sortOrder}
                onChange={(e)=>setSortOrder(e.target.value)} >
                  <option value="">Default</option>
                  <option value="lowToHigh">Price:Low to High</option>
                  <option value="highToLow">Price:High to Low</option>
                </select>
            </div>
            </div>
            </div>


            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 mb-4"
                    key={product.id}
                  >
                    <div className="card h-100 p-2 shadow-sm">
                      <img
                        className="card-img-top object-fit-contain"
                        src={product.img}
                        height="120"
                        alt={product.title} />

                      <div className="card-body text-center">
                        <h6
                          className="card-title"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "48px"
                          }} >
                          {product.title}
                        </h6>

                        <div className="text-secondary text-decoration-line-through">
                          &#8377;{product.original}
                        </div>

                        <div className="fw-semibold">
                          {product.price.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR"
                          })}
                        </div>

                        <div className="mb-2">
                          <i className="bi bi-star-fill text-success"></i>
                          {" "}
                          {product.rating}
                          <span className="text-muted ms-2">
                            ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-outline-success w-100" >
                        <i className="bi bi-cart-plus me-1"></i>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 border rounded text-center py-5">
                  <h5 className="fw-bold">No products found</h5>
                  <p className="text-secondary">
                    Try adjusting your  price range.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}