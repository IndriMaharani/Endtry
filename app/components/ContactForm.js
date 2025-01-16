export default function ContactForm() {
    return (
      <section id="contact" style={{ padding: '2rem', backgroundColor: '#E6E6FA' }}>
        <h2>Hubungi Kami</h2>
        <form
          action="https://formspree.io/f/your-form-id" // Ganti dengan ID Formspree Anda
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            required
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Anda"
            required
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <textarea
            name="message"
            placeholder="Pesan Anda"
            rows="5"
            required
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '5px' }}
          ></textarea>
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#8B4513', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Kirim Pesan
          </button>
        </form>
      </section>
    );
  }
  