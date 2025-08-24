export function formatNumber(num) {

  const numericValue = parseFloat(num);

if (isNaN(numericValue)) {
    throw new Error('Invalid number');
  }

 
    return numericValue.toLocaleString('en-US', { style: 'decimal' });

  // return num.toLocaleString('en-US', {
  //   style: 'decimal',
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });
}
