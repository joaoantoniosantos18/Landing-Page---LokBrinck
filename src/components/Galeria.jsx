// Seção de galeria inspirada na Lokbrink — substitua os emojis/cores por fotos reais depois
// Para adicionar uma foto real: troque o <div> do placeholder por <img src="caminho/foto.jpg" ... />

const fotos = [
  { emoji: '🏄', bg: 'linear-gradient(145deg, #FFF8D6, #FFD23F)', label: 'Tobogã na festa da Isabela' },
  { emoji: '🏰', bg: 'linear-gradient(145deg, #EDE0FF, #9B5DE5)', label: 'Castelo inflável' },
  { emoji: '🎉', bg: 'linear-gradient(145deg, #FFF0F6, #FF6B9D)', label: 'Crianças se divertindo' },
  { emoji: '🏊', bg: 'linear-gradient(145deg, #E8F8FD, #4CC9F0)', label: 'Piscina de bolinhas' },
  { emoji: '🎈', bg: 'linear-gradient(145deg, #CCFBEF, #06D6A0)', label: 'Festa incrível' },
  { emoji: '🎠', bg: 'linear-gradient(145deg, #FFF3E0, #FF6B35)', label: 'Carrossel animado' },
]

function Galeria() {
  return (
    <section
      style={{
        background: 'var(--bg-secundario)',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p className="fw-bold mb-2" style={{ color: 'var(--rosa)', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            📸 Momentos inesquecíveis
          </p>
          <h2
            className="fw-black"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.04em',
            }}
          >
            Veja a alegria em cada{' '}
            <span style={{ color: 'var(--rosa)' }}>festa! ❤️</span>
          </h2>
          <p
            className="mx-auto mt-3"
            style={{ color: 'var(--texto-secundario)', fontWeight: 600, maxWidth: 420, fontSize: '1rem' }}
          >
            Substitua estes cards pelas fotos reais das suas festas para causar ainda mais impacto.
          </p>
        </div>

        {/* Mosaico estilo Lokbrink — grade assimétrica */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '1rem',
          }}
        >
          {/* Item 0 — grande (ocupa 2 linhas) */}
          <div
            className="card-hover"
            style={{
              background: fotos[0].bg,
              borderRadius: 'var(--radius)',
              gridRow: 'span 2',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span style={{ fontSize: '5rem' }}>{fotos[0].emoji}</span>
            <span
              className="fw-bold mt-2 text-center px-3"
              style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.5)' }}
            >
              {fotos[0].label}
            </span>
          </div>

          {/* Itens 1 e 2 — normais */}
          {fotos.slice(1, 3).map((foto) => (
            <div
              key={foto.label}
              className="card-hover"
              style={{
                background: foto.bg,
                borderRadius: 'var(--radius)',
                minHeight: 145,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '3.5rem' }}>{foto.emoji}</span>
              <span
                className="fw-bold mt-1 text-center px-2"
                style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.45)' }}
              >
                {foto.label}
              </span>
            </div>
          ))}

          {/* Itens 3, 4, 5 — linha de baixo */}
          {fotos.slice(3).map((foto) => (
            <div
              key={foto.label}
              className="card-hover"
              style={{
                background: foto.bg,
                borderRadius: 'var(--radius)',
                minHeight: 145,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '3.5rem' }}>{foto.emoji}</span>
              <span
                className="fw-bold mt-1 text-center px-2"
                style={{ fontSize: '0.78rem', color: 'rgba(0,0,0,0.45)' }}
              >
                {foto.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA da galeria */}
        <div className="text-center mt-4">
          <p style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '0.95rem' }}>
            📸 Siga a gente no Instagram para ver mais momentos:{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="fw-black text-decoration-none"
              style={{ color: 'var(--rosa)' }}
            >
              @sglocacao
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Galeria