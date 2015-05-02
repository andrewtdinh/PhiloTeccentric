'use strict';

angular.module('ptc')
.factory('User', function($rootScope){

  function User(){
  }

  User.init = function(){
    $rootScope.getEmailHandle = function(email) {
      return email ? email.slice(0, email.indexOf('@')) : '';
    };
  }

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  return User;
});
