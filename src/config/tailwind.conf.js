const colorTheme = {
  'black': 'var(--black)',
  'white': 'var(--white)',
  'light-blue': 'var(--light-blue)',
  'grey': 'var(--grey)',
  'yellow': 'var(--yellow)',
  'grenn': 'var(--green)',
  'light-blue': 'var(--light-blue)',
  'blue': 'var(--blue)',
  'transparent': 'var(--transparent)',
}

const spacingTheme = Array(31).fill(null)
  .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});

module.exports = {
  colorTheme,
  spacingTheme,
}