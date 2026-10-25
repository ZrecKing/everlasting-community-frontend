import { useEffect } from 'react'
import $ from 'jquery'

// Header + navigasi. jQuery dipakai untuk smooth scroll pada semua tautan #anchor.
function HeaderAplikasi() {
  useEffect(() => {
    $(document).on('click.smooth', 'a[href^="#"]', function (e) {
      const target = $(this.getAttribute('href'))
      if (target.length) {
        e.preventDefault()
        $('html, body').animate({ scrollTop: target.offset().top - 70 }, 500)
      }
    })
    return () => $(document).off('click.smooth')
  }, [])

  return (
    <nav className="navbar navbar-expand-md navbar-dark app-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand brand d-flex align-items-center gap-2" href="#atas">
          <img src="/logo.png" alt="Logo Everlasting Community" />
          <span>Everlasting<small>Uma Musume Club</small></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Buka menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#ringkasan">Ringkasan</a></li>
            <li className="nav-item"><a className="nav-link" href="#tambah">Tambah Anggota</a></li>
            <li className="nav-item"><a className="nav-link" href="#anggota">Club Members</a></li>
            <li className="nav-item"><a className="nav-link" href="#komunitas">Community</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderAplikasi
