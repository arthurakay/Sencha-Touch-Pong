Ext.define('Pong.controller.Audio', {
    extend: 'Ext.app.Controller',

    config: {

    },

    playPong: function() {
        var audio = Ext.ComponentQuery.query('#Sound')[0].down('#pong');

        audio.play();
    },

    playCollision: function() {
        var audio = Ext.ComponentQuery.query('#Sound')[0].down('#collision');

        audio.play();
    },

    playWin: function() {
        var audio = Ext.ComponentQuery.query('#Sound')[0].down('#win');

        audio.play();
    },

    playLose: function() {
        var audio = Ext.ComponentQuery.query('#Sound')[0].down('#lose');

        audio.play();
    }

});