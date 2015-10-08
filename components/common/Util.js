/**
 * 基础工具方法
 */
var Util = {
    stringFormat:function(){
        if (arguments.length == 0)
            return null;
        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            str = str.replace('{' + (i) + '}', arguments[i]);
        }
        return str;
    },
    log:function (){
        var argsArray = Array.prototype.slice.call(arguments);
        console.log.apply(console,argsArray);
    }

};

module.exports = Util;