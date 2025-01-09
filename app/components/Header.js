export default function Header() {
    return (
      <header style={{ backgroundColor: '#8B4513', color: '#fff', padding: '1rem' }}>
        <h1 style={{ margin: 0 }}>CitaRasaID</h1>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
            <li><a href="#categories" style={{ color: '#fff', textDecoration: 'none' }}>Kategori</a></li>
            <li><a href="#products" style={{ color: '#fff', textDecoration: 'none' }}>Produk</a></li>
            <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Kontak</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  