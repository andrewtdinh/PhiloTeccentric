'use strict';

angular.module('ptc')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('about', {url: '/about', templateUrl: '/views/home/aboutMe.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('addBlog', {url: '/blogs/add', templateUrl: '/views/blogs/blogs.html', controller: 'BlogsCtrl'})
  .state('editBlog', {url: '/blogs/edit', templateUrl: '/views/blogs/blogs.html', controller: 'BlogsCtrl'})
  .state('fullBlog', {url: '/users/{uid}/blogs/{blogKey}/{blogIndex}', templateUrl: '/views/blog/fullBlog.html', controller: 'FullBlogCtrl'});
});
