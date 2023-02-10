const colorTheme = {
  'black':'var(--black)',
  'white': 'var(--white)',
  'grey': 'var(--grey)',
  'yellow': 'var(--yellow)',
  'green': 'var(--green)',
  'light-blue': 'var(--light-blue)',
  'bluei': 'var(bluei)',
  'transparent': 'var(transparent)',
}

const spacingTheme = Array(31).fill(null)
  .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});

module.exports = {
  colorTheme,
  spacingTheme,
}