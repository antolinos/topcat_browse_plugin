


(function() {
    'use strict';

    var app = angular.module('topcat');
    
    app.controller('ExampleTopcatEsrfPluginController', function(){
	var _this = this;

	this.datasets = [];
	this.message = "Preloading"

	tc.icat('LILS').query([
	    "select ds from Dataset ds LEFT JOIN ds.parameters p"
	], 
	{
	    cache: false,
	    timeout: false
	}).then(function(datasets){
	   	_this.message = datasets;
		_this.datasets = datasets;
	});
    

	// Hello function
	this.hello = function(){
		_this.datasets = _.filter(_this.datasets, {"name":"Dataset 1"});
	};	
    });

})();

