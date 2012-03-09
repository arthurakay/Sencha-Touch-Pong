Ext.define('Pong.Game', {
    singleton : true,

    cpuSpeed   : 2,
    difficulty : 1,

    ball        : null,
    paddleLeft  : null,
    paddleRight : null,
    intervalID  : null,
    surface     : null,

    start : function () {
        this.ball = Ext.ComponentQuery.query('ball')[0];
        this.paddleLeft = Ext.ComponentQuery.query('#cpu')[0];
        this.paddleRight = Ext.ComponentQuery.query('#player')[0];

        Pong.Ball.reset();

        this.intervalID = setInterval(this.loop, 10);
    },

    loop : function () {
        Pong.app.dispatch({
            controller : 'Ball',
            action     : 'update',
            args       : [ Pong.Game.ball ]
        });
    },

    stop : function () {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }
});