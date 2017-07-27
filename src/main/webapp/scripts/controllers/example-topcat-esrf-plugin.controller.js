


(function() {
    'use strict';

    var app = angular.module('topcat');
    
    app.controller('ExampleTopcatEsrfPluginController', function(){
	var _this = this;

	this.datasets = [];
	this.message = "Preloading"

	tc.icat('ESRF').query([
//	    "select ds from Dataset ds LEFT JOIN ds.parameters p"
	    "select sample from Sample sample"
	], 
	{
	    cache: false,
	    timeout: false
	}).then(function(sample){
	   	_this.message = sample;
		_this.datasets = sample;
		console.log(sample);
	});
    

	// Hello function
	this.hello = function(){
		_this.datasets = _.filter(_this.datasets, {"name":"Dataset 1"});
	};	
    });

})();

