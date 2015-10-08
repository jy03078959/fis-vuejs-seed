/**
 * 页面基础方法以及配置
 */


module.exports = {
    replace:true,
    vue:null,
    bindEvent:function (key,fn){
        this.ema.bind(this.className+"."+key,fn);
    },
    created:function(){
        Util.log("公共组件-----",this.$options.className,"created");
        this.$options.vue = this;
        this.$options.ema = EMA.getProxy();
        this.ema = this.$options.ema;
        this.$options.initEvent();
    },
    beforeCompile:function(){
        Util.log("公共组件-----",this.$options.className,"beforeCompile");
    },
    compile:function(){
        Util.log("公共组件-----",this.$options.className,"compile");
    },
    ready:function(){
        Util.log("公共组件-----",this.$options.className,"ready");
    },
    attached:function(){
        Util.log("公共组件-----",this.$options.className,"attached");
    },
    detached:function(){
        Util.log("公共组件-----",this.$options.className,"detached");
    },
    beforDestroy:function(){
        Util.log("公共组件-----",this.$options.className,"beforDestroy");
    },
    destroyed:function(){
        Util.log("公共组件-----",this.$options.className,"destroyed");
        if(this.$options.ema){
            this.$options.ema.dispose();
        }
    },
    /**
     * 绑定基础事件
     */
    initEvent:function (){

    }

};