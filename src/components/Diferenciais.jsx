const diferenciais = [
  {
    emoji: '🚚',
    titulo: 'Entrega e montagem inclusa',
    descricao: 'Levamos até você, montamos tudo e buscamos depois. Sem dor de cabeça!',
    cor: 'var(--primaria)',
    bg: 'var(--amarelo-claro)',
  },
  {
    emoji: '🧼',
    titulo: 'Higienizados e seguros',
    descricao: 'Todos os brinquedos passam por limpeza e vistoria antes de cada evento.',
    cor: 'var(--verde)',
    bg: 'var(--verde-claro)',
  },
  {
    emoji: '⚡',
    titulo: 'Agendamento fácil',
    descricao: 'Reserve pelo WhatsApp em minutos. Confirmação rápida e sem burocracia.',
    cor: 'var(--secundaria)',
    bg: 'var(--cinza-200)',
  },
  {
    emoji: '🎉',
    titulo: 'Para todo tipo de evento',
    descricao: 'Aniversários, confraternizações, festas escolares — temos o tamanho certo.',
    cor: 'var(--rosa)',
    bg: '#FFF0F6',
  },
]

function Diferenciais() {
  return (
    <section
      id="diferenciais"
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
            ✨ Por que a gente?
          </span>
          <h2
            className="fw-black"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.03em',
            }}
          >
            A festa fica na memória,{' '}
            <span style={{ color: 'var(--secundaria)' }}>o trabalho fica com a gente</span>
          </h2>
          <p style={{ color: 'var(--texto-secundario)', fontWeight: 600, maxWidth: 500, margin: '0.5rem auto 0' }}>
            Cuidamos de tudo para você focar só em aproveitar o momento especial.
          </p>
        </div>

        <div className="row g-4">
          {diferenciais.map((item) => (
            <div key={item.titulo} className="col-sm-6 col-lg-3">
              <div
                className="card card-hover p-4 h-100 text-center"
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--sombra)' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: item.bg,
                    fontSize: '2rem',
                  }}
                >
                  {item.emoji}
                </div>
                <h5
                  className="fw-black mb-2"
                  style={{ color: item.cor, letterSpacing: '-0.02em' }}
                >
                  {item.titulo}
                </h5>
                <p
                  className="mb-0"
                  style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diferenciais