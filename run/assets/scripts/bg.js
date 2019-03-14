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
        // ladderLists: [
        //     {
        //         left: true,
        //         right: true
        //     },
        //     {
        //         left: false,
        //         right: true
        //     },
        //     {
        //         left: true,
        //         right: true
        //     },
        //     {
        //         left: true,
        //         right: false
        //     }
        // ]
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
        var seq = cc.sequence(cc.moveBy(0.3, 0, -80), cc.moveBy(0.5, 0, 0));
        this.node.on('touchstart', (event) => {
            var people = cc.find('Canvas/bg/ladderBg/people').getComponent('people');
            people.pmTouchHandle();
            this.node.dispatchEvent(new cc.Event.EventCustom('bg-click', true));
            setTimeout(() => {
                cc.find('Canvas/bg/ladderBg').runAction(seq);
            }, 10)

        }, this)
        this.updateLadder();
    },

    start () {   
    },

    updateLadder () {
        // var node = new cc.Node('Sprite');
        // var sp = node.addComponent(cc.Sprite);

        // sp.spriteFrame = this.sprite;
        // node.parent = this.node;
        // for (let i = 0; i < this.ladderLists.length; i++) {

        // }
    }
});
