/**
 * Strict Input Sanitization and Validation
 * Hostile-environment hardened
 */

/**
 * Sanitizes single-line text inputs (e.g., names).
 * Prevents HTML injection, script tags, quotes, and CRLF / newline injection attacks.
 */
export function sanitizeName(input, maxLength = 80) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[\r\n\t\0]/g, ' ') // Strip control characters & newlines to prevent header/parameter injection
    .replace(/[<>'"`;\\]/g, '')   // Strip HTML & script delimiters
    .replace(/\s+/g, ' ');        // Collapse multiple spaces
}

/**
 * General single-line text sanitizer (backwards compatibility).
 */
export function sanitizeText(input, maxLength = 100) {
  return sanitizeName(input, maxLength);
}

/**
 * Validates phone numbers strictly against international digits-only criteria.
 * Allows optional leading +, followed by 8 to 15 digits.
 */
export function validatePhone(phone) {
  if (typeof phone !== 'string') return false;
  const digitsAndPlus = phone.trim().replace(/[\s\-\(\)\.]/g, '');
  return /^\+?[0-9]{8,15}$/.test(digitsAndPlus);
}

/**
 * Sanitizes multi-line notes or user comments.
 * Strips HTML tags, null bytes, and malicious pseudo-protocols like javascript: or data:
 */
export function sanitizeNotes(input, maxLength = 500) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/\0/g, '') // Strip null bytes
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script blocks
    .replace(/[<>]/g, '') // Strip any HTML tags
    .replace(/(javascript|vbscript|data):/gi, '$1_safe:'); // Neutralize executable URI schemes
}

/**
 * Validates that an outbound URL strictly uses approved secure schemes (https://, http://, tel:, mailto:).
 * Blocks javascript:, data:, and relative exploitation vectors.
 */
export function sanitizeUrl(url, fallback = '#') {
  if (typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) {
    return trimmed;
  }
  return fallback;
}
