Ext.define('Pong.controller.Paddle', {
    extend: 'Ext.app.Controller',

    config: {

    },

    updateCPU: function(xy) {
        var paddleBox = Pong.app.paddleLeft.element.getBox();

        var delta = Math.floor(Math.random() * (constants.difficulty / 2));

        if (xy[1] < paddleBox.top) {
            Pong.app.paddleLeft.element.setY(paddleBox.y - constants.cpuSpeed - delta);
        }
        if (xy[1] > paddleBox.bottom) {
            Pong.app.paddleLeft.element.setY(paddleBox.y + constants.cpuSpeed + delta);
        }
    }

});