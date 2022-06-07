const path = require('path')

const getFilenames = (filenames) => filenames.map((f) => path.relative(process.cwd(), f))

module.exports = {
  // Lint then format TypeScript and JavaScript files
  '(apps/web|packages/app)/**/*.(ts|tsx)': (filenames) => [
    `yarn web lint . ${getFilenames(filenames)}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  'apps/native/**/*.(ts|tsx)': (filenames) => [
    `yarn native lint . ${getFilenames(filenames)}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
