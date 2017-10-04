console.log('in JS!');

var myApp = angular.module('myApp', []);

myApp.controller('ImageController', function ($http) {
    console.log('in ImageController');
    var vm = this;
    vm.gifs = [];

    vm.getGifs = function () {
        vm.gifs = [];
        console.log('in getGifs');
        $http({
            method: 'GET',
            url: '/gifs?name=' + vm.searchIn
        }).then(function (response) {
            vm.gifs = response.data.data;
            console.log('vm.gifs ->', response.data.data);//.images.original.url);

        })
    }
})