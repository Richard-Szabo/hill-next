// src/utils/format.ts

export function formatCurrency(value: number): string {
    if (typeof value !== 'number') {
      throw new TypeError('The value must be a number');
    }
  
    const formattedNumber = value
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    return `${formattedNumber},- Ft`;
  }
  