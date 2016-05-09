function UserController() {
  this.user = {
    name: 'Petr',
    surname: 'Novák',
    yearOfBirth: 1982
  };

  this.getAge = function() {
    var now = new Date();
    return now.getFullYear() - this.user.yearOfBirth;
  };
}

angular.module('moduleExample', [])
  .controller('UserController', UserController);
