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
    }
};

module.exports = Util;