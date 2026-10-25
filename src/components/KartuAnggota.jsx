import { useEffect, useRef } from 'react'
import $ from 'jquery'

const warnaStatus = { Aktif: 'success', 'Jarang Aktif': 'warning', Nonaktif: 'secondary' }

// Props: anggota (objek), onHapus (fungsi)
function KartuAnggota({ anggota, onHapus }) {
  const ref = useRef(null)

  // jQuery: efek fade-in saat kartu muncul (kartu baru terlihat "masuk")
  useEffect(() => {
    $(ref.current).hide().fadeIn(400)
  }, [])

  const { nama, trainerId, totalFans, monthlyGain, status } = anggota

  return (
    <article className="member-card" ref={ref}>
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div className="d-flex align-items-center gap-2">
          <span className="avatar">{nama.slice(0, 2).toUpperCase()}</span>
          <div>
            <b>[ECM] {nama}</b>
            <div className="small text-muted-2">ID {trainerId}</div>
          </div>
        </div>
        <span className={`badge text-bg-${warnaStatus[status]}`}>{status}</span>
      </div>
      <dl className="member-stats mb-3">
        <dt>Total Fans</dt><dd>{totalFans.toLocaleString('id-ID')} jt</dd>
        <dt>Monthly Gain</dt><dd className="text-up">+{monthlyGain.toLocaleString('id-ID')} jt</dd>
      </dl>
      <button className="btn btn-sm btn-outline-danger" onClick={() => onHapus(anggota.id)}>
        <i className="bi bi-trash me-1"></i>Hapus
      </button>
    </article>
  )
}

export default KartuAnggota
