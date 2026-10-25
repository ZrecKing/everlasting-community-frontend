import KartuAnggota from './KartuAnggota'

// Render list dengan .map() dan key unik (id) pada tiap item
function DaftarAnggota({ anggota, jumlahSemua, cari, onCari, onHapus }) {
  return (
    <section id="anggota" className="mb-5">
      <div className="section-title">
        <h2>Club Members</h2>
        <span className="badge text-bg-dark">{jumlahSemua}</span>
      </div>

      <input
        className="form-control mb-3"
        type="search"
        placeholder="Cari nama anggota..."
        value={cari}
        onChange={(e) => onCari(e.target.value)}
        aria-label="Cari nama anggota"
      />

      {/* Conditional rendering */}
      {jumlahSemua === 0 ? (
        <div className="kosong">Belum ada data anggota</div>
      ) : anggota.length === 0 ? (
        <div className="kosong">Tidak ada anggota yang cocok dengan “{cari}”</div>
      ) : (
        <div className="row g-3">
          {anggota.map((a) => (
            <div className="col-12 col-md-6 col-xl-4" key={a.id}>
              <KartuAnggota anggota={a} onHapus={onHapus} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default DaftarAnggota
