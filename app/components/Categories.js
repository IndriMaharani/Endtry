export default function Categories({ onSelectCategory }) {
    const categories = ['Semua', 'Aceh', 'Medan', 'Palembang', 'Padang'];
  
    return (
      <section id="categories" style={{ padding: '2rem', backgroundColor: '#FFF' }}>
        <h2>Jelajahi Oleh-Oleh</h2>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {categories.map((category, index) => (
            <li
              key={index}
              style={{
                border: '1px solid #ccc',
                padding: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#f9f9f9',
              }}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  