'use strict';

angular.module('ptc')
.controller('UsersCtrl', function($scope, $rootScope, $state, User){
  console.info('$state is:', $state.current.name);
  $scope.name = $state.current.name;
  User.init();

  $scope.submit = function(user){
    if ($scope.name === 'register') {
      User.register(user)
      .then(function(data){
        console.log('Successfully registered user with data: ', data);
        $state.go('login');
      })
      .catch(function(error){
        alert('An error occurred during registration.  Please check your username and password');
        console.log('registration error: ' , error);
      });
    } else {
      User.login(user)
      .then(function(data){
        $rootScope.activeUser = data;
        $state.go('home');
        console.info('data: ', data);
      })
      .catch(function(error){
        alert('Cannot log you in.  Please recheck your email and password!!');
        console.log('login error: ', error);
      });
    }
  };

});
