Ext.define('Pong.controller.Referee', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#playpause": {
                tap: 'playPause'
            },
            "sliderfield": {
                change: 'setDifficulty'
            }
        }
    },

    incrementScore: function(isPlayer) {
        Pong.Game.stop();

        if (!this.scoreCPU) { this.scoreCPU = 0; }
        if (!this.scorePlayer) { this.scorePlayer = 0; }

        if (isPlayer) {
            Ext.ComponentQuery.query('#scorePlayer')[0].setHtml('Player: ' + ++this.scorePlayer);

            Pong.app.dispatch({
                controller : 'Audio',
                action     : 'playWin'
            });
        }
        else {
            Ext.ComponentQuery.query('#scoreCPU')[0].setHtml('CPU: ' + ++this.scoreCPU);

            Pong.app.dispatch({
                controller : 'Audio',
                action     : 'playLose'
            });
        }

        var box = Pong.Game.surface.getBox();

        //center the ball
        Pong.Game.ball.element.setXY(
            [ Math.floor(box.width / 2), Math.floor( box.height / 2) ]
        );

        if (this.scoreCPU >= 10 && this.scoreCPU > this.scorePlayer) {
            Ext.Msg.alert('Your Lose!', 'You Lose!');
            Ext.ComponentQuery.query('#playpause')[0].disable();
        }
        else {
            Pong.Game.start();
        }
    },

    playPause: function(button, e, options) {
        if (Pong.Game.intervalID) { Pong.Game.stop(); }
        else { Pong.Game.start(); }
    },

    setDifficulty: function(slider, value, options) {
        Pong.Game.difficulty = slider.getValue()[0];
        Pong.Ball.speed += Pong.Game.difficulty - 1;
    }

});