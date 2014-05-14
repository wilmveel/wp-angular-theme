angular.module('wpAngularTemplate', [
  'ngRoute',
	'wpAngular'
]).config(function($routeProvider, wpBloginfo) {
  $routeProvider
  .when('/home', {
    templateUrl: wpBloginfo.templateUrl + '/views/home.html'
  })
  .when('/why', {
    templateUrl: wpBloginfo.templateUrl + '/views/why.html'
  })
  .when('/about', {
    templateUrl: wpBloginfo.templateUrl + '/views/about.html'
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
  .when('/directive/wp-media', {
    templateUrl: wpBloginfo.templateUrl + '/views/wp-media.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

});