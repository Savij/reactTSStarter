const fs = require('fs');
const { Linter, Configuration } = require('tslint');
const chalk = require('chalk');
var readline = require('readline');

module.exports = {
	/**
	 * @param {string[]} files
	 * @param {boolean} fix - if true will auto-fix all auto-fixable lint errors
	 * @param {boolean} removeBOM
	 */
	lintFiles: function (files, fix = true, removeBOM = false) {
		const linter = new Linter({
			formatter: 'prose',
			fix: fix
		});
		const configuration = Configuration.findConfiguration(null, './').results;
		const numFiles = files.length;
		files.forEach((file, index) => {
			const fileContents = fs.readFileSync(file, 'utf8');
			if (removeBOM) {
				fs.writeFileSync(file, fileContents.replace(/^\uFEFF/, ''));
			}
			linter.lint(file, fileContents, configuration);
			printProgress('linting: ' + (index + 1) + ' of ' + numFiles);
		});
		const results = linter.getResult();
		console.error(chalk.red(results.output));
		console.error(chalk.blue(results.fixes.map(f => `${f.getFailure()}: ${f.getFileName()}`)));
		if ((results.failures.length + results.fixes.length) > 0) {
			console.error(chalk.yellow('linter found errors.'));
			process.exit(1);
		} else {
			console.error(chalk.green('no linter errors.'));
		}
	}
}

function printProgress(progress) {
	readline.clearLine(process.stdout, 0)
	readline.cursorTo(process.stdout, 0, null)
	process.stdout.write(chalk.gray(progress));
}