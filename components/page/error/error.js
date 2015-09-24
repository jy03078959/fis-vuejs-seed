var Vue = require('component_modules/vue.js');
var BasePage = require('components/common/BasePage.js');
module.exports = Vue.extend(new BasePage({
    pageName: "error",
    template: __inline('error.html'),
    data: function(){
        return {}
    },
    watch : {
        params : function(){
            console.log("type change ");
        }
    },
    methods: {
        /*所有方法添加地方*/
    }

}));