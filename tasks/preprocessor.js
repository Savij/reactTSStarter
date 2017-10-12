const crypto = require('crypto');
const fs = require("fs");
const tsc = require('typescript');
const tsConfig = require('../tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        tsConfig.compilerOptions,
        path,
        []
      );
    }
    return src;
  },
  getCacheKey: createCacheKeyFunction()
};

function createCacheKeyFunction() {
	const key = fs.statSync(__filename).mtime.getTime().toString();
	return (src, file, configString) => crypto.createHash('md5')
		.update(key)
		.update(src + file + configString)
		.digest('hex');
}