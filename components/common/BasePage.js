/**
 * 页面基础方法以及配置
 */


module.exports = {
    /*父类向下传递的参数数据*/
    props: ['params'],
    replace:true,
    vue:null,
    data: function(){
        return {}
    },
    bindEvent:function (key,fn){
        this.ema.bind(this.pageName+"."+key,fn);
    },
    created:function(){
        Util.log("页面page----",this.$options.pageName,"created");
        this.$options.vue = this;
        this.$options.ema = EMA.getProxy();
        this.ema = this.$options.ema;
        this.$options.initEvent();
    },
    beforeCompile:function(){
        Util.log("页面page----",this.$options.pageName,"beforeCompile");
    },
    compile:function(){
        Util.log("页面page----",this.$options.pageName,"compile");
    },
    ready:function(){
        Util.log("页面page----",this.$options.pageName,"ready");
    },
    attached:function(){
        Util.log("页面page----",this.$options.pageName,"attached");
    },
    detached:function(){
        Util.log("页面page----",this.$options.pageName,"detached");
    },
    beforDestroy:function(){
        Util.log("页面page----",this.$options.pageName,"beforDestroy");
    },
    destroyed:function(){
        Util.log("页面page----",this.$options.pageName,"destroyed");
        if(this.$options.ema){
            this.$options.ema.dispose();
        }
    },
    initEvent:function (){
        
    }


};