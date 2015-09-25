/**
 * 页面基础方法以及配置
 */


module.exports = {
    /*父类向下传递的参数数据*/
    props: ['params'],
    replace:true,
    data: function(){
        return {}
    },
    created:function(){
        console.log("页面page----",this.$options.pageName,"created");
    },
    beforeCompile:function(){
        console.log("页面page----",this.$options.pageName,"beforeCompile");
    },
    compile:function(){
        console.log("页面page----",this.$options.pageName,"compile");
    },
    ready:function(){
        console.log("页面page----",this.$options.pageName,"ready");
    },
    attached:function(){
        console.log("页面page----",this.$options.pageName,"attached");
    },
    detached:function(){
        console.log("页面page----",this.$options.pageName,"detached");
    },
    beforDestroy:function(){
        console.log("页面page----",this.$options.pageName,"beforDestroy");
    },
    destroyed:function(){
        console.log("页面page----",this.$options.pageName,"destroyed");
    }
};