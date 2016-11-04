import * as angular from 'angular';

angular.element(document).ready(function(){
	angular.bootstrap(document, ['app']);
});

angular.module('app', [])
	.run(function(){
		console.log('running');
	});
