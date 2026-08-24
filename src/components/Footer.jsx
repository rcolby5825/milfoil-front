import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="page-footer" aria-label="Footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link to="/sitemap">Site Map</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  )
}

export default Footer
