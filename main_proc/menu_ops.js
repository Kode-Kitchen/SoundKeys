const {Menu} = require('electron');

var app_menu = [
    {
        label : 'Settings',
        submenu: [
            {
                label : 'Notify',
                type : 'checkbox',
                checked : true,
                click : (menuItem)=>{
                    changeVar(menuItem);
                }
            },
            {
                label : 'Edit shortcuts',
                click : ()=>{
                    editShorts();
                }
            }
        ]
    }
];

var callBack;

function init(callBa){
    callBack=callBa;
}

function changeVar(menuItem){
    callBack.changeNotify(menuItem.checked);
}

function editShorts(){
    callBack.changeShortcuts();
}

function getMenu(){
    return Menu.buildFromTemplate(app_menu);
}

module.exports={
    init,
    changeVar,
    editShorts,
    getMenu
};