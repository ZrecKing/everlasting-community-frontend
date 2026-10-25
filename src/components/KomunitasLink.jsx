function KomunitasLink() {
  return (
    <section id="komunitas">
      <div className="community">
        <img src="/logo.png" alt="Logo Everlasting Community" className="mb-4" />
        <h2>Gabung Komunitas Kami</h2>
        <p className="text-muted-2 mx-auto" style={{ maxWidth: 480 }}>
          Terhubung dengan kami, ikuti kabar terbaru, dan ngobrol bareng anggota lain di kanal resmi.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a className="btn btn-gradient" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram me-2"></i>Instagram</a>
          <a className="btn btn-discord" href="https://discord.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-discord me-2"></i>Discord</a>
        </div>
        <p className="small text-muted-2 mt-3 mb-0">Tautan contoh — ganti dengan tautan resmi club.</p>
      </div>
    </section>
  )
}

export default KomunitasLink
