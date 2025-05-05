import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">My Dropship Store</header>

      <div className="products">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h3>Sample Product</h3>
          <p>$29.99</p>
          <button>Add to Cart</button>
        </div>
        {/* Copy this card to add more products */}
      </div>
    </div>
  );
}

export default App;
