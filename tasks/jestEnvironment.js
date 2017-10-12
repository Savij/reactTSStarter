require('../src/findByStyles');
require('../src/Helper/tsHelpers');
const aphrodite = require('aphrodite');
const uncaughtExceptionHandler = onError.bind(null, 'Uncaught Exception');
const uncaughtRejectionHandler = onError.bind(null, 'Unhandled Promise Rejection');

function onError(type, err) {
	console.log(type);
	if (err.stack) {
		err.stack.split('\n').forEach(line => {
			console.log(line);
		});
	} else {
		console.log(err.name + ": " + err.message || err.reason);
	}
	throw err;
}

if (process.listenerCount('uncaughtException') === 0) {
	process.on('uncaughtException', uncaughtExceptionHandler);
}

if (process.listenerCount('unhandledRejection') === 0) {
	process.on('unhandledRejection', uncaughtRejectionHandler);
}

global.console.warn = catchLoggedWarningsAndIgnore.bind(global.console, global.console.warn);
global.XMLHttpRequest = global.window.XMLHttpRequest;
global.sinon = require('sinon');
global.sinon.useFakeXMLHttpRequest();
global.window = {};
global.window.XMLHttpRequest = global.XMLHttpRequest;
function catchLoggedWarningsAndIgnore(originalLog) {
	var message = arguments[1];
	if (typeof message === 'string' && message.toLowerCase().indexOf('warning') > -1) {
		originalLog.apply(this, ['Warning ignored']);
	}
}

aphrodite.StyleSheetTestUtils.suppressStyleInjection();