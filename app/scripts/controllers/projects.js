'use strict';

/**
 * @ngdoc function
 * @name predpolAppApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the predpolAppApp
 */
angular.module('predpolAppApp')
  .controller('ProjectsCtrl', function ($scope) {
  
   $scope.map = { center: { latitude: 36.9741, longitude: -122.0308 }, zoom: 8 };

  });
