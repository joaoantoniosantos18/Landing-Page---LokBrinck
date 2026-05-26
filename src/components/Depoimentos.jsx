// ✏️ Substitua pelos depoimentos reais dos seus clientes
const depoimentos = [
  {
    nome: 'Ana Paula M.',
    cargo: 'Mãe da Isabela, 5 anos',
    texto: 'Que experiência incrível! O tobogã foi um sucesso total. Chegaram no horário, montaram super rápido e ainda ajudaram com a organização. Todas as crianças amaram. Vou alugar de novo com certeza!',
    estrelas: 5,
    avatar: 'A',
    cor: 'var(--primaria)',
    bg: 'linear-gradient(135deg, #FFF8D6, #FFE4C4)',
  },
  {
    nome: 'Marcos Oliveira',
    cargo: 'Pai do Pedro, 7 anos',
    texto: 'Já é a terceira vez que alugo e sempre ótimo. A piscina de bolinhas ficou impecável, limpinha. Atendimento pelo WhatsApp super ágil e profissional. Recomendo demais pra quem quer uma festa tranquila!',
    estrelas: 5,
    avatar: 'M',
    cor: 'var(--secundaria)',
    bg: 'linear-gradient(135deg, #EDE0FF, #E0D0FF)',
  },
  {
    nome: 'Juliana Costa',
    cargo: 'Mãe do Mateus, 4 anos',
    texto: 'O castelo inflável foi o destaque do aniversário do meu filho. Perfeito! Entregaram, montaram e buscaram no horário combinado. Zero dor de cabeça para mim. Nota 10 em tudo!',
    estrelas: 5,
    avatar: 'J',
    cor: 'var(--verde)',
    bg: 'linear-gradient(135deg, #CCFBEF, #B0F4E4)',
  },
]

function Depoimentos() {
  return (
    <section
      style={{
        background: 'var(--bg-principal)',
        padding: '100px 0',
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <p className="fw-bold mb-2" style={{ color: 'var(--secundaria)', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            💬 Quem já alugou
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
            O que as famílias estão{' '}
            <span style={{ color: 'var(--primaria)' }}>falando ❤️</span>
          </h2>
        </div>

        <div className="row g-4">
          {depoimentos.map((dep) => (
            <div key={dep.nome} className="col-md-4">
              <div
                className="card-hover h-100 p-4"
                style={{
                  background: dep.bg,
                  borderRadius: 'var(--radius)',
                  border: '2px solid transparent',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Aspas decorativas */}
                <div
                  className="fw-black"
                  style={{
                    fontSize: '4rem',
                    lineHeight: 0.8,
                    color: dep.cor,
                    opacity: 0.2,
                    marginBottom: '0.5rem',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  "
                </div>

                {/* Estrelas */}
                <div className="mb-3" style={{ fontSize: '1rem', letterSpacing: 2 }}>
                  {'⭐'.repeat(dep.estrelas)}
                </div>

                {/* Texto */}
                <p
                  className="flex-grow-1 mb-4"
                  style={{
                    color: 'var(--texto-principal)',
                    fontWeight: 600,
                    fontSize: '0.97rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                  }}
                >
                  {dep.texto}
                </p>

                {/* Avatar + nome */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center fw-black text-white flex-shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: dep.cor,
                      fontSize: '1.3rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {dep.avatar}
                  </div>
                  <div>
                    <div className="fw-black" style={{ color: 'var(--texto-principal)', fontSize: '0.95rem' }}>
                      {dep.nome}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--texto-secundario)', fontWeight: 600 }}>
                      {dep.cargo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Depoimentos