/**
 * Centralized site configuration
 * Complies with "No Hardcoded Secrets / Safe Environment Configurations"
 */

export const siteConfig = {
  brandName: 'مَقاس | MAQAS',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '966500000000',
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
  tiktokUrl: import.meta.env.VITE_TIKTOK_URL || 'https://tiktok.com',
};

export function getWhatsAppUrl(message) {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
