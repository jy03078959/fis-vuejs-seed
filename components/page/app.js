
/**
 *
 */

var Vue = require('component_modules/vue.js');
var Router = require('component_modules/director.js').Router;
var home = require('components/page/home/home.js');
var Util = require('components/common/Util.js');
require('footer/footer.js');
require('header/header.js');
require('components/page/error/error.js');


window.app = new Vue({
    el: '#app',
    data: {
        'preView': '', //默认首页
        'currentView': 'home', //默认首页
        'pageParams': {}, //当前页面数据参数
    },
    components: {
        'home': home
    },
    getPageUrl: function (name) {
        var url = 'components/page/{name}/{name}.js';
        url = url.replace(/\{name}/g,name);
        return url;
    },
    jump:function(name,data){
        location.hash=Util.stringFormat("#/{1}/{2}",name,encodeURIComponent(JSON.stringify(data)||""));
    },
    router: function (name, data) {
        var me = this;
        require.async(me.getPageUrl(name), function (pageComponent) {
            var components = app.$options.components;
            if (!components[name]) {
                components[name] = pageComponent;
            }
            //当前页面数据
            app.pageParams = data;
            //记录前一次页面
            app.preView = app.currentView;

            app.currentView = name;
            console.info(app.preView+"-->页面跳转到-->"+app.currentView,"参数:",data);
        },function(){
            router.setRoute('/error');
        });
    },
});

var router = new Router({
    "/:page/?((\w|.)*)": function (page, data) {
        var dataTemp
        data = decodeURIComponent(data);
        if (data) {
            try {
                dataTemp = JSON.parse(data);
            } catch (e) {
            }
        }
        app.$options.router(page, dataTemp ||data);
    }
});


//页面未找到
router.configure({
    notfound: function () {
        router.setRoute('/error');
    }
})

//默认首页
router.init('/home');




