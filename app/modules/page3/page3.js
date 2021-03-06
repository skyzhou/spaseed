
define('modules/page3/page3', function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pageManager');
    var manager = require('manager');
    var util = require('util');
    var evt = require('event');

    var _tpl = {
        main: TEMPLATE.MAIN
    };

    var page3 = {

        render: function () {

            manager.queryPage3({}, function(data) {
                pageManager.container.html(util.tmpl(_tpl.main, {
                    data: data
                }));
            });

            this.bindEvent();
        },

        bindEvent: function () {
            
            evt.addCommonEvent('click', { 
                
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page3;
});