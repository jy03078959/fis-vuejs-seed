var Vue = require('component_modules/vue.js');
var BasePage = require('components/common/BasePage.js');
module.exports = Vue.extend({
    mixins: [BasePage],//继承基本页面属性
    pageName: "error",
    template: __inline('index.html'),
    data: function(){
        return {
            article:'111'
        }
    },
    watch : {
        params : function(){
            Util.log("type change ");
        }
    },
    /*特殊值监听方法*/
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    },
    methods: {
        /*所有方法添加地方*/
    },
    ready: function(){
        kk = this;
    }
});