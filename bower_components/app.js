angular.module("app",["ngRoute","ng-polymer-elements"]),angular.module("app").service("PostsSvc",["$http",function(o){this.create=function(e){return o.post("/api/posts",e)}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(o,e){o.addPost=function(){console.log("pressed"),o.gameID&&o.hashbomb&&e.create({body:o.gameID+" "+o.hashbomb}).success(function(){o.gameID=null})}}]),angular.module("app").config(["$routeProvider",function(o){o.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"})}]);