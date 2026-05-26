// ✏️ Personalize aqui
const WHATSAPP = '5585999999999'
const MSG_WHATSAPP = 'Olá! Quero saber mais sobre os brinquedos para locação.'

function BotaoWhatsapp() {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG_WHATSAPP)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="d-flex align-items-center justify-content-center rounded-circle"
      title="Falar no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: 60,
        height: 60,
        zIndex: 999,
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        fontSize: '1.8rem',
        textDecoration: 'none',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.6)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)'
      }}
    >
      💬
    </a>
  )
}

export default BotaoWhatsapp