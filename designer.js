/*
 * File: designer.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
        'Surface',
        'Ball',
        'Paddle'
    ],

    name: 'MyApp',

    controllers: [
        'Ball',
        'Paddle',
        'Referee',
        'Audio'
    ],

    launch: function() {
        Ext.create('MyApp.view.Surface', {fullscreen: true});
    },

    startGame: function() {
        MyApp.app.ball        = Ext.ComponentQuery.query('ball')[0];
        MyApp.app.paddleLeft  = Ext.ComponentQuery.query('#cpu')[0];
        MyApp.app.paddleRight = Ext.ComponentQuery.query('#player')[0];

        Ball.reset();

        MyApp.intervalID = setInterval(MyApp.app.loop, 10);
    },

    loop: function() {
        MyApp.app.dispatch({
            controller : 'Ball',
            action     : 'update',
            args       : [ MyApp.app.ball ]
        });
    },

    stopGame: function() {
        clearInterval(MyApp.intervalID);
        MyApp.intervalID = null;
    }

});
