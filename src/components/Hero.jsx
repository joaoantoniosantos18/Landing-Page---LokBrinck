// ✏️ Personalize aqui
const WHATSAPP = '5585999999999'
const MSG_WHATSAPP = 'Olá! Quero saber mais sobre os brinquedos para locação.'

function Hero() {
  const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #FFF3E0 0%, #EDE0FF 50%, #FFF0F6 100%)',
        padding: '80px 0 60px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Círculos decorativos de fundo */}
      <div
        style={{
          position: 'absolute', top: -60, right: -60,
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: -40, left: -40,
          width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155,93,229,0.12), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="row align-items-center g-5">

          {/* Coluna de texto */}
          <div className="col-lg-6 text-center text-lg-start">
            <span
              className="badge mb-3 px-3 py-2 fw-bold"
              style={{
                background: 'var(--amarelo-claro)',
                color: 'var(--primaria)',
                borderRadius: 30,
                fontSize: '0.9rem',
                border: '2px solid var(--amarelo)',
              }}
            >
              🎉 Festa perfeita começa aqui!
            </span>

            <h1
              className="fw-black mb-3"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: 'var(--texto-principal)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              Brinquedos incríveis{' '}
              <span style={{ color: 'var(--primaria)' }}>para a festa</span>{' '}
              <span style={{ color: 'var(--secundaria)' }}>mais animada</span>{' '}
              da vida deles! 🚀
            </h1>

            <p
              className="mb-4"
              style={{
                fontSize: '1.15rem',
                color: 'var(--texto-secundario)',
                fontWeight: 600,
                maxWidth: 460,
                margin: '0 auto 1.5rem',
              }}
            >
              Tobogãs, piscinas de bolinhas, camas elásticas e muito mais —
              entregamos, montamos e buscamos. Você só aproveita! 🎈
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a
                href={urlWhats}
                target="_blank"
                rel="noreferrer"
                className="btn btn-festa px-4 py-3"
                style={{ fontSize: '1.1rem' }}
              >
                💬 Falar no WhatsApp
              </a>
              <a
                href="#catalogo"
                className="btn px-4 py-3 fw-bold"
                style={{
                  border: '2px solid var(--secundaria)',
                  color: 'var(--secundaria)',
                  borderRadius: 30,
                  background: 'transparent',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s',
                }}
              >
                🎠 Ver catálogo
              </a>
            </div>

            {/* Mini estatísticas */}
            <div className="d-flex flex-wrap gap-4 mt-4 justify-content-center justify-content-lg-start">
              {[
                { num: '500+', label: 'Festas realizadas' },
                { num: '50+', label: 'Brinquedos disponíveis' },
                { num: '⭐ 5.0', label: 'Avaliação média' },
              ].map((item) => (
                <div key={item.label} className="text-center text-lg-start">
                  <div
                    className="fw-black"
                    style={{ fontSize: '1.5rem', color: 'var(--primaria)' }}
                  >
                    {item.num}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--texto-secundario)', fontWeight: 600 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna visual / ilustração */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                maxWidth: 420,
                width: '100%',
              }}
            >
              {[
                { emoji: '🏄', label: 'Tobogã', cor: '#FFD23F', bg: '#FFF8D6' },
                { emoji: '🎪', label: 'Pula-pula', cor: '#FF6B9D', bg: '#FFF0F6' },
                { emoji: '🏊', label: 'Piscina de bolinhas', cor: '#4CC9F0', bg: '#E8F8FD' },
                { emoji: '🎯', label: 'Cama elástica', cor: '#06D6A0', bg: '#CCFBEF' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="d-flex flex-column align-items-center justify-content-center p-3 card-hover"
                  style={{
                    background: item.bg,
                    borderRadius: 'var(--radius)',
                    border: `2px solid ${item.cor}40`,
                    minHeight: 120,
                    cursor: 'default',
                    transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  }}
                >
                  <span style={{ fontSize: '2.8rem' }}>{item.emoji}</span>
                  <span
                    className="fw-bold mt-1 text-center"
                    style={{ fontSize: '0.85rem', color: item.cor }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero