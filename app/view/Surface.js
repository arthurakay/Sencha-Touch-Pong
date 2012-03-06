Ext.define('Pong.view.Surface', {
    extend: 'Ext.Panel',
    requires: [
        'Pong.view.Ball',
        'Pong.view.Paddle'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 75,
                title: 'Pong',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'playpause',
                        ui: 'confirm',
                        text: 'Play / Pause'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'sliderfield',
                        itemId: 'mysliderfield',
                        width: 300,
                        label: 'Difficulty',
                        labelWidth: 100,
                        value: [
                            1
                        ],
                        maxValue: 5,
                        minValue: 1
                    }
                ]
            },
            {
                xtype: 'ball',
                itemId: 'ball'
            },
            {
                xtype: 'paddle',
                draggable: true,
                itemId: 'player',
                right: 100
            },
            {
                xtype: 'paddle',
                itemId: 'cpu',
                left: 100
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'component',
                        cls: [
                            'score'
                        ],
                        html: 'CPU: 0',
                        itemId: 'scoreCPU'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'component',
                        cls: [
                            'score'
                        ],
                        html: 'Player: 0',
                        itemId: 'scorePlayer'
                    }
                ]
            },
            {
                xtype: 'container',
                hidden: true,
                itemId: 'Sound',
                items: [
                    {
                        xtype: 'audio',
                        hidden: true,
                        itemId: 'collision',
                        autoPause: false,
                        autoResume: true,
                        enableControls: false,
                        muted: false,
                        url: 'assets/sounds/border.wav'
                    },
                    {
                        xtype: 'audio',
                        hidden: true,
                        itemId: 'win',
                        autoPause: false,
                        autoResume: true,
                        enableControls: false,
                        muted: false,
                        url: 'assets/sounds/cheer.wav'
                    },
                    {
                        xtype: 'audio',
                        hidden: true,
                        itemId: 'lose',
                        autoPause: false,
                        autoResume: true,
                        enableControls: false,
                        muted: false,
                        url: 'assets/sounds/boo.wav'
                    },
                    {
                        xtype: 'audio',
                        height: 22,
                        hidden: true,
                        itemId: 'pong',
                        width: 22,
                        autoPause: false,
                        autoResume: true,
                        muted: false,
                        url: 'assets/sounds/pong.wav'
                    }
                ]
            }
        ]
    }

});