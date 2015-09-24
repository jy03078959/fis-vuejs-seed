/**
 * 页面基础方法以及配置
 */
var BasePage = function(data){
    var options = {
        /*父类向下传递的参数数据*/
        props: ['params'],
        replace:true,
        data: function(){
            return {}
        },
        created:function(){
            console.log("页面page----",data.pageName,"created");
        },
        beforeCompile:function(){
            console.log("页面page----",data.pageName,"beforeCompile");
        },
        compile:function(){
            console.log("页面page----",data.pageName,"compile");
        },
        ready:function(){
            console.log("页面page----",data.pageName,"ready");
        },
        attached:function(){
            console.log("页面page----",data.pageName,"attached");
        },
        detached:function(){
            console.log("页面page----",data.pageName,"detached");
        },
        beforDestroy:function(){
            console.log("页面page----",data.pageName,"beforDestroy");
        },
        destroyed:function(){
            console.log("页面page----",data.pageName,"destroyed");
        }
    };
    _.extend(options,data);
    return options;
};

module.exports = BasePage;