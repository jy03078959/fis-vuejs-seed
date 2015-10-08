var Vue = require("component_modules/vue.js");
var BaseComponent = require('components/common/BaseComponent.js');
module.exports = Vue.component("c-header",Vue.extend({
    mixins: [BaseComponent],
    className: 'header',
    template: __inline('./index.html'),
    ready: function(){
    }
}));