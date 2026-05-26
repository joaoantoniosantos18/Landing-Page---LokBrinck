// ✏️ Substitua pelos depoimentos reais dos seus clientes
const depoimentos = [
  {
    nome: 'Ana Paula',
    texto: 'Que experiência incrível! O tobogã foi um sucesso total na festa da minha filha. Chegaram no horário, montaram rápido e ainda ajudaram na organização. Super recomendo!',
    estrelas: 5,
    cor: 'var(--primaria)',
  },
  {
    nome: 'Marcos Oliveira',
    texto: 'Já é a terceira vez que alugo e sempre ótimo. A piscina de bolinhas ficou impecável, limpinha e as crianças adoraram. Atendimento pelo WhatsApp super ágil!',
    estrelas: 5,
    cor: 'var(--secundaria)',
  },
  {
    nome: 'Juliana Costa',
    texto: 'Contratei o castelo inflável para o aniversário do meu filho. Perfeito! Sem dores de cabeça, entregaram, montaram e buscaram no horário combinado. Nota 10!',
    estrelas: 5,
    cor: 'var(--verde)',
  },
]

function Depoimentos() {
  return (
    <section
      className="py-5"
      style={{ background: 'var(--bg-secundario)' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            className="badge mb-2 px-3 py-2 fw-bold"
            style={{
              background: 'white',
              color: 'var(--secundaria)',
              borderRadius: 30,
              fontSize: '0.85rem',
              border: '2px solid var(--cinza-200)',
            }}
          >
            💬 Quem já alugou
          </span>
          <h2
            className="fw-black"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.03em',
            }}
          >
            O que as famílias{' '}
            <span style={{ color: 'var(--primaria)' }}>estão falando ❤️</span>
          </h2>
        </div>

        <div className="row g-4">
          {depoimentos.map((dep) => (
            <div key={dep.nome} className="col-md-4">
              <div
                className="card card-hover p-4 h-100"
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--sombra)' }}
              >
                {/* Estrelas */}
                <div className="mb-3" style={{ fontSize: '1.1rem', color: 'var(--amarelo)' }}>
                  {'⭐'.repeat(dep.estrelas)}
                </div>

                {/* Texto */}
                <p
                  className="mb-4 flex-grow-1"
                  style={{
                    color: 'var(--texto-secundario)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  "{dep.texto}"
                </p>

                {/* Avatar + nome */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center fw-black text-white"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: dep.cor,
                      fontSize: '1.2rem',
                      flexShrink: 0,
                    }}
                  >
                    {dep.nome.charAt(0)}
                  </div>
                  <div>
                    <div className="fw-black" style={{ color: 'var(--texto-principal)' }}>
                      {dep.nome}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--texto-secundario)', fontWeight: 600 }}>
                      Cliente verificado
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