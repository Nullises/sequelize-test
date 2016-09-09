var myApp = angular.module('postgreSQL',[ ]);
myApp.controller('postgreSQLCtrl', ['$scope' ,'$http',  function($scope,$http) {
    $scope.val1 = 'This is temp Val' ;
    $scope.fName = '';
    $scope.lName = '';
    $scope.email = '';
    $scope.mbl = '' ;
    $scope.getAllRec = function(){
         $http({method: 'GET', url: '/db/readRecords'}).
            success(function(data, status) {
                  $scope.dataset = data;
            }).
            error(function(data, status) {
              $scope.dataset = data || "Request failed ";
          });
    }
    $scope.addRecord = function(){
        $http({method: 'GET', url: '/db/addRecord?fName='+$scope.fName+'&lName='+
               $scope.lName+'&email='+$scope.email+'&mbl='+$scope.mbl}).
            success(function(data, status) {
                    swal('¡Registro añadido exitosamente!');
                    $scope.getAllRec();
            });
    }
    $scope.delRecord = function(recId){
        console.log(recId);
        if(confirm('¿Está seguro que desea borrar este registro? '))
        {
            $http({method: 'GET', url: '/db/delRecord?id='+recId}).
                success(function(data, status) {
                        $scope.getAllRec();
                });
        }
    }
    $scope.getAllRec();
}]);
