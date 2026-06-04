import { useContext, useState } from "react";
import "../styles/products.css";
import Footer from "./footer";
import { TrendingSection } from "./trending-section";
import { CartContext } from "../context/cart-context";
import { SearchContext } from "../context/search-context";

export function Products() {
  const { addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);
  const products = [
    {
      img: 'https://nurserylive.com/cdn/shop/files/predict-3dfb876f-1478-4d4e-96dc-34c04c771ced-1_689x689.webp',
      title: 'Money Plant, Scindapsus (Pack of 3) - Plant',
      price: 758,
      original: 947,
      discount: 20,
      rating: 4,
      reviews: 155
    },
    {
      img: 'https://nurserylive.com/cdn/shop/files/predict-657653ae-9a52-4359-b1a1-b10bc756f3ac-1_1024x1024.webp',
      title: 'Set of 2 Mesmerising Flower Plants',
      price: 598,
      original: 748,
      discount: 20,
      rating: 4.5,
      reviews: 19
    },
    {
      img: 'https://nurserylive.com/cdn/shop/files/temp_JTmS3q7_600x600.jpg',
      title: 'Top 5 Easiest to Grow Plants',
      price: 1130,
      original: 1507,
      discount: 25,
      rating: 4,
      reviews: 54
    },
    {
      img: 'https://nurserylive.com/cdn/shop/files/temp_JTmS3q7_600x600.jpg',
      title: 'Top 3 Mosquito Repellent Plants',
      price: 980,
      original: 1225,
      discount: 20,
      rating: 4,
      reviews: 31
    },
    {
      img: 'https://nurserylive.com/cdn/shop/files/nurserylive-combo-packs-plants-top-5-plants-for-decoration-on-auspicious-occasion_600x600.jpg',
      title: 'Top 5 Plants for Decoration on Auspicious Occasion',
      price: 1236,
      original: 1765,
      discount: 30,
      rating: 4,
      reviews: 36
    },
    {
      img: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-tulip-random-color-bulbs-681697_362x362.jpg',
      title: 'Premium Flower Bulbs Collection',
      price: 449,
      original: 599,
      discount: 25,
      rating: 4,
      reviews: 88
    },
    {
      img: 'https://nurserylive.com/cdn/shop/products/nurserylive-gardening-accessories-2ft-coir-pole-254594_600x600.jpg',
      title: 'Indoor Plant Starter Kit',
      price: 1499,
      original: 1999,
      discount: 25,
      rating: 5,
      reviews: 212
    },
    {
      img: 'https://nurserylive.com/cdn/shop/files/ChatGPTImageJul24_2025_10_02_11PM_869x869.jpg',
      title: 'Air Purifying Plants Combo',
      price: 899,
      original: 1199,
      discount: 25,
      rating: 4,
      reviews: 67
    }
  ];

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));



  const perSlide =
    window.innerWidth < 576
      ? 1
      : window.innerWidth < 768
        ? 2
        : window.innerWidth < 992
          ? 3
          : 4

  const slides = [];
  for (let i = 0; i < filteredProducts.length; i += perSlide) {
    slides.push(filteredProducts.slice(i, i + perSlide));
  }

  const renderStars = (n) => {
    const full = Math.floor(n);
    const half = n - full >= 0.5;
    return Array.from({ length: 5 }, (_, i) => {
      let cls = 'bi-star';
      if (i < full) cls = 'bi-star-fill';
      else if (i === full && half) cls = 'bi-star-half';
      return <i key={i} className={`bi ${cls} text-warning`} />;
    });
  };

  return (
    <div>
      <section className="container-fluid my-5 mt-5">
        <h4 className="text-center mb-4">Value For Money - Upto 35% Off</h4>
        <div className="position-relative">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productsCarousel"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle p-3"
              aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <div id="productsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, sIdx) => (
                <div key={sIdx} className={`carousel-item${sIdx === 0 ? ' active' : ''}`}>
                  <div className="d-flex  product-row">
                    {slide.map((p, idx) => (
                      <div key={`${sIdx}-${idx}`} className="product-col">
                        <div className=" shadow-sm card h-100 border">
                          <img
                            src={p.img}
                            alt={p.title}
                            className="card-img-top p-2" />
                          <div className="card-body d-flex flex-column">
                            <div className="original-price text-secondary text-decoration-line-through">
                              &#8377;{p.original}
                            </div>
                            <div className="price fw-bold mb-2" >
                              &#8377;{p.price.toLocaleString('en-IN')}
                            </div>
                            <p className="card-text fw-semibold mb-2">
                              {p.title}
                            </p>
                            <div className="mb-2">
                              <span className="bi bi-star-fill text-success"> {p.rating}</span>
                              <span className="text-muted ms-2">({p.reviews} reviews)</span>
                            </div>
                            <button className="btn btn-sm btn-outline-success mt-auto" onClick={() => addToCart(p)}>
                              <i className="bi bi-cart-plus me-1"></i>Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productsCarousel"
            data-bs-slide="next" >
            <span
              className="carousel-control-next-icon  bg-dark rounded-circle p-3"
              aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </section>
    </div>
  );
}


