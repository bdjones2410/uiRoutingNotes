(function() {
  'use strict';
    //define our module and routes here.

    angular
      .module('shinDig',[
        'ui.router'
      ])
      .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
          //v-- define the state of this view.  here we set it as home
          .state('home', {
            url:'/home',
            templateUrl:'main.html'
          })
          //      v-- by making this a sub state of
          //          home with home., it can now render
          //          inside the home html's ui-view
          .state('home.second',{
            url:'/second',
            templateUrl:'second.html'
          })
          .state('home.third',{
            url:'/third',
            templateUrl:'third.html'
          });
      });






}());
