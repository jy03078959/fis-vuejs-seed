var Vue = require("component_modules/vue.js");
var BaseComponent = require('components/common/BaseComponent.js');
module.exports = Vue.component("c-footer",Vue.extend({
    mixins: [BaseComponent],
    className: 'footer',
    template: __inline('./index.html'),
    ready: function(){
        var self = this;
    }
}));