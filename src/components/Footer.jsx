// ✏️ Personalize aqui
const NOME_EMPRESA = 'SG Locação'
const WHATSAPP_DISPLAY = '(85) 99117-3279'
const WHATSAPP = '5585991173279'
const EMAIL = 'contato@sglocacao.com.br'
const INSTAGRAM = 'https://instagram.com/sglocacao'
const CIDADE = 'Fortaleza, CE'

function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #1a0a3d, #2D1B69)',
        color: 'rgba(255,255,255,0.85)',
      }}
    >
      <div className="container">
        <div className="row g-4 mb-4">

          {/* Coluna 1 — Marca */}
          <div className="col-md-4">
            <div className="fw-black text-white mb-2" style={{ fontSize: '1.5rem' }}>
              🎪 {NOME_EMPRESA}
            </div>
            <p style={{ fontWeight: 600, opacity: 0.75, fontSize: '0.95rem', lineHeight: 1.6 }}>
              Aluguel de brinquedos para festas infantis com entrega, montagem e
              desmontagem inclusos. Diversão garantida! 🎉
            </p>
          </div>

          {/* Coluna 2 — Links */}
          <div className="col-md-4">
            <h6 className="fw-black text-white mb-3" style={{ letterSpacing: '-0.01em' }}>
              Links rápidos
            </h6>
            <div className="d-flex flex-column gap-2">
              {[
                { href: '#diferenciais', label: '✨ Por que nós?' },
                { href: '#catalogo', label: '🎠 Catálogo' },
                { href: '#como-funciona', label: '🗺️ Como funciona' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-decoration-none fw-bold"
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--amarelo)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="col-md-4">
            <h6 className="fw-black text-white mb-3" style={{ letterSpacing: '-0.01em' }}>
              Contato
            </h6>
            <div className="d-flex flex-column gap-2">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}
              >
                📱 {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-decoration-none fw-bold"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}
              >
                ✉️ {EMAIL}
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}
              >
                📸 Instagram
              </a>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, opacity: 0.7 }}>
                📍 {CIDADE}
              </span>
            </div>
          </div>

        </div>

        {/* Linha divisória */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
          <p className="text-center mb-0" style={{ fontSize: '0.85rem', opacity: 0.5, fontWeight: 600 }}>
            © {new Date().getFullYear()} {NOME_EMPRESA} · Todos os direitos reservados · Feito com ❤️ para festas incríveis
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer