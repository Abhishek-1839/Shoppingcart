
import React, { useState, useContext } from 'react';
import "./shop.css";
import { CartContext } from './CartContext'; // assuming you have a CartContext

const products = [
  { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 2, name: 'Special Item', price: '$18.00', oldPrice: '$20.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true, rating: 5 },
  { id: 3, name: 'Sale Item', price: '$25.00', oldPrice: '$50.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
  { id: 4, name: 'Popular Item', price: '$40.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', rating: 5 },
  { id: 5, name: 'Fancy Product', price: '$40.00 - $80.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 6, name: 'Special Item', price: '$18.00', oldPrice: '$20.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true, rating: 5 },
  { id: 7, name: 'Sale Item', price: '$25.00', oldPrice: '$50.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
  { id: 8, name: 'Popular Item', price: '$40.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', rating: 5 },
  // Add more products as needed
];

const Shop = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [cartStatus, setCartStatus] = useState({});

  const handleAddToCart = (productId) => {
    setCartStatus(prev => ({ ...prev, [productId]: true }));
    addToCart(productId, 1);
  };

  const handleRemoveFromCart = (productId) => {
    setCartStatus(prev => ({ ...prev, [productId]: false }));
    removeFromCart(productId);
  };

  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map(product => (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}>Sale</div>}
                  <img className="card-img-top" src={product.imageUrl} alt={product.name} />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.name}</h5>
                      {product.rating && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          {Array(product.rating).fill().map((_, i) => (
                            <div key={i} className="bi-star-fill"></div>
                          ))}
                        </div>
                      )}
                      {product.oldPrice && <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>}
                      {product.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {cartStatus[product.id] ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
