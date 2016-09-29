'use strict';

/**
 * @ngdoc function
 * @name predpolAppApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the predpolAppApp
 */
angular.module('predpolAppApp')
  .controller('ProjectsCtrl', function ($scope, $log, $timeout) {
  
   $scope.map = { center: { latitude: 36.9741, longitude: -122.0308 }, zoom: 8 };

   $scope.map = {center: {latitude: 36.9741, longitude: -122.0308 }, zoom: 8 };
    $scope.map = {center: {latitude: 36.9741, longitude: -122.0308 }, zoom: 8 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 36.9741,
        longitude: -122.0308
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          //$log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
         // $log.log(lat);
         // $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    $timeout(function () {
      $scope.marker.coords = {
        latitude: 36.9741,
        longitude: -122.0308
      };
      $scope.dynamicMoveCtr++;
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 36.9741,
          longitude: -122.0308
        };
        $scope.dynamicMoveCtr++;
      }, 2000);
    }, 1000);
  });
