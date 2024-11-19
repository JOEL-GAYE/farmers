import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products
  const fetchProducts = () => {
    fetch("http://localhost:5600/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="container my-4">
        <h3>Product List</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="card-text">{product.description}</p>
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

export default Home;
