// ✏️ Personalize aqui
const NOME_EMPRESA = 'SG Locação'
const WHATSAPP = '5585991173279' // troque pelo número real
const MSG_WHATSAPP = 'Olá! Quero saber mais sobre os brinquedos para locação.'

function Navbar() {
  const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  return (
    <nav
      className="navbar px-3 py-2 flex-wrap gap-2"
      style={{
        background: 'linear-gradient(135deg, #9B5DE5, #7B2FBE)',
        minHeight: 64,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 20px rgba(123,47,190,0.3)',
      }}
    >
      <a className="navbar-brand text-white fw-black fs-4 text-decoration-none" href="#">
        🎪 {NOME_EMPRESA}
      </a>
      <div className="d-flex align-items-center flex-wrap gap-3">
        <a href="#diferenciais" className="text-white fw-bold text-decoration-none small">
          Por que nós?
        </a>
        <a href="#catalogo" className="text-white fw-bold text-decoration-none small">
          Catálogo
        </a>
        <a href="#como-funciona" className="text-white fw-bold text-decoration-none small">
          Como funciona
        </a>
        <a href={urlWhats} target="_blank" rel="noreferrer" className="btn btn-festa px-3 py-2">
          📲 Agendar agora
        </a>
      </div>
    </nav>
  )
}

export default Navbar