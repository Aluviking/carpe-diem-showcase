// ─── CONFIGURACIÓN DE PAGO ─────────────────────────────────────────────────
// Cambia PAYMENT_PHONE por tu número de WhatsApp Business (con código de país)
// Ejemplo Colombia: 573001234567
export const PAYMENT_PHONE = '573001234567';

// O si usas Wompi / PayU / otra pasarela, pon el link directo aquí:
// export const PAYMENT_LINK = 'https://checkout.wompi.co/p/?public-key=...';
export const PAYMENT_LINK = `https://wa.me/${PAYMENT_PHONE}`;

export const STORE_NAME = 'Carpe Diem';
export const STORE_WHATSAPP = `https://wa.me/${PAYMENT_PHONE}`;
