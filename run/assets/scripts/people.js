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
        turn: 'left',
        // 主角跳跃高度
        jumpHeight: 30,
        // 主角跳跃持续时间
        jumpDuration: 0.05,
        //主角加速度
        accel: 0,
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

    // onLoad () {},

    start () {
        this.jumpAction = this.setJumpAction();
        this.accJump = false;
    },

    setJumpAction: function () {
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, 0)).easing(cc.easeCubicActionIn());
        // 跳跃
        return cc.sequence(jumpUp, jumpDown)
    },

    onLoad () {
        var animationComponent = this.getComponent(cc.Animation);
        animationComponent.play('prunsAn');
    },

    update (dt) {
        if (this.node.x <= -330) {
            this.node.scaleX = 0.6
            this.turn = 'right'
        }

        if (this.node.x > 330) {
            this.node.scaleX = -0.6
            this.turn = 'left'
        }

        if (this.turn == 'left') {
            this.node.x -= 5
        } else {
            this.node.x += 5
        }

        if(this.accJump){
            this.accJump = false;
            this.node.runAction(this.jumpAction);
        }
        
    },

    pmTouchHandle () {
        this.accJump = true;
    }
});
