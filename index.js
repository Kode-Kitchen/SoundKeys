const {app} = require('electron');
const mainHandler=require('./main_proc');


app.on("ready", ()=>{
    mainHandler.appReady(app.getPath('userData'));
});

app.on('browser-window-created', mainHandler.newBrowserWindowCreated);

app.on("window-all-closed",()=>{
    mainHandler.appClosed();
    app.quit();
});