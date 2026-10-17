/**
 * Centralized site configuration
 * Strictly complies with "No Hardcoded Secrets" and secure URL handling
 */
import { sanitizeUrl } from '../utils/sanitize';

const rawWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER || '966500000000';
// Guarantee only digits are passed to the WhatsApp URL protocol
const cleanWhatsAppNumber = String(rawWhatsApp).replace(/[^0-9]/g, '') || '966500000000';

export const siteConfig = {
  brandName: 'مَقاس | MAQAS',
  whatsappNumber: cleanWhatsAppNumber,
  instagramUrl: sanitizeUrl(import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com', 'https://instagram.com'),
  tiktokUrl: sanitizeUrl(import.meta.env.VITE_TIKTOK_URL || 'https://tiktok.com', 'https://tiktok.com'),
};

/**
 * Builds a secure wa.me URI with properly sanitized parameter encoding.
 * Prevents URL parameter injection or open redirection vectors.
 */
export function getWhatsAppUrl(message = '') {
  const safeMessage = typeof message === 'string' ? message : '';
  const encoded = encodeURIComponent(safeMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}${encoded ? `?text=${encoded}` : ''}`;
}
