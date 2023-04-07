const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
let newProductWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(templateMenu)
    Menu.setApplicationMenu(mainMenu);

});

function createNewProductWindow() {
    newProductWindow = new BrowserWindow({
        width: 400,
        height: 300,
        title: 'Add A New Product'
    });
    newProductWindow.setMenu(null);
    newProductWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/new_product.html'),
        protocol: 'file',
        slashes: true
    }))
}

const templateMenu = [
    {
        label: 'Product',
        submenu: [
            {
                label: 'New Product',
                accelerator: 'Ctrl+N',
                click() {
                    createNewProductWindow();
                }
            }
        ]
    }
]