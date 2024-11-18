import React, { useState, useEffect } from 'react';
import Footer from './Footer'

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  // Fetch products
  const fetchProducts = () => {
    fetch('http://localhost:5600/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle product form submission (add/update product)
  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = { name, price, description, image };

    if (editingProductId) {
      // Update existing product
      fetch(`http://localhost:5600/products/${editingProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then(() => {
          fetchProducts(); // Re-fetch products after update
          setEditingProductId(null);
          resetForm();
        })
        .catch((error) => {
          console.error('Error updating product:', error);
          setError('Failed to update product. Please try again later.');
        });
    } else {
      // Add new product
      fetch('http://localhost:5600/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then(() => {
          fetchProducts(); // Re-fetch products after adding
          resetForm();
        })
        .catch((error) => {
          console.error('Error adding product:', error);
          setError('Failed to add product. Please try again later.');
        });
    }
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
  };

  // Handle deleting a product
  const handleDelete = (id) => {
    fetch(`http://localhost:5600/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchProducts(); // Re-fetch products after delete
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        setError('Failed to delete product. Please try again later.');
      });
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <div>
    <div className=" my-4">
      <h3>{editingProductId ? 'Edit Product' : 'Add New Product'}</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="mb-2">
        <div className="form-group mb-3">
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingProductId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h3>Product List</h3>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-6">
            <div className="card shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${product.price.toFixed(2)}</p>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
