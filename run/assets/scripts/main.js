// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        ladderPrefab: {
            default: null,
            type: cc.Prefab
        },
        step: 0,
        ladderLen: 15,
        people: {
            default: null,
            type: cc.Node
        },

        bg: {
            default: null,
            type: cc.Node
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('bg-click', (event) => {
            this.step = this.step + 1;
            this.ladderLen = this.ladderLen + 1
            
            this.people.getComponent('people').setStep(this.step);

            Global.ladderNode = null
        
            var ladder = cc.instantiate(this.ladderPrefab);
            ladder.y = this.ladderLen * 80 - 200;
            ladder.getComponent('ladder').setMathCeil();
            cc.find('Canvas/bg/ladderBg').addChild(ladder);
            event.stopPropagation();
        });
        for (let i = 0; i < 15; i++) {
            var ladder = cc.instantiate(this.ladderPrefab);
            ladder.y = i * 80 - 200;
            if (i > 4) {
                // console.log();
                ladder.getComponent('ladder').setMathCeil();
            } 
            cc.find('Canvas/bg/ladderBg').addChild(ladder);
        }
        
    },

    start () {

    },

    // update (dt) {},
});
