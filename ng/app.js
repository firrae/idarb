angular.module('app').service('PostsSvc', function($http) {
    this.create = function(post) {
        return $http.post('/api/posts', post)
    }
})

angular.module('app').controller('PostsCtrl', function($scope, PostsSvc){
    $scope.addPost = function() {
        console.log('pressed')

        if($scope.gameID && $scope.hashbomb) {
            PostsSvc.create({
                body: $scope.gameID + ' ' + $scope.hashbomb
            }).success(function() {
                $scope.gameID = null
            })
        }

        //console.log($scope.gameID + ' ' + $scope.hashbomb)
        //console.log('end of addPost function')
    }
})