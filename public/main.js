const {
    app,
    BrowserWindow,
    Tray,
    Menu,
    components,
    nativeImage,
    screen,
  } = require("electron");
  const path = require("path");
  
  let win;
  let tray;
  
  const createWindow = () => {
    win = new BrowserWindow({
      width: 372,
      height: 630,
      webPreferences: {
        enableRemoteModule: true,
        plugins: true,
      },
      frame: false,
      transparent: true,
      alwaysOnTop: true,
      backgroundColor: 'mica',
      modal: true,
    //   opacity: 0.9,
    });
  
      win.webContents.openDevTools({mode:'undocked'});
    win.loadURL("http://localhost:3000");
    win.on("closed", () => {
      win = null;
    });
    
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: xpos } = primaryDisplay.workAreaSize;
    console.log(xpos)
    win.setPosition(800, 0);
    // win.on('blur', () => {
    //   win.hide();
    // });
  };
  
  const createTray = () => {
    let icon = nativeImage.createFromPath(
      path.join(__dirname, "../src/assets/png/chat-gpt.png")
    );
    icon = icon.resize({ width: 18, height: 18 });
    tray = new Tray(icon);
    tray.on("click", () => {
      if (win) {
        win.isVisible() ? win.hide() : win.show();
      } else {
        createWindow();
      }
    });
  };
  
  app.on("ready", async () => {
    await components.whenReady();
    createTray();
  });
  
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  
  app.on("activate", () => {
    if (win == null) {
      createTray();
    }
  });
  