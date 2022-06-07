const path = require('path')

const getFilenames = (filenames) =>
  filenames.map((f) => path.relative(process.cwd(), f))

module.exports = {
  '**/*.(ts|tsx)': () => 'yarn web type-check',
  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn web lint . ${getFilenames(filenames)}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
