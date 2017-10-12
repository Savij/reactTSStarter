const { lintFiles } = require('./lintFiles');
const glob = require('glob');

const excludedDirectories = [
	'node_modules/**',
	'Api/**',
    '__tests__/**',
    'assets/**',
    'tasks/**',
    'typings/**',
    'typings-custom/**'
];

const files = glob.sync(
	'**/*.ts?(x)',
	{ ignore: ['**/*.d.ts'].concat(excludedDirectories) }
);
lintFiles(files);