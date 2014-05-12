angular.module('wpAngularTemplate', [
  'ngRoute',
	'wpAngular'
]).config(function($routeProvider, wpBloginfo) {
  $routeProvider
  .when('/home', {
    templateUrl: wpBloginfo.templateUrl + '/views/home.html'
  })
  .when('/contact', {
    templateUrl: wpBloginfo.templateUrl + '/views/contact.html'
  })
  .when('/directive/wp-post', {
    templateUrl: wpBloginfo.templateUrl + '/views/wp-post.html'
  }).otherwise({
    redirectTo: '/home'
  });

});