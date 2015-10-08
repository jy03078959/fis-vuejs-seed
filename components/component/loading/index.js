var Vue = require("component_modules/vue.js");
var BaseComponent = require('components/common/BaseComponent.js');
module.exports = Vue.component("c-loading",Vue.extend({
    mixins: [BaseComponent],
    className: 'loading',
    template: __inline('./index.html'),
    /**
     * 基础数据
     * @returns {{show: boolean}}
     */
    data: function(){
        return {
            show:false
        }
    },
    /**
     * 初始化事件绑定
     */
    initEvent:function (){
        var me = this;
        me.bindEvent("show",function (){
            me.vue.show=true
        });
        me.bindEvent("hide",function (){
            me.vue.show=false
        })
    },


}));