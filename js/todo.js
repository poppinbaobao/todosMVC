
require.config({

	paths:{
		zepto:"../js_lib/zepto/zepto.min",
		underscore:"../js_lib/underscore/underscore-min",
		backbone:"../js_lib/backbone/backbone-min",
		json:"../js_lib/json/json2.min",
		handlebars:"../js_lib/template/handlebars.runtime-v4.0.5",
        localstorage:"../js_lib/backbone.localStorage"
	},

	shim: {
		'zepto': {
            exports:'$'
        },
        'underscore': {
            deps: [
                'json'
            ],
            exports:'_'
        },
        'backbone': {
            deps: [
            	'underscore',
            	'zepto'
            ],
            exports: 'Backbone'
        },
        'handlebars':{
        	exports:'handlebars'
        },
        "localstorage":{
            deps:[
                "backbone",
            ],
            exports:"store"

        }
    }
});

require([
    "views/todo_Appview",
    ],function(AppView){

        var app=new AppView;
});

