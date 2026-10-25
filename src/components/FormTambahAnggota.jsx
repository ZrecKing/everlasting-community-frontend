import { useState } from 'react'

const formKosong = { nama: '', trainerId: '', totalFans: '', status: 'Aktif' }

// Controlled component: nilai setiap input disimpan di state `form`
function FormTambahAnggota({ onTambah }) {
  const [form, setForm] = useState(formKosong)

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const kirim = (e) => {
    e.preventDefault()
    onTambah({
      nama: form.nama.trim(),
      trainerId: form.trainerId,
      totalFans: Number(form.totalFans),
      monthlyGain: 0,
      status: form.status,
    })
    setForm(formKosong)
  }

  return (
    <section id="tambah" className="mb-5">
      <div className="section-title"><h2>Tambah Anggota</h2></div>
      <form className="card card-body row g-3 mx-0" onSubmit={kirim}>
        <div className="col-md-4">
          <label className="form-label" htmlFor="nama">Nama Trainer</label>
          <input id="nama" name="nama" className="form-control" value={form.nama} onChange={ubah} placeholder="Contoh: Hikaru" required />
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="trainerId">Trainer ID</label>
          <input id="trainerId" name="trainerId" className="form-control" value={form.trainerId} onChange={ubah} pattern="[0-9]{9,12}" title="9–12 digit angka" placeholder="9–12 digit angka" required />
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="totalFans">Total Fans (juta)</label>
          <input id="totalFans" name="totalFans" type="number" min="0" className="form-control" value={form.totalFans} onChange={ubah} placeholder="Contoh: 2500" required />
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="status">Status</label>
          <select id="status" name="status" className="form-select" value={form.status} onChange={ubah}>
            <option>Aktif</option>
            <option>Jarang Aktif</option>
            <option>Nonaktif</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-gradient"><i className="bi bi-person-plus me-1"></i>Tambah</button>
        </div>
      </form>
    </section>
  )
}

export default FormTambahAnggota
