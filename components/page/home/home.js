var Vue = require('component_modules/vue.js');
var BasePage = require('components/common/BasePage.js');
module.exports = Vue.extend(new BasePage({
    pageName: "home",
    template: __inline('home.html'),
}));