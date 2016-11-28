define([
	"backbone",
	"underscore",
	"model/todo_model",
	"localstorage"
	],function(Backbone,_,Todo,store){
		return Backbone.Collection.extend({

			model:Todo,

			localStorage:new Store("todos-backbon"),

			done:function(){
				return this.where({done:true});
			},

			remaining:function(){
				return this.where({done:false});
			},

		});
});