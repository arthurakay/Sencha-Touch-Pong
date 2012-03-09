Ext.application({
    name : 'Pong',

    views : [
        'Surface',
        'Ball',
        'Paddle'
    ],

    controllers : [
        'Ball',
        'Paddle',
        'Referee',
        'Audio'
    ],

    launch : function () {
        Ext.create('Pong.view.Surface', {fullscreen : true});
    }

});