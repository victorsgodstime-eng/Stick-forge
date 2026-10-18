const {app,BrowserWindow,Menu}=require('electron'),path=require('path');
function create(){const w=new BrowserWindow({width:1400,height:860,backgroundColor:'#0e1424',autoHideMenuBar:true,title:'StickForge 3D',icon:path.join(__dirname,'www/icons/icon-512.png'),webPreferences:{contextIsolation:true}});
Menu.setApplicationMenu(null);w.loadFile(path.join(__dirname,'www/index.html'))}
app.whenReady().then(create);app.on('window-all-closed',()=>app.quit());
