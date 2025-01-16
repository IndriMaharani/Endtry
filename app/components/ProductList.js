import { useState, useEffect } from 'react';

export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    selectedCategory === 'Semua'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" style={{ padding: '2rem', backgroundColor: '#F5F5F5' }}>
      <h2>Produk Oleh-Oleh</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredProducts.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px', textAlign: 'center' }}>
            <h3>{product.name}</h3>
            <p>Kategori: {product.category}</p>
            <p>Harga: {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
