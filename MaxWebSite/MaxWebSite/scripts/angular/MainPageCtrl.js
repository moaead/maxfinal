app.controller('MainPageCtrl', ['$scope', '$http',
function ($scope, $http) {
    $scope.groups = [];
    $http.get('/GetAllGroups?format=json')
        .success(function (response) {
            console.log($scope.groups);
            $scope.groups = response;
      });
    
}]);


app.controller('eyy', ['$scope', '$http',
    function ($scope, $http) {
        $scope.NumOfAdds = 0;
        $scope.NumOfSide = 0;
        $scope.NumOfVis = 0;
        $scope.NumOfAdv = 0;
        $scope.NewVisters = 0;
        $scope.NewAdds = 0;
      
        $http.get('/GetAllGroups?format=json')
            .success(function (response) {
                console.log($scope.groups);
                $scope.NumOfAdds = response;
            });

        $http.get('/GetAllGroups?format=json')
         .success(function (response) {
             console.log($scope.groups);
             $scope.NumOfSide = response;
         });

        $http.get('/GetAllGroups?format=json')
      .success(function (response) {
          console.log($scope.groups);
          $scope.NumOfVis = response;
      });

        $http.get('/GetAllGroups?format=json')
      .success(function (response) {
          console.log($scope.groups);
          $scope.NumOfAdv = response;
      });

        $http.get('/GetAllGroups?format=json')
    .success(function (response) {
        console.log($scope.groups);
        $scope.NewVisters0 = response;
    });

 
        $scope.NiVist = ($scope.NewVisters / $scope.NumOfVis) * 100;
       


        $http.get('/GetAllGroups?format=json')
.success(function (response) {
    console.log($scope.groups);
    $scope.NewAdds = response;
});


        $scope.NiAdds = ($scope.NewAdds / $scope.NumOfAdds) * 100;





    }]);
