import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <nav className="placeholder-nav" aria-label="Main navigation">
      <Link to="/login">Login</Link>
      <Link className="cart-link" to="/cart" aria-label="Shopping cart">
        <ShoppingCart aria-hidden="true" size={20} strokeWidth={2} />
      </Link>
    </nav>
  )
}

export default TopNav
