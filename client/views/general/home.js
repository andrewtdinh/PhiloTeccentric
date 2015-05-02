'use strict';

angular.module('ptc')
.controller('HomeCtrl', function($rootScope, $scope, User, Blog){
  User.init();
  $rootScope.afBlogs = Blog.init();
  $rootScope.afUsers = Blog.initUsers();

  $scope.displayFullBlog = function(user, blog){
    // var userUid = user.$id;
    // var blogKey = user.
    // $scope.display = !$scope.display;
    // $state.go('fullBlog', {uid:,blogKey:,blogIndex: };
    console.info('user: ', user, 'blog: ', blog);
  };
});
