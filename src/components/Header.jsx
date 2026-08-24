import TopNav from './TopNav'

function Header() {
  return (
    <header className="image-band" aria-label="Banner header">
      <input className="desktop-banner-text-box" type="text" aria-label="Banner text box" />
      <TopNav />
      <div className="logo-wrap" aria-label="Logo placeholder">LOGO</div>
    </header>
  )
}

export default Header
