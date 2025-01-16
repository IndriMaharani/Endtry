let products = [
  { id: 1, name: 'Batik Tulis', category: 'Pakaian', price: 'Rp 250.000' },
  { id: 2, name: 'Keripik Tempe', category: 'Makanan', price: 'Rp 25.000' },
  { id: 3, name: 'Minuman Jahe', category: 'Minuman', price: 'Rp 30.000' },
  { id: 4, name: 'Patung Kayu', category: 'Kerajinan', price: 'Rp 150.000' },
];

// Read all products
export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// Create a new product
export async function POST(request) {
  const newProduct = await request.json();
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  newProduct.id = id;
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), { status: 201 });
}

// Update an existing product
export async function PUT(request) {
  const updatedProduct = await request.json();
  const productIndex = products.findIndex(p => p.id === updatedProduct.id);

  if (productIndex === -1) {
    return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
  }

  products[productIndex] = updatedProduct;
  return new Response(JSON.stringify(updatedProduct), { status: 200 });
}

// Delete a product
export async function DELETE(request) {
  const { id } = await request.json();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
  }

  products.splice(productIndex, 1);
  return new Response(JSON.stringify({ message: 'Product deleted' }), { status: 200 });
}
