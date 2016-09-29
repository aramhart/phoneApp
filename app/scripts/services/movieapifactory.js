'use strict';

/**
 * @ngdoc service
 * @name predpolAppApp.movieApiFactory
 * @description
 * # movieApiFactory
 * Factory in the predpolAppApp.
 */
angular.module('predpolAppApp')
  .factory('movieApiFactory', function ($http, baseUrl) {
    // Service logic
    // ...
    var api = {};

    api.getGenres = function () {
            return $http.get(baseUrl + 'genres')
                .then(
                function (response) {
                    return response
                });
    }

    api.getSearchResults = function (searchTerm) {
            return $http.get(baseUrl + 'search/title/' + searchTerm + '/fuzzy')
                .then(
                function (response) {
                    return response
                });
    }

    api.getSingleShowDetails = function (showId) {
            return $http.get(baseUrl + 'show/' + showId)
                .then(
                function (response) {
                    return response
                });
    }

    api.getChannelIds = function (channelType) {
            console.log('fdsfds');
            return $http.get(baseUrl + 'channels/' + channelType)
                .then(
                function (response) {
                    console.log('here?FDS');
                    return response
                });
    }

    return api;
   
  });
