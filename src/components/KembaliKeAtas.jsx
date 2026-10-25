import { useEffect, useRef } from 'react'
import $ from 'jquery'

// Tombol "kembali ke atas": muncul/hilang saat scroll (jQuery fadeIn/fadeOut)
function KembaliKeAtas() {
  const tombol = useRef(null)

  useEffect(() => {
    const $tombol = $(tombol.current).hide()
    $(window).on('scroll.atas', () => {
      if ($(window).scrollTop() > 300) $tombol.fadeIn(200)
      else $tombol.fadeOut(200)
    })
    return () => $(window).off('scroll.atas')
  }, [])

  const keAtas = () => $('html, body').animate({ scrollTop: 0 }, 500)

  return (
    <button ref={tombol} className="btn btn-gradient ke-atas" onClick={keAtas} aria-label="Kembali ke atas">
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default KembaliKeAtas
