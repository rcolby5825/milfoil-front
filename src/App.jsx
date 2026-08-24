import { ShoppingCart } from 'lucide-react'

function App() {
  return (
    <main className="placeholder-shell">
      <header className="image-band" aria-label="Banner header">
        <input className="desktop-banner-text-box" type="text" aria-label="Banner text box" />
        <nav className="placeholder-nav" aria-label="Main navigation">
          <a href="#login">Login</a>
          <a className="cart-link" href="#cart" aria-label="Shopping cart">
            <ShoppingCart aria-hidden="true" size={20} strokeWidth={2} />
          </a>
        </nav>
      </header>
      <div className="logo-wrap" aria-label="Logo placeholder">LOGO</div>
      <input className="mobile-text-box" type="text" aria-label="Text box" />
      <div className="mobile-image-placeholder" aria-label="Image placeholder" />
      <div className="desktop-image-placeholder" aria-label="Desktop image placeholder" />

      <footer className="page-footer" aria-label="Footer">
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#sitemap">Site Map</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
