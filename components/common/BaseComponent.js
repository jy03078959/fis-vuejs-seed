/**
 * 页面基础方法以及配置
 */


module.exports = {
    replace:true,
    created:function(){
        console.log("公共组件-----",this.$options.className,"created");
    },
    beforeCompile:function(){
        console.log("公共组件-----",this.$options.className,"beforeCompile");
    },
    compile:function(){
        console.log("公共组件-----",this.$options.className,"compile");
    },
    ready:function(){
        console.log("公共组件-----",this.$options.className,"ready");
    },
    attached:function(){
        console.log("公共组件-----",this.$options.className,"attached");
    },
    detached:function(){
        console.log("公共组件-----",this.$options.className,"detached");
    },
    beforDestroy:function(){
        console.log("公共组件-----",this.$options.className,"beforDestroy");
    },
    destroyed:function(){
        console.log("公共组件-----",this.$options.className,"destroyed");
    }

};