// utils/format.js
export function formatCurrency(value, currency = "PHP") {
  if (value == null) return `0 ${currency}`;
  return new Intl.NumberFormat("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value) + ` ${currency}`;
}
