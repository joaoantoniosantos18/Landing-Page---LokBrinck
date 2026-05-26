// ✏️ Personalize aqui
const WHATSAPP = '5585999999999'
const MSG_WHATSAPP = 'Olá! Quero agendar um brinquedo para minha festa!'

const style = `
  @keyframes confetti {
    0%   { transform: translateY(0)   rotate(0deg);   opacity: 1; }
    100% { transform: translateY(80px) rotate(360deg); opacity: 0; }
  }
  .conf-1 { animation: confetti 3s 0.0s ease-in infinite; }
  .conf-2 { animation: confetti 3s 0.5s ease-in infinite; }
  .conf-3 { animation: confetti 3s 1.0s ease-in infinite; }
  .conf-4 { animation: confetti 3s 1.5s ease-in infinite; }
  .conf-5 { animation: confetti 3s 2.0s ease-in infinite; }
`

function CTAFinal() {
  const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  const confs = [
    { emoji: '🎊', top: '8%',  left: '8%',  cls: 'conf-1' },
    { emoji: '🎈', top: '5%',  left: '30%', cls: 'conf-2' },
    { emoji: '⭐', top: '10%', right:'20%', cls: 'conf-3' },
    { emoji: '🎉', top: '6%',  right:'8%',  cls: 'conf-4' },
    { emoji: '✨', top: '15%', left: '55%', cls: 'conf-5' },
  ]

  return (
    <>
      <style>{style}</style>
      <section
        style={{
          background: 'linear-gradient(135deg, #2D1B69 0%, #9B5DE5 50%, #FF6B35 100%)',
          padding: '120px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orbes decorativas */}
        <div style={{
          position:'absolute', top:-100, left:'50%', transform:'translateX(-50%)',
          width:600, height:600, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,255,255,0.06), transparent 60%)',
          pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', bottom:-80, right:-80,
          width:350, height:350, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,210,63,0.12), transparent 60%)',
          pointerEvents:'none',
        }}/>

        {/* Confetti animado */}
        {confs.map((c, i) => (
          <span
            key={i}
            className={c.cls}
            style={{
              position:'absolute',
              top: c.top, left: c.left, right: c.right,
              fontSize:'1.8rem',
              pointerEvents:'none',
              userSelect:'none',
            }}
          >
            {c.emoji}
          </span>
        ))}

        <div className="container text-center position-relative">

          {/* Chip */}
          <div
            className="d-inline-flex align-items-center gap-2 mb-4"
            style={{
              background:'rgba(255,255,255,0.12)',
              border:'1px solid rgba(255,255,255,0.25)',
              borderRadius:30,
              padding:'8px 20px',
              backdropFilter:'blur(8px)',
            }}
          >
            <span>🎪</span>
            <span className="fw-bold text-white" style={{fontSize:'0.9rem'}}>Pronto para a festa mais incrível?</span>
          </div>

          <h2
            className="fw-black text-white mb-3"
            style={{
              fontSize:'clamp(2rem, 5.5vw, 3.5rem)',
              letterSpacing:'-0.04em',
              lineHeight:1.1,
              textShadow:'0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            A festa dos sonhos deles
            <br />
            <span style={{
              background:'linear-gradient(135deg, var(--amarelo), var(--rosa))',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
            }}>
              começa com uma mensagem!
            </span>
          </h2>

          <p
            className="text-white mx-auto mb-5"
            style={{
              fontSize:'1.15rem',
              fontWeight:600,
              opacity:0.85,
              maxWidth:520,
              lineHeight:1.7,
            }}
          >
            Fale com a gente agora pelo WhatsApp, tire suas dúvidas
            e garanta a data da sua festa. Resposta em minutos! 💬
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
            <a
              href={urlWhats}
              target="_blank"
              rel="noreferrer"
              className="btn fw-black px-5 py-3"
              style={{
                background:'white',
                color:'var(--secundaria)',
                borderRadius:30,
                fontSize:'1.1rem',
                boxShadow:'0 8px 30px rgba(0,0,0,0.2)',
                transition:'all 0.2s',
                border:'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)' }}
            >
              💬 Chamar no WhatsApp agora
            </a>
            <a
              href="#catalogo"
              className="btn fw-black text-white px-5 py-3"
              style={{
                border:'2px solid rgba(255,255,255,0.4)',
                borderRadius:30,
                background:'transparent',
                fontSize:'1.05rem',
                transition:'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              🎠 Ver catálogo
            </a>
          </div>

          {/* Prova social inline */}
          <div
            className="d-inline-flex align-items-center gap-3 flex-wrap justify-content-center"
            style={{
              background:'rgba(255,255,255,0.1)',
              border:'1px solid rgba(255,255,255,0.2)',
              borderRadius:20,
              padding:'12px 24px',
            }}
          >
            <span className="text-white fw-bold" style={{fontSize:'0.9rem', opacity:0.85}}>
              ⭐⭐⭐⭐⭐
            </span>
            <span className="text-white fw-bold" style={{fontSize:'0.9rem', opacity:0.85}}>
              Mais de <strong>500 famílias</strong> felizes desde 2021
            </span>
          </div>

        </div>
      </section>
    </>
  )
}

export default CTAFinal