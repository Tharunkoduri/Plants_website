import { useEffect, useState } from "react"
import "../styles/home.css";
import { menuData } from "./data";
import { LogoSection } from "./logo-section";
import { Carousel } from "./carousel";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { HelpSection } from "./help-section";
import { ScrollBar } from "./scroll-bar";
import { Header } from "./header";
import { TrendingSection } from "./trending-section";
import { GardenDecor } from "./garden-decor";
import { ReviewsSection } from "./reviews-section";
import { Footer } from "./footer";
import { Products } from "./products";
import "../styles/blogs.css";
import { PlantsByOccassion } from "./plantsByOccassion";
import TrendingPlants from "./best-seller";


export function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <ScrollBar />
      <Header />
      <Navbar />
      <LogoSection />
      <Carousel />
      <HelpSection />
      <Products />
      <TrendingSection />
      <GardenDecor /> 
      <PlantsByOccassion />
      <TrendingPlants /> 
      <div className="container py-5">
        <h4 className="text-center mb-5"> Blogs</h4>
        <div className="row">
          {blogs.slice(0, 3).map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card blog-card h-100 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top" />

                <div className="card-body">
                  <span className="badge bg-success mb-2">
                    {blog.category}
                  </span>

                  <h5 className=" text-success">{blog.title}</h5>

                  <p className="card-text">{blog.description}</p>

                  <span className="text-muted">
                    By {blog.author} | {blog.date}
                  </span>

                  <button className="btn btn-success mt-3 w-100">
                    Read More<i className="bi bi-chevron-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/blogs" className="btn btn-success">
            Show More<i className="bi bi-chevron-right ms-2"></i> 
          </Link>
        </div>
      </div>
      <ReviewsSection />
      <Footer />
    </div>
  )
}