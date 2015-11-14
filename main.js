var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function(){
	var mainWindow = new BrowserWindow({
		width:1300,
		height: 800,
		frame: false

	});
mainWindow.loadUrl('file://' + __dirname +'/index.html')
});