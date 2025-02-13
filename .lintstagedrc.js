module.exports = {
  'be/**/*.{js,ts,mts,mjs}': ['eslint'],
  'be/**/*.{js,ts,mts,mjs}': () => 'tsc -p be/tsconfig.json --noEmit',
  'fe/**/*.{js,ts,jsx,tsx}': ["eslint --rule \"'no-console':'error'\""],
  'fe/**/*.{js,ts,jsx,tsx}': () => 'tsc -p fe/tsconfig.json  --noEmit',
};
