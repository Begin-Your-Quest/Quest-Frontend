export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Begin Your Quest. All rights reserved.</p>
      <nav className="footer-nav">
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  )
}
