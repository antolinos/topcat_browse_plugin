

registerTopcatPlugin(function(pluginUrl){
	return {
		scripts: [
			pluginUrl + 'scripts/controllers/example-topcat-esrf-plugin.controller.js'
		],

		stylesheets: [],

		configSchema: {
			//see https://github.com/icatproject/topcat/blob/master/yo/app/scripts/services/object-validator.service.js
		},

		setup: function($uibModal, tc){

			
			tc.ui().registerMainTab('topcat-esrf-plugin', pluginUrl + 'views/example-topcat-esrf-plugin-template.html', {
				insertAfter: 'my-data',
				controller: 'ExampleTopcatEsrfPluginController as exampleTopcatEsrfPluginController'
			});
			
			/*tc.ui().registerCartButton('topcat-browse-plugin', {insertBefore: 'cancel'}, function(){
				$uibModal.open({
				    templateUrl : pluginUrl + 'views/example-topcat-esrf-plugin-template.html',
				    controller: 'ExampleTopcatEsrfPluginController as exampleTopcatEsrfPluginController',
				    size : 'sm'
				});
			});*/

			tc.ui().registerEntityActionButton('topcat-browse-plugin', function(){
				alert("Hello World!");
			});
		
		    tc.ui().registerExternalGridFilter(['myData','browse'], {
			template: '',
			setup: function(){ console.log('setting up filter...'); },
			modifyQuery: function(query){ console.log('modifying query...'); }
		    });

		}
	};
});

