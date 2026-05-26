// ✏️ Personalize aqui
const NOME_EMPRESA = 'SG Locação'
const WHATSAPP = '5585999999999'
const MSG_WHATSAPP = 'Olá! Quero saber mais sobre os brinquedos para locação.'

function Navbar() {
  const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'rgba(255,255,255,0.85)',
        borderBottom: '1px solid rgba(155,93,229,0.1)',
        boxShadow: '0 2px 30px rgba(155,93,229,0.08)',
        padding: '0.75rem 0',
      }}
    >
      <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
        <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
          <span style={{ fontSize: '1.8rem' }}>🎪</span>
          <span
            className="fw-black"
            style={{
              fontSize: '1.4rem',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.03em',
            }}
          >
            {NOME_EMPRESA}
          </span>
        </a>

        <div className="d-flex align-items-center flex-wrap gap-4">
          {[
            { href: '#diferenciais', label: 'Por que nós?' },
            { href: '#catalogo', label: 'Catálogo' },
            { href: '#como-funciona', label: 'Como funciona' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-decoration-none fw-bold"
              style={{
                color: 'var(--texto-secundario)',
                fontSize: '0.95rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--secundaria)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--texto-secundario)')}
            >
              {link.label}
            </a>
          ))}

          <a
            href={urlWhats}
            target="_blank"
            rel="noreferrer"
            className="btn btn-festa px-4 py-2"
            style={{ fontSize: '0.9rem' }}
          >
            📲 Reservar agora
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar