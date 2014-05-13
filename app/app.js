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
  })
  .when('/directive/wp-posts', {
    templateUrl: wpBloginfo.templateUrl + '/views/wp-posts.html'
  })
  .when('/directive/wp-page', {
    templateUrl: wpBloginfo.templateUrl + '/views/wp-page.html'
  })
  .when('/directive/wp-menu', {
    templateUrl: wpBloginfo.templateUrl + '/views/wp-menu.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

});