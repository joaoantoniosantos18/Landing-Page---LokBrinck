const etapas = [
  {
    numero: '01',
    emoji: '🎠',
    titulo: 'Escolha o brinquedo',
    descricao: 'Navegue pelo catálogo e escolha o que vai deixar a garotada feliz.',
    cor: 'var(--primaria)',
    bg: 'linear-gradient(135deg, #FFF8D6, #FFE4C4)',
  },
  {
    numero: '02',
    emoji: '📅',
    titulo: 'Informe a data e local',
    descricao: 'Mande mensagem com a data, horário e endereço da festa pelo WhatsApp.',
    cor: 'var(--secundaria)',
    bg: 'linear-gradient(135deg, #EDE0FF, #E0D0FF)',
  },
  {
    numero: '03',
    emoji: '✅',
    titulo: 'Confirmamos tudo',
    descricao: 'Verificamos disponibilidade e confirmamos todos os detalhes com você.',
    cor: 'var(--verde)',
    bg: 'linear-gradient(135deg, #CCFBEF, #B0F4E4)',
  },
  {
    numero: '04',
    emoji: '🎉',
    titulo: 'Só aproveitar!',
    descricao: 'Montamos, entregamos e buscamos. Você curte a festa sem preocupação.',
    cor: 'var(--rosa)',
    bg: 'linear-gradient(135deg, #FFF0F6, #FFE0EE)',
  },
]

function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{ background: 'var(--bg-principal)', padding: '100px 0' }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <p className="fw-bold mb-2" style={{ color: 'var(--verde)', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            🗺️ Passo a passo
          </p>
          <h2
            className="fw-black"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.04em',
              lineHeight: 1.15,
            }}
          >
            Como funciona?{' '}
            <span style={{ color: 'var(--secundaria)' }}>É simples assim! 😄</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="row g-4 align-items-stretch position-relative">
          {/* Linha conectora decorativa (só desktop) */}
          <div
            className="d-none d-lg-block"
            style={{
              position: 'absolute',
              top: '42%',
              left: '12.5%',
              right: '12.5%',
              height: 3,
              background: 'linear-gradient(90deg, var(--primaria), var(--secundaria), var(--verde), var(--rosa))',
              borderRadius: 4,
              opacity: 0.25,
              zIndex: 0,
            }}
          />

          {etapas.map((etapa) => (
            <div key={etapa.numero} className="col-sm-6 col-lg-3" style={{ position: 'relative', zIndex: 1 }}>
              <div
                className="card-hover h-100 p-4 text-center"
                style={{
                  background: etapa.bg,
                  borderRadius: 'var(--radius)',
                  border: '2px solid transparent',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                {/* Número grande decorativo */}
                <div
                  className="fw-black"
                  style={{
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: etapa.cor,
                    opacity: 0.12,
                    letterSpacing: '-0.06em',
                    marginBottom: '-0.5rem',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  {etapa.numero}
                </div>

                {/* Ícone */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    margin: '0 auto 1rem',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                >
                  {etapa.emoji}
                </div>

                {/* Número visível */}
                <span
                  className="fw-black d-block mb-1"
                  style={{ fontSize: '0.78rem', color: etapa.cor, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  Passo {etapa.numero}
                </span>

                <h5
                  className="fw-black mb-2"
                  style={{ color: 'var(--texto-principal)', letterSpacing: '-0.02em', fontSize: '1.1rem' }}
                >
                  {etapa.titulo}
                </h5>
                <p
                  className="mb-0"
                  style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '0.93rem', lineHeight: 1.65 }}
                >
                  {etapa.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ComoFunciona