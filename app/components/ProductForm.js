import { useState, useEffect } from 'react';

export default function ProductForm({ product = {}, onSave }) {
  const [formData, setFormData] = useState({
    name: product.name || '',
    category: product.category || '',
    price: product.price || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price) {
      alert('Semua kolom harus diisi!');
      return;
    }

    const method = product.id ? 'PUT' : 'POST';
    const url = product.id ? `/api/products?id=${product.id}` : '/api/products';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal menyimpan produk');
      }

      const savedProduct = await response.json();
      onSave(savedProduct);
      setFormData({ name: '', category: '', price: '' }); // Reset form after saving
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat menyimpan produk.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h3 className="text-xl font-bold mb-4">{product.id ? 'Edit Produk' : 'Tambah Produk'}</h3>
      <div className="mb-4">
        <label className="block mb-2">Nama Produk</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Kategori</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Harga</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">
        {product.id ? 'Update Produk' : 'Tambah Produk'}
      </button>
    </form>
  );
}
