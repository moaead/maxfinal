app.controller('MainPageCtrl', ['$scope', '$http',
function ($scope, $http) {
    $scope.groups = [];
    $http.get('/GetAllGroups?format=json')
        .success(function (response) {
            console.log($scope.groups);
            $scope.groups = response;
      });
    
}]);
