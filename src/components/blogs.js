import { useEffect, useState } from "react";
import "../styles/blogs.css";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Footer } from "./footer";


export default function BlogPage() {

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  const [blogs, setBlogs] = useState([]);

  return (
    <div>
    <Header />
    <Navbar />
    <div className="container py-5">
      <h2 className="text-center mb-5">Latest Blogs</h2>


      <div className="row">
        {blogs.map((blog) => (
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

                <h5>{blog.title}</h5>

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
    </div>
    <Footer />
    </div>
  );
}