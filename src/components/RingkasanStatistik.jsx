// Props: anggota (array) — ringkasan dihitung dari state di App.jsx
function RingkasanStatistik({ anggota }) {
  const totalFans = anggota.reduce((jumlah, a) => jumlah + a.totalFans, 0)
  const aktif = anggota.filter((a) => a.status === 'Aktif').length
  const rataGain = anggota.length
    ? Math.round(anggota.reduce((jumlah, a) => jumlah + a.monthlyGain, 0) / anggota.length)
    : 0

  const kartu = [
    { ikon: 'people-fill', nilai: anggota.length, label: 'Jumlah Anggota' },
    { ikon: 'stars', nilai: `${(totalFans / 1000).toFixed(2)} M`, label: 'Total Fans' },
    { ikon: 'graph-up-arrow', nilai: `+${rataGain} jt`, label: 'Rata-rata Monthly Gain' },
    { ikon: 'lightning-charge-fill', nilai: aktif, label: 'Anggota Aktif' },
  ]

  return (
    <section id="ringkasan" className="row g-3 mb-5">
      {kartu.map((k) => (
        <div className="col-6 col-xl-3" key={k.label}>
          <div className="card stat h-100">
            <div className="card-body d-flex gap-3 align-items-center">
              <div className="stat-icon"><i className={`bi bi-${k.ikon}`}></i></div>
              <div>
                <div className="stat-number">{k.nilai}</div>
                <small className="text-muted-2">{k.label}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default RingkasanStatistik
