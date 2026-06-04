import "../styles/reviews-section.css";
import { TrendingSection } from "./trending-section";

export function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Tharun Koduri",
      image: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
      review: "The plants arrived fresh and beautifully packed.",
    },

    {
      id: 2,
      name: "Sneha",
      image: "https://t3.ftcdn.net/jpg/06/01/50/96/360_F_601509638_jDwIDvlnryPRhXPsBeW1nXv90pdlbykC.jpg",
      review: "Amazing collection and super fast delivery.",
    },

    {
      id: 3,
      name: "Arjun",
      image: "https://www.shutterstock.com/image-photo/head-shot-portrait-happy-indian-260nw-2619939871.jpg",
      review: "Best online nursery experience ever.",
    },

    {
      id: 4,
      name: "Priya Reddy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWp9NbFXFx_4fHbeviem3LyyaTiFpBgyKSA&s",
      review: "Beautiful indoor plants and excellent quality.",
    },

    {
      id: 5,
      name: "Kiran Kumar",
      image: "https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      review: "Packaging was superb and plants were healthy.",
    },

    {
      id: 6,
      name: "Anjali",
      image: "https://i.pinimg.com/1200x/39/33/f6/3933f64de1724bb67264818810e3f2cb.jpg",
      review: "Highly recommended for all plant lovers.",
    },
  ];

  const perSlide =
    window.innerWidth < 576
      ? 1
      : window.innerWidth < 992
        ? 2
        : 3;


  const slides = [];

  for (let i = 0; i < reviews.length; i += perSlide) {
    slides.push(reviews.slice(i, i + perSlide));
  }
  return (
    <div>

      <section className="reviews-section  py-3">
        <div className="container">

          <div className="text-center mb-5">
            <h3 className="reviews-heading">
              What Our Customers Say
            </h3>

            <p className="reviews-subtitle">
              Trusted by thousands of happy customers across India
            </p>
          </div>

          <div
            id="reviewCarousel"
            className="carousel slide review-carousel"
            data-bs-ride="carousel" >
            <div className="carousel-inner">
              {slides.map((slide, sIndex) => (
                <div
                  key={sIndex}
                  className={`carousel-item ${sIndex === 0 ? "active" : ""}`} >

                  <div className="d-flex review-row">
                    {slide.map((review) => (
                      <div className="review-col" key={review.id}>
                        <div className="review-card border border-2  shadow-sm h-100">
                          <div className="review-top">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="review-img" />

                            <div>
                              <h5>{review.name}</h5>
                              <div className="review-stars">
                                ★★★★★
                              </div>
                            </div>
                          </div>

                          <p className="review-text">
                            {review.review}
                          </p>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev review-prev"
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon review-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next review-next"
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark review-next-icon"></span>
            </button>

          </div>
        </div>
      </section>
      <div className="promo-banner">
        <a
          href="/fashionstore"
          className="blink-text" >
          Visit Our Fashion Store <i className="bi bi-shop"></i>
        </a>
      </div>
    </div>
  )
}