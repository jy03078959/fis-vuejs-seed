/**
 * 引用服务器访问基础接口封装
 */
var Util = require('./Util.js');
var CONFIG = require('./Config.js');

function Server(){

    return {
        ajax:function(data){
            //每个接口访问的通用参数
            if(data.needLoading){
                EMA.fire("loading.show");
            }
            var options = {
                type: "POST",
                cache: true,
                beforeSend: function(req) {
                    req.setRequestHeader("Accept", "application/json");
                },
                dataType: "json",
                accepts: "json",
                contentType: 'application/json'
            };
            $.extend(options,data);
            options.url=CONFIG.host+data.url;
            options.success = function(data){
                EMA.fire("loading.hide")
                data.success(data);
            };

            options.error = function(data){
                data.error(data);
            };

            $.ajax(options);
        }
    }
}

module.exports = new Server();