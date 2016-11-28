
define([
	"underscore",
	"backbone",
	],function(_,Backbone){
		return Backbone.Model.extend({

			defaults:function(){
				return {
					title:"",
					done:false
				};
			},
			toggle:function(){
				this.save({done:!this.get("done")});
			}

		});
});