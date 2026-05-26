const diferenciais = [
  {
    emoji: '🚚',
    titulo: 'Entrega e montagem inclusa',
    descricao: 'Levamos até você, montamos tudo e buscamos depois. Sem dor de cabeça, sem custo extra.',
    cor: 'var(--primaria)',
    bg: 'linear-gradient(135deg, #FFF8D6, #FFF3E0)',
    borda: 'var(--amarelo)',
  },
  {
    emoji: '🧼',
    titulo: 'Higienizados e seguros',
    descricao: 'Todos os brinquedos passam por limpeza rigorosa e vistoria de segurança antes de cada evento.',
    cor: 'var(--verde)',
    bg: 'linear-gradient(135deg, #CCFBEF, #E0FFF6)',
    borda: 'var(--verde)',
  },
  {
    emoji: '⚡',
    titulo: 'Agendamento em minutos',
    descricao: 'Reserve pelo WhatsApp em minutos. Confirmação rápida e atendimento personalizado.',
    cor: 'var(--secundaria)',
    bg: 'linear-gradient(135deg, #EDE0FF, #F3EEFF)',
    borda: 'var(--secundaria)',
  },
  {
    emoji: '🎉',
    titulo: 'Para qualquer evento',
    descricao: 'Aniversários, confraternizações, festas escolares — temos o brinquedo certo para cada momento.',
    cor: 'var(--rosa)',
    bg: 'linear-gradient(135deg, #FFF0F6, #FFE8F2)',
    borda: 'var(--rosa)',
  },
]

function Diferenciais() {
  return (
    <section
      id="diferenciais"
      style={{ background: 'var(--bg-principal)', padding: '100px 0' }}
    >
      <div className="container">

        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <p className="fw-bold mb-2" style={{ color: 'var(--secundaria)', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            ✨ Por que escolher a gente
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
            A festa fica na memória,{' '}
            <br className="d-none d-md-block" />
            <span style={{ color: 'var(--primaria)' }}>o trabalho fica com a gente</span>
          </h2>
          <p
            className="mx-auto mt-3"
            style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.7 }}
          >
            Cuidamos de cada detalhe para você focar só em aproveitar o momento especial dos seus filhos.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {diferenciais.map((item) => (
            <div key={item.titulo} className="col-sm-6 col-lg-3">
              <div
                className="card-hover h-100 p-4"
                style={{
                  background: item.bg,
                  borderRadius: 'var(--radius)',
                  border: `2px solid ${item.borda}30`,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 20,
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.2rem',
                    marginBottom: '1.2rem',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  }}
                >
                  {item.emoji}
                </div>
                <h5
                  className="fw-black mb-2"
                  style={{ color: item.cor, letterSpacing: '-0.02em', fontSize: '1.1rem' }}
                >
                  {item.titulo}
                </h5>
                <p
                  className="mb-0"
                  style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.65 }}
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