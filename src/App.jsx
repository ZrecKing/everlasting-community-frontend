import { useState } from 'react'
import HeaderAplikasi from './components/HeaderAplikasi'
import BannerClub from './components/BannerClub'
import RingkasanStatistik from './components/RingkasanStatistik'
import FormTambahAnggota from './components/FormTambahAnggota'
import DaftarAnggota from './components/DaftarAnggota'
import KomunitasLink from './components/KomunitasLink'
import KembaliKeAtas from './components/KembaliKeAtas'

// Data awal (dummy). Nanti diganti data dari backend/API pada Pekan 11.
const dataAwal = [
  { id: 1, nama: 'Akira',  trainerId: '600101778', totalFans: 5260, monthlyGain: 466, status: 'Aktif' },
  { id: 2, nama: 'Rinoa',  trainerId: '879467156', totalFans: 1990, monthlyGain: 440, status: 'Aktif' },
  { id: 3, nama: 'Kaizen', trainerId: '881261443', totalFans: 3100, monthlyGain: 438, status: 'Aktif' },
  { id: 4, nama: 'Sakura', trainerId: '283532046', totalFans: 3090, monthlyGain: 210, status: 'Jarang Aktif' },
  { id: 5, nama: 'Dren',   trainerId: '787971954', totalFans: 940,  monthlyGain: 35,  status: 'Nonaktif' },
]

function App() {
  // State utama: daftar anggota (array) + kata kunci pencarian
  const [anggota, setAnggota] = useState(dataAwal)
  const [cari, setCari] = useState('')

  const tambahAnggota = (dataBaru) => {
    setAnggota((sebelumnya) => [{ id: Date.now(), ...dataBaru }, ...sebelumnya])
  }
  const hapusAnggota = (id) => {
    setAnggota((sebelumnya) => sebelumnya.filter((a) => a.id !== id))
  }

  const anggotaTampil = anggota.filter((a) =>
    a.nama.toLowerCase().includes(cari.toLowerCase()),
  )

  return (
    <>
      <HeaderAplikasi />
      <main className="container py-4">
        <BannerClub />
        <RingkasanStatistik anggota={anggota} />
        <FormTambahAnggota onTambah={tambahAnggota} />
        <DaftarAnggota
          anggota={anggotaTampil}
          jumlahSemua={anggota.length}
          cari={cari}
          onCari={setCari}
          onHapus={hapusAnggota}
        />
        <KomunitasLink />
      </main>
      <KembaliKeAtas />
    </>
  )
}

export default App
