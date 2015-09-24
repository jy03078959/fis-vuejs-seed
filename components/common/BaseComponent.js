/**
 * 页面基础方法以及配置
 */
var BaseComponent = function(data){
    var options = {
        replace:true,
        created:function(){
            console.log("公共组件-----",data.className,"created");
        },
        beforeCompile:function(){
            console.log("公共组件-----",data.className,"beforeCompile");
        },
        compile:function(){
            console.log("公共组件-----",data.className,"compile");
        },
        ready:function(){
            console.log("公共组件-----",data.className,"ready");
        },
        attached:function(){
            console.log("公共组件-----",data.className,"attached");
        },
        detached:function(){
            console.log("公共组件-----",data.className,"detached");
        },
        beforDestroy:function(){
            console.log("公共组件-----",data.className,"beforDestroy");
        },
        destroyed:function(){
            console.log("公共组件-----",data.className,"destroyed");
        }

    };
    _.extend(options,data);
    return options;
};

module.exports = BaseComponent;