import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import IndexMainBody from './components/IndexMainBody'
import RoutePlaceholder from './components/RoutePlaceholder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SiteLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

function SiteLayout() {
  return (
    <main className="placeholder-shell">
      <Header />
      <Routes>
        <Route path="/" element={<IndexMainBody />} />
        <Route path="/login" element={<RoutePlaceholder title="Login" />} />
        <Route path="/cart" element={<RoutePlaceholder title="Shopping Cart" />} />
        <Route path="/sitemap" element={<RoutePlaceholder title="Site Map" />} />
        <Route path="/contact" element={<RoutePlaceholder title="Contact" />} />
        <Route path="/about" element={<RoutePlaceholder title="About" />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
