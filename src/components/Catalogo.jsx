// ✏️ Personalize aqui — adicione ou remova itens do catálogo
const WHATSAPP = '5585991173279'

const produtos = [
  { emoji: '🏄', nome: 'Tobogã Gigante', preco: 'R$ 350', disponivel: true, cor: '#FFD23F', bg: '#FFF8D6', destaque: true },
  { emoji: '🎪', nome: 'Pula-pula Grande', preco: 'R$ 280', disponivel: true, cor: '#FF6B9D', bg: '#FFF0F6', destaque: false },
  { emoji: '🏊', nome: 'Piscina de Bolinhas', preco: 'R$ 200', disponivel: true, cor: '#4CC9F0', bg: '#E8F8FD', destaque: false },
  { emoji: '🎯', nome: 'Cama Elástica', preco: 'R$ 320', disponivel: false, cor: '#06D6A0', bg: '#CCFBEF', destaque: false },
  { emoji: '🏰', nome: 'Castelo Inflável', preco: 'R$ 380', disponivel: true, cor: '#9B5DE5', bg: '#EDE0FF', destaque: true },
  { emoji: '🎠', nome: 'Carrossel Infantil', preco: 'R$ 250', disponivel: true, cor: '#FF6B35', bg: '#FFF3E0', destaque: false },
  { emoji: '🌊', nome: 'Tobogã Aquático', preco: 'R$ 420', disponivel: true, cor: '#4CC9F0', bg: '#E8F8FD', destaque: false },
  { emoji: '🎡', nome: 'Roda Gigante Mini', preco: 'R$ 300', disponivel: false, cor: '#FFD23F', bg: '#FFF8D6', destaque: false },
]

function Catalogo() {
  return (
    <section
      id="catalogo"
      className="py-5"
      style={{ background: 'var(--bg-secundario)' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            className="badge mb-2 px-3 py-2 fw-bold"
            style={{
              background: 'white',
              color: 'var(--primaria)',
              borderRadius: 30,
              fontSize: '0.85rem',
              border: '2px solid var(--primaria)',
            }}
          >
            🎠 Nosso catálogo
          </span>
          <h2
            className="fw-black"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--texto-principal)',
              letterSpacing: '-0.03em',
            }}
          >
            Escolha o{' '}
            <span style={{ color: 'var(--primaria)' }}>brinquedo perfeito</span>
            {' '}para a sua festa 🎉
          </h2>
          <p style={{ color: 'var(--texto-secundario)', fontWeight: 600 }}>
            Todos com entrega, montagem e desmontagem inclusos no preço.
          </p>
        </div>

        <div className="row g-4">
          {produtos.map((produto) => {
            const msgWhats = `Olá! Tenho interesse em alugar: ${produto.nome}. Pode me passar mais informações?`
            const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msgWhats)}`

            return (
              <div key={produto.nome} className="col-sm-6 col-lg-3">
                <div
                  className="card card-hover h-100"
                  style={{
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--sombra)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Badge destaque */}
                  {produto.destaque && (
                    <div
                      className="position-absolute fw-bold"
                      style={{
                        top: 12, left: 12, zIndex: 2,
                        background: 'var(--amarelo)',
                        color: 'var(--texto-principal)',
                        borderRadius: 20,
                        padding: '2px 10px',
                        fontSize: '0.75rem',
                      }}
                    >
                      ⭐ Mais alugado
                    </div>
                  )}

                  {/* Imagem / placeholder */}
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: 140,
                      background: produto.bg,
                      fontSize: '4rem',
                    }}
                  >
                    {produto.emoji}
                  </div>

                  <div className="card-body d-flex flex-column p-3">
                    {/* Badge disponibilidade */}
                    <span
                      className="badge mb-2 align-self-start fw-bold"
                      style={{
                        background: produto.disponivel ? 'var(--verde-claro)' : '#FFE5E5',
                        color: produto.disponivel ? 'var(--verde)' : 'var(--vermelho)',
                        borderRadius: 20,
                        fontSize: '0.75rem',
                      }}
                    >
                      {produto.disponivel ? '✅ Disponível' : '⏳ Sob consulta'}
                    </span>

                    <h5
                      className="fw-black mb-1"
                      style={{ color: 'var(--texto-principal)', letterSpacing: '-0.02em' }}
                    >
                      {produto.nome}
                    </h5>

                    <p
                      className="fw-black mb-3"
                      style={{ color: produto.cor, fontSize: '1.3rem' }}
                    >
                      {produto.preco}
                      <span
                        style={{ fontSize: '0.75rem', color: 'var(--texto-secundario)', fontWeight: 600 }}
                      >
                        {' '}/diária
                      </span>
                    </p>

                    <a
                      href={urlWhats}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-festa mt-auto py-2"
                      style={{ fontSize: '0.9rem' }}
                    >
                      📲 Agendar
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Catalogo