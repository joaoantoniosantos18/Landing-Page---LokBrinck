// ✏️ Personalize aqui
const NOME_EMPRESA   = 'SG Locação'
const WHATSAPP_LABEL = '(85) 99999-9999'
const WHATSAPP       = '5585999999999'
const EMAIL          = 'contato@sglocacao.com.br'
const INSTAGRAM      = 'https://instagram.com/sglocacao'
const CIDADE         = 'Fortaleza, CE'
const ANO_FUNDACAO   = '2021'

function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #1a0a3d 0%, #0d0520 100%)',
        padding: '60px 0 30px',
        color: 'rgba(255,255,255,0.75)',
      }}
    >
      <div className="container">
        <div className="row g-5 mb-5">

          {/* Marca */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span style={{ fontSize: '2rem' }}>🎪</span>
              <span
                className="fw-black text-white"
                style={{ fontSize: '1.4rem', letterSpacing: '-0.03em' }}
              >
                {NOME_EMPRESA}
              </span>
            </div>
            <p
              style={{
                fontWeight: 600,
                lineHeight: 1.7,
                fontSize: '0.95rem',
                maxWidth: 280,
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Aluguel de brinquedos para festas infantis com entrega,
              montagem e desmontagem inclusos. Diversão garantida desde {ANO_FUNDACAO}! 🎉
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h6
              className="fw-black text-white mb-4"
              style={{ letterSpacing: '-0.01em', fontSize: '1rem' }}
            >
              Navegação
            </h6>
            <div className="d-flex flex-column gap-3">
              {[
                { href: '#diferenciais', label: 'Por que nós?' },
                { href: '#catalogo',     label: 'Catálogo' },
                { href: '#como-funciona',label: 'Como funciona' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-decoration-none fw-bold d-flex align-items-center gap-2"
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amarelo)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <span style={{ opacity: 0.4 }}>→</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="col-md-4">
            <h6
              className="fw-black text-white mb-4"
              style={{ letterSpacing: '-0.01em', fontSize: '1rem' }}
            >
              Contato
            </h6>
            <div className="d-flex flex-column gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                📱 {WHATSAPP_LABEL}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-decoration-none fw-bold d-flex align-items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                ✉️ {EMAIL}
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1306C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                📸 Instagram
              </a>
              <span
                className="fw-bold d-flex align-items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}
              >
                📍 {CIDADE}
              </span>
            </div>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <p
            className="mb-0 text-center"
            style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}
          >
            © {new Date().getFullYear()} {NOME_EMPRESA} · Todos os direitos reservados · Feito com ❤️ para festas incríveis
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer