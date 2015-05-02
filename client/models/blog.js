'use strict';

angular.module('ptc')
.factory('Blog', function($rootScope, $firebaseArray){
  var fbBlogs;
  var afBlogs;


  console.log('I am inside Blog factory');
  function init(){
    fbBlogs = $rootScope.fbRoot.child('users/' +$rootScope.activeUser.uid+ '/blogs');
    afBlogs = $firebaseArray(fbBlogs);
    return afBlogs;
  }

  function initUsers(){
    var fbUsers = $rootScope.fbRoot.child('users');
    var afUsers = $firebaseArray(fbUsers);
    return afUsers;
  }

  function add(blog){
    return afBlogs.$add(blog);
  }

  return {add: add, init: init, initUsers: initUsers};
});
