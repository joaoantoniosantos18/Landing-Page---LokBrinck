const etapas = [
  {
    numero: '01',
    emoji: '🎠',
    titulo: 'Escolha o brinquedo',
    descricao: 'Navegue pelo catálogo e escolha o que vai deixar a garotada feliz.',
    cor: 'var(--primaria)',
    bg: 'var(--amarelo-claro)',
  },
  {
    numero: '02',
    emoji: '📅',
    titulo: 'Informe a data e local',
    descricao: 'Mande mensagem pelo WhatsApp com a data, horário e endereço da festa.',
    cor: 'var(--secundaria)',
    bg: 'var(--cinza-200)',
  },
  {
    numero: '03',
    emoji: '✅',
    titulo: 'A gente confirma',
    descricao: 'Verificamos disponibilidade e confirmamos todos os detalhes com você.',
    cor: 'var(--verde)',
    bg: 'var(--verde-claro)',
  },
  {
    numero: '04',
    emoji: '🎉',
    titulo: 'Só aproveitar!',
    descricao: 'Entregamos, montamos e buscamos. Você curte a festa sem preocupação.',
    cor: 'var(--rosa)',
    bg: '#FFF0F6',
  },
]

function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-5"
      style={{ background: 'var(--bg-principal)' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            className="badge mb-2 px-3 py-2 fw-bold"
            style={{
              background: 'var(--cinza-200)',
              color: 'var(--secundaria)',
              borderRadius: 30,
              fontSize: '0.85rem',
            }}
          >
            🗺️ Passo a passo
          </span>
          <h2
            className="fw-black"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.03em',
            }}
          >
            Como funciona?{' '}
            <span style={{ color: 'var(--secundaria)' }}>É simples assim!</span>
          </h2>
        </div>

        <div className="row g-4 align-items-start">
          {etapas.map((etapa, index) => (
            <div key={etapa.numero} className="col-sm-6 col-lg-3">
              <div
                className="card card-hover p-4 h-100"
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--sombra)' }}
              >
                {/* Número grande */}
                <div
                  className="fw-black mb-2"
                  style={{
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: etapa.cor,
                    opacity: 0.2,
                    fontFamily: 'Nunito, sans-serif',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {etapa.numero}
                </div>

                {/* Ícone */}
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: etapa.bg,
                    fontSize: '1.8rem',
                  }}
                >
                  {etapa.emoji}
                </div>

                <h5
                  className="fw-black mb-2"
                  style={{ color: etapa.cor, letterSpacing: '-0.02em' }}
                >
                  {etapa.titulo}
                </h5>
                <p
                  className="mb-0"
                  style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {etapa.descricao}
                </p>

                {/* Seta conectora (exceto no último) */}
                {index < etapas.length - 1 && (
                  <div
                    className="d-none d-lg-block position-absolute"
                    style={{
                      right: -18,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '1.5rem',
                      zIndex: 1,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona