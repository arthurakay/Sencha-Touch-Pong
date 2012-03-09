Ext.define('Pong.controller.Paddle', {
    extend: 'Ext.app.Controller',

    config: {

    },

    updateCPU: function(xy) {
        var paddleBox = Pong.Game.paddleLeft.element.getBox();

        var delta = Math.floor(Math.random() * (Pong.Game.difficulty / 2));

        if (xy[1] < paddleBox.top) {
            Pong.Game.paddleLeft.element.setY(paddleBox.y - Pong.Game.cpuSpeed - delta);
        }
        if (xy[1] > paddleBox.bottom) {
            Pong.Game.paddleLeft.element.setY(paddleBox.y + Pong.Game.cpuSpeed + delta);
        }
    }

});