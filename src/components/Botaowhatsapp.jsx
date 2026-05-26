// ✏️ Personalize aqui
const WHATSAPP = '5585999999999'
const MSG_WHATSAPP = 'Olá! Quero saber mais sobre os brinquedos para locação.'

const style = `
  @keyframes pulse-ring {
    0%   { transform: scale(1);   opacity: 0.4; }
    100% { transform: scale(1.7); opacity: 0;   }
  }
  .whats-pulse::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(37,211,102,0.5);
    animation: pulse-ring 2s ease-out infinite;
    z-index: -1;
  }
`

function BotaoWhatsapp() {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  return (
    <>
      <style>{style}</style>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="whats-pulse d-flex align-items-center justify-content-center rounded-circle"
        title="Falar no WhatsApp"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: 62,
          height: 62,
          zIndex: 999,
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 6px 24px rgba(37,211,102,0.5)',
          fontSize: '1.9rem',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.08)'
          e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,211,102,0.65)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.5)'
        }}
      >
        💬
      </a>
    </>
  )
}

export default BotaoWhatsapp