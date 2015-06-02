app.controller('MainPageCtrl', ['$scope', '$http',
function ($scope, $http) {
    $scope.groups = [];
    $http.get('/GetAllGroups?format=json')
        .success(function (response) {
            $scope.groups = response;
      });
    
}]);
