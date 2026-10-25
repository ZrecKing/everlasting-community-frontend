function BannerClub() {
  return (
    <header id="atas" className="banner p-4 p-lg-5 mb-4">
      <div className="row align-items-center g-4">
        <div className="col-md-7">
          <span className="tag">Season 4 · Super Week A</span>
          <h1 className="mt-2">Everlasting Community</h1>
          <p className="opacity-75">
            Club Uma Musume yang kompetitif, solid, dan saling mendukung.
            Kelola dan pantau anggota club dalam satu tempat.
          </p>
          <a href="#tambah" className="btn btn-gradient">Tambah Anggota</a>
        </div>
        <div className="col-md-5 text-md-end">
          <img src="/logo.png" alt="Logo Everlasting Community" />
        </div>
      </div>
    </header>
  )
}

export default BannerClub
