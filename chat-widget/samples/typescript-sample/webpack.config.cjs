// Force ts-node to transpile the TS config as CommonJS
require('ts-node').register({
  transpileOnly: true,
  compilerOptions: { module: 'CommonJS' }
});
module.exports = require('./webpack.config.ts').default || require('./webpack.config.ts');
