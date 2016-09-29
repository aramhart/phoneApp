'use strict';

/**
 * @ngdoc function
 * @name predpolAppApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the predpolAppApp
 */
angular.module('predpolAppApp')
  .controller('ServicesCtrl', function ($http, $scope, movieApiFactory) {
    
    $scope.searchBarInput = 'Mighty';
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    $scope.$watch('searchBarInput', function() {
      fetch();
    });
 
 $scope.getGenres = function () {

      movieApiFactory.getGenres() //get genres
                       .then(function (response) {
                            $scope.genres = response;                           
                            movieApiFactory.getGenres() //nothing to pass
                                          .then(function (response) {
                                           $scope.genres = response.data;
                            });
                        });
    }
  
    $scope.getChannelIds = function () {
      movieApiFactory.getChannelIds() //get channel Ids
                       .then(function (response) {
                            $scope.channels = response;                           
                            movieApiFactory.getChannelIds($scope.channelType.value) //pass channel type
                                          .then(function (response) {
                                           $scope.genres = response.data;
                            });
                        }); 
    }
    $scope.getSearchResults = function () {

      movieApiFactory.getSearchResults() //get genres
                       .then(function (response) {
                            $scope.searchResults = response;                           
                            movieApiFactory.getSearchResults($scope.searchBarInput) //pass in search bar results
                                          .then(function (response) {
                                           $scope.searchResults = response.data;
                                           
                            });
                        });
    }

    
    $scope.updateCurrentShow = function(imageClicked){
    
    $scope.currentShow = $scope.searchResults.results[imageClicked];

    movieApiFactory.getSingleShowDetails() //get genres
                       .then(function (response) {
                            console.log($scope.currentShow.id);
                            $scope.currentShowDetails = response;                           
                            movieApiFactory.getSingleShowDetails($scope.currentShow.id) //pass in clicked current show
                                          .then(function (response) {
                                           $scope.currentShowDetails = response.data;
                                           console.log('details: '+ response.data);
                            });

                        });
    } 

    $scope.update = function(movie){
      $scope.searchBarInput = movie.Title;
    };

    $scope.channelResults = function(movie){
      console.log("updating..");
    };

    $scope.select = function(){
      $scope.setSelectionRange(0, $scope.value.length);
    }

  function fetch() {
    
 //   $scope.getGenres();
    $scope.getSearchResults();
   
    }
  });
