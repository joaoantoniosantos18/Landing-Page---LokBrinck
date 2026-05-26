// ✏️ Personalize aqui
const WHATSAPP = '5585999999999'

const produtos = [
  { emoji: '🏄', nome: 'Tobogã Gigante',        preco: 'R$ 350', tag: 'Mais alugado', disponivel: true,  cor: '#FF6B35', bg: 'linear-gradient(145deg, #FFF8D6, #FFE4C4)' },
  { emoji: '🏰', nome: 'Castelo Inflável',        preco: 'R$ 380', tag: 'Novo',         disponivel: true,  cor: '#9B5DE5', bg: 'linear-gradient(145deg, #EDE0FF, #E0D0FF)' },
  { emoji: '🏊', nome: 'Piscina de Bolinhas',     preco: 'R$ 200', tag: null,            disponivel: true,  cor: '#4CC9F0', bg: 'linear-gradient(145deg, #E8F8FD, #D0F0FF)' },
  { emoji: '🎪', nome: 'Pula-pula Temático',      preco: 'R$ 280', tag: null,            disponivel: true,  cor: '#FF6B9D', bg: 'linear-gradient(145deg, #FFF0F6, #FFE0EE)' },
  { emoji: '🎯', nome: 'Cama Elástica',           preco: 'R$ 320', tag: null,            disponivel: false, cor: '#06D6A0', bg: 'linear-gradient(145deg, #CCFBEF, #B0F4E4)' },
  { emoji: '🎠', nome: 'Carrossel Infantil',      preco: 'R$ 250', tag: null,            disponivel: true,  cor: '#FFD23F', bg: 'linear-gradient(145deg, #FFF8D6, #FFF0B0)' },
  { emoji: '🌊', nome: 'Tobogã Aquático',         preco: 'R$ 420', tag: 'Premium',       disponivel: true,  cor: '#4CC9F0', bg: 'linear-gradient(145deg, #E8F8FD, #CCF0FF)' },
  { emoji: '🎡', nome: 'Roda Gigante Mini',       preco: 'R$ 300', tag: null,            disponivel: false, cor: '#FFD23F', bg: 'linear-gradient(145deg, #FFF8D6, #FFE8A0)' },
]

function Catalogo() {
  return (
    <section
      id="catalogo"
      style={{
        background: `
          radial-gradient(ellipse at 0% 50%, rgba(155,93,229,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 100% 50%, rgba(255,107,53,0.07) 0%, transparent 60%),
          var(--bg-secundario)
        `,
        padding: '100px 0',
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <p className="fw-bold mb-2" style={{ color: 'var(--primaria)', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            🎠 Nosso catálogo
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
            Escolha o brinquedo perfeito{' '}
            <span style={{ color: 'var(--secundaria)' }}>para a sua festa 🎉</span>
          </h2>
          <p
            className="mx-auto mt-3"
            style={{ color: 'var(--texto-secundario)', fontWeight: 600, fontSize: '1.05rem', maxWidth: 460 }}
          >
            Todos com entrega, montagem e desmontagem inclusos no preço.
          </p>
        </div>

        <div className="row g-4">
          {produtos.map((produto) => {
            const msg = `Olá! Tenho interesse em alugar: *${produto.nome}*. Pode me passar mais informações?`
            const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

            return (
              <div key={produto.nome} className="col-sm-6 col-lg-3">
                <div
                  className="card-hover h-100"
                  style={{
                    background: 'white',
                    borderRadius: 'var(--radius)',
                    border: '2px solid var(--cinza-200)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {/* Badge */}
                  {produto.tag && (
                    <div
                      style={{
                        position: 'absolute', top: 12, left: 12, zIndex: 2,
                        background: produto.tag === 'Premium' ? 'var(--secundaria)' : 'var(--amarelo)',
                        color: produto.tag === 'Premium' ? 'white' : 'var(--texto-principal)',
                        borderRadius: 20,
                        padding: '3px 12px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {produto.tag === 'Mais alugado' ? '⭐ ' : produto.tag === 'Novo' ? '🆕 ' : '💎 '}
                      {produto.tag}
                    </div>
                  )}

                  {/* Visual placeholder */}
                  <div
                    style={{
                      height: 160,
                      background: produto.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4.5rem',
                    }}
                  >
                    {produto.emoji}
                  </div>

                  {/* Corpo */}
                  <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        marginBottom: '0.6rem',
                        background: produto.disponivel ? 'var(--verde-claro)' : '#FFE5E5',
                        color: produto.disponivel ? '#047857' : 'var(--vermelho)',
                        borderRadius: 20,
                        padding: '2px 10px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                      }}
                    >
                      {produto.disponivel ? '✅ Disponível' : '⏳ Sob consulta'}
                    </span>

                    <h5
                      className="fw-black mb-1"
                      style={{ color: 'var(--texto-principal)', letterSpacing: '-0.02em', fontSize: '1.05rem' }}
                    >
                      {produto.nome}
                    </h5>

                    <div className="d-flex align-items-baseline gap-1 mb-3">
                      <span className="fw-black" style={{ fontSize: '1.5rem', color: produto.cor }}>
                        {produto.preco}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--texto-secundario)', fontWeight: 600 }}>
                        /diária
                      </span>
                    </div>

                    <a
                      href={urlWhats}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-festa mt-auto py-2"
                      style={{ fontSize: '0.88rem' }}
                    >
                      📲 Reservar agora
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