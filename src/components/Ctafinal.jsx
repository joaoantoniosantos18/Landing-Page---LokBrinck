// ✏️ Personalize aqui
const WHATSAPP = '5585991173279'
const MSG_WHATSAPP = 'Olá! Quero agendar um brinquedo para minha festa!'

function CTAFinal() {
  const urlWhats = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, var(--secundaria) 0%, #7B2FBE 50%, var(--primaria) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Círculos decorativos */}
      <div
        style={{
          position: 'absolute', top: -80, right: -80,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 250, height: 250, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      />

      <div className="container text-center position-relative">
        <div className="mb-2" style={{ fontSize: '3rem' }}>🎪</div>

        <h2
          className="fw-black text-white mb-3"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            letterSpacing: '-0.03em',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          A festa dos sonhos deles{' '}
          <br className="d-none d-md-block" />
          começa com uma mensagem! 💬
        </h2>

        <p
          className="text-white mb-4 mx-auto"
          style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            opacity: 0.9,
            maxWidth: 500,
          }}
        >
          Fale com a gente agora pelo WhatsApp, tire suas dúvidas e
          garanta a data da sua festa!
        </p>

        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a
            href={urlWhats}
            target="_blank"
            rel="noreferrer"
            className="btn btn-festa px-5 py-3"
            style={{
              fontSize: '1.2rem',
              background: 'white',
              color: 'var(--secundaria) !important',
              boxShadow: '0 6px 25px rgba(0,0,0,0.25)',
            }}
          >
            💬 Chamar no WhatsApp agora
          </a>
          <a
            href="#catalogo"
            className="btn px-5 py-3 fw-black text-white"
            style={{
              fontSize: '1.2rem',
              border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: 30,
              background: 'transparent',
            }}
          >
            🎠 Ver catálogo
          </a>
        </div>

        {/* Micro prova social */}
        <p
          className="mt-4 text-white"
          style={{ fontSize: '0.9rem', opacity: 0.75, fontWeight: 600 }}
        >
          ⭐ Mais de 500 famílias já escolheram a SG Locação para a sua festa!
        </p>
      </div>
    </section>
  )
}

export default CTAFinal