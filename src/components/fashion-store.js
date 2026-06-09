import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Navbar } from "./navbar";
import { ScrollBar } from "./scroll-bar";
import { Header } from "./header";
import { Footer } from "./footer";
import { CartContext } from "../context/cart-context";
import { SearchContext } from "../context/search-context";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function FashionStore() {

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);
  const [priceRange, setPriceRange] = useState([500, 100000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder,setSortOrder] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  function LoadProducts() {
    axios.get("https://fakestoreapi.com/products")
      .then(response =>
        setProducts(response.data)
      );
  }

  useEffect(() => {
    LoadProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const productPriceInr = product.price * 85;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const minMatch =
      priceRange[0] === "" ||
      productPriceInr >= Number(priceRange[0]);

    const maxMatch =
      priceRange[1] === "" ||
      productPriceInr <= Number(priceRange[1]);

    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);

    return (
      matchesSearch &&
      minMatch &&
      maxMatch &&
      categoryMatch
    );
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
      <h3 className="text-center  fw-bold mt-4">Fashion Store</h3>
      <div className="container-fluid px-2 mt-5">
        <div className="row align-items-start">
          <div className=" col-md-3 mb-4">
            <div className="border rounded p-3 shadow-sm sticky-top">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>Filter</h4>
                <button
                  className="btn btn-link text-decoration-none p-0"
                  onClick={() => {
                    setPriceRange([500, 100000]);
                    setSelectedCategories([]);
                  }}>
                  Clear All
                </button>
              </div>
              <h6 className="mb-4">Price</h6>
              <Slider
                range
                min={500}
                max={100000}
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
                ]} />
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
                    } />
                </div>
              </div>
              <div className="mt-4">
                <h6 className="mb-3">Categories</h6>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mens"
                    checked={selectedCategories.includes("men's clothing")}
                    onChange={() =>
                      handleCategoryChange("men's clothing")
                    }
                  />
                  <label className="form-check-label" htmlFor="mens">
                    Men's Clothing
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="womens"
                    checked={selectedCategories.includes("women's clothing")}
                    onChange={() =>
                      handleCategoryChange("women's clothing")
                    }
                  />
                  <label className="form-check-label" htmlFor="womens">
                    Women's Clothing
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="jewelery"
                    checked={selectedCategories.includes("jewelery")}
                    onChange={() =>
                      handleCategoryChange("jewelery")
                    }
                  />
                  <label className="form-check-label" htmlFor="jewelery">
                    Jewellery
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="electronics"
                    checked={selectedCategories.includes("electronics")}
                    onChange={() =>
                      handleCategoryChange("electronics")
                    }
                  />
                  <label className="form-check-label" htmlFor="electronics">
                    Electronics
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 ">

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""}
              </h6>
              <div className="ms-auto">
                <div className="d-flex align-items-center">
                  <label className="fw-semibold me-2">Sort by:</label>
                  <select 
                    className="form-select"
                    style={{width:"200px"}}
                    value={sortOrder}
                    onChange={(e)=>setSortOrder(e.target.value)}>
                      <option value="">Default</option>
                      <option value="lowToHigh">Price:Low to High</option>
                      <option value="highToLow">Price:High to Low</option>
                    </select>
                </div>
              </div>
            </div>

            <div className="row">
              {
                filteredProducts.map(product =>
                  <div
                    className="col-6 col-md-4 col-lg-3 mb-4"
                    key={product.id} >
                    <div className="card h-100 p-2  shadow-sm">
                      <img
                        className="card-img-top  object-fit-contain "
                        src={product.image}
                        height=""
                        alt={product.title} />

                      <div className="card-body text-center" >
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

                        <div className="fw-bold  mb-1">
                          {(product.price * 85).toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR'
                          })}
                        </div>
                        <div className="fw-semibold">
                          <span className="bi bi-star-fill text-success"> </span>
                          {product.rating.rate}
                          <span> ({product.rating.count} reviews)</span>
                        </div>
                      </div>

                      <button onClick={() => addToCart(product)} className="btn btn-outline-success w-100 mt-auto">
                        <i className="bi bi-cart-plus me-1"></i>Add to Cart
                      </button>
                    </div>
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