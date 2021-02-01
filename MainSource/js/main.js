var App = angular.module('myApp', []);

App.controller('myController', function ($scope, $http) {
    $http.get('./MainSource/js/code.json').then(function (res) {
        $scope.codes = res.data;
    });
});