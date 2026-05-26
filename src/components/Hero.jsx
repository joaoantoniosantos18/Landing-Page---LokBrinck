// ✏️ Personalize aqui
const WHATSAPP = '5585999999999'
const MSG_WHATSAPP = 'Olá! Quero reservar um brinquedo para minha festa!'

const style = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(6deg); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(-5deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-title   { animation: fadeUp 0.7s ease both; }
  .hero-sub     { animation: fadeUp 0.7s 0.15s ease both; }
  .hero-btns    { animation: fadeUp 0.7s 0.3s ease both; }
  .hero-stats   { animation: fadeUp 0.7s 0.45s ease both; }
  .float-a      { animation: float  4s ease-in-out infinite; }
  .float-b      { animation: float2 5s ease-in-out infinite; }
  .float-c      { animation: float  6s 1s ease-in-out infinite; }
  .float-d      { animation: float2 4.5s 0.5s ease-in-out infinite; }
`

function Hero() {
  const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  const stats = [
    { valor: '500+', label: 'Festas realizadas' },
    { valor: '50+',  label: 'Brinquedos' },
    { valor: '5.0⭐', label: 'Avaliação' },
    { valor: '100%', label: 'Satisfação' },
  ]

  const floats = [
    { emoji: '🎪', top: '12%',  left: '4%',  size: '3.2rem', cls: 'float-a' },
    { emoji: '🏄', top: '18%',  right: '6%', size: '3rem',   cls: 'float-b' },
    { emoji: '🏊', bottom:'18%',left: '6%',  size: '2.8rem', cls: 'float-c' },
    { emoji: '🎠', bottom:'12%',right: '4%', size: '3.2rem', cls: 'float-d' },
    { emoji: '⭐', top: '55%',  left: '2%',  size: '1.8rem', cls: 'float-b' },
    { emoji: '🎈', top: '40%',  right: '2%', size: '2rem',   cls: 'float-a' },
  ]

  return (
    <>
      <style>{style}</style>
      <section
        style={{
          minHeight: '100vh',
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(155,93,229,0.2) 0%, transparent 55%),
            radial-gradient(ellipse at 60% 80%, rgba(255,107,157,0.15) 0%, transparent 55%),
            #FFFBF5
          `,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 0',
        }}
      >
        {/* Círculos decorativos grandes */}
        <div style={{
          position:'absolute', top:-120, right:-120,
          width:500, height:500, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(155,93,229,0.08), transparent 70%)',
          pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', bottom:-80, left:-80,
          width:400, height:400, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,107,53,0.08), transparent 70%)',
          pointerEvents:'none',
        }}/>

        {/* Emojis flutuantes */}
        {floats.map((f, i) => (
          <span
            key={i}
            className={f.cls}
            style={{
              position:'absolute',
              top: f.top, bottom: f.bottom,
              left: f.left, right: f.right,
              fontSize: f.size,
              pointerEvents:'none',
              userSelect:'none',
              opacity: 0.7,
            }}
          >
            {f.emoji}
          </span>
        ))}

        <div className="container">
          <div className="row align-items-center g-5">

            {/* Texto */}
            <div className="col-lg-6">
              <div
                className="mb-3"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  background:'white', border:'2px solid var(--amarelo)',
                  borderRadius:30, padding:'6px 16px',
                  boxShadow:'0 2px 12px rgba(255,210,63,0.25)',
                }}
              >
                <span>🎉</span>
                <span className="fw-bold" style={{fontSize:'0.9rem', color:'var(--primaria)'}}>
                  A festa perfeita começa aqui!
                </span>
              </div>

              <h1
                className="hero-title fw-black"
                style={{
                  fontSize:'clamp(2.4rem, 6vw, 4rem)',
                  color:'var(--texto-principal)',
                  lineHeight: 1.1,
                  letterSpacing:'-0.04em',
                  marginBottom:'1.2rem',
                }}
              >
                Brinquedos que{' '}
                <span style={{
                  background:'linear-gradient(135deg, var(--primaria), var(--rosa))',
                  WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent',
                  backgroundClip:'text',
                }}>
                  transformam
                </span>
                {' '}festas em{' '}
                <span style={{color:'var(--secundaria)'}}>memórias</span>
                {' '}inesquecíveis 🚀
              </h1>

              <p
                className="hero-sub"
                style={{
                  fontSize:'1.15rem',
                  color:'var(--texto-secundario)',
                  fontWeight:600,
                  lineHeight:1.7,
                  marginBottom:'2rem',
                  maxWidth:480,
                }}
              >
                Tobogãs, piscinas de bolinhas, castelos infláveis e muito mais.
                Entregamos, montamos e buscamos. <strong style={{color:'var(--primaria)'}}>Você só aproveita! 🎈</strong>
              </p>

              <div className="hero-btns d-flex flex-wrap gap-3 mb-4">
                <a
                  href={urlWhats}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-festa px-5 py-3"
                  style={{fontSize:'1.1rem'}}
                >
                  💬 Reservar pelo WhatsApp
                </a>
                <a
                  href="#catalogo"
                  className="btn px-5 py-3 fw-bold"
                  style={{
                    border:'2.5px solid var(--secundaria)',
                    color:'var(--secundaria)',
                    borderRadius:30,
                    background:'transparent',
                    fontSize:'1.05rem',
                    transition:'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--secundaria)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--secundaria)'
                  }}
                >
                  🎠 Ver catálogo
                </a>
              </div>

              {/* Stats */}
              <div
                className="hero-stats d-flex flex-wrap gap-0"
                style={{
                  background:'white',
                  borderRadius:'var(--radius)',
                  border:'2px solid var(--cinza-200)',
                  boxShadow:'var(--sombra)',
                  overflow:'hidden',
                  maxWidth:460,
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="text-center flex-fill py-3 px-2"
                    style={{
                      borderRight: i < stats.length - 1 ? '1px solid var(--cinza-200)' : 'none',
                    }}
                  >
                    <div className="fw-black" style={{fontSize:'1.4rem', color:'var(--primaria)', lineHeight:1}}>
                      {s.valor}
                    </div>
                    <div style={{fontSize:'0.72rem', color:'var(--texto-secundario)', fontWeight:700, marginTop:2}}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade visual */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', maxWidth:420, width:'100%'}}>
                {[
                  { emoji:'🏄', label:'Tobogã Gigante',       cor:'#FF6B35', bg:'#FFF8D6', h:180 },
                  { emoji:'🏰', label:'Castelo Inflável',      cor:'#9B5DE5', bg:'#EDE0FF', h:220 },
                  { emoji:'🏊', label:'Piscina de Bolinhas',   cor:'#4CC9F0', bg:'#E8F8FD', h:220 },
                  { emoji:'🎪', label:'Pula-pula Temático',    cor:'#FF6B9D', bg:'#FFF0F6', h:180 },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="card-hover d-flex flex-column align-items-center justify-content-center"
                    style={{
                      background: item.bg,
                      borderRadius:'var(--radius)',
                      border:`2px solid ${item.cor}30`,
                      height: item.h,
                      cursor:'default',
                    }}
                  >
                    <span style={{fontSize:'3.5rem'}}>{item.emoji}</span>
                    <span className="fw-black mt-2 text-center px-2" style={{fontSize:'0.85rem', color: item.cor, lineHeight:1.2}}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero