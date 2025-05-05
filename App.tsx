import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Milan Store</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">Welcome to Milan Store</h2>
        <p className="text-gray-700">Your one-stop dropshipping marketplace</p>
      </section>

      {/* Product Grid (Placeholder) */}
      <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow-md">
            <div className="h-32 bg-gray-200 mb-2"></div>
            <h3 className="font-semibold text-lg">Product {item}</h3>
            <p className="text-sm text-gray-500">$XX.XX</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
