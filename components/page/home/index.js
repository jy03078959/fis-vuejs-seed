var Vue = require('component_modules/vue.js');
var BasePage = require('components/common/BasePage.js');
module.exports = Vue.extend({
    mixins: [BasePage],
    pageName: "home",
    template: __inline('index.html'),
    created:function (){
        Util.log("create------");
        var me = this;
        me.ema.bind("home",function (data){
            Util.log(data);
        })
    },

});