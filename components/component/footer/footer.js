var Vue = require("component_modules/vue.js");
var BaseComponent = require('components/common/BaseComponent.js');
module.exports = Vue.component("c-footer",Vue.extend({
    mixins: [BaseComponent],
    className: 'footer',
    template: __inline('./footer.html'),
    ready: function(){
        var self = this;
    }
}));