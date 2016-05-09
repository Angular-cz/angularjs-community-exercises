function UserController($scope) {
  // TODO 5.1 - přiřaďte data a funkce místo $scope do this

  // TODO 2 - inicializujte objekt user ve $scope

  // TODO 4 - přiřaďte funkci getage do $scope
  var getAge = function() {
    var now = new Date();
    return now.getFullYear() - $scope.user.yearOfBirth;
  };
}

angular.module('moduleExample', [])
  .controller('UserController', UserController);

