/**
 * Utility functions for input sanitization and validation
 * Strictly adheres to security rules (Input Validation & Safe Sanitization)
 */

export function sanitizeText(input, maxLength = 200) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // prevent HTML injection
}

export function validatePhone(phone) {
  if (typeof phone !== 'string') return false;
  const digitsOnly = phone.replace(/[\s\-\(\)\+]/g, '');
  return /^[0-9]{8,15}$/.test(digitsOnly);
}

export function sanitizeNotes(input, maxLength = 500) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '');
}
