<!DOCTYPE html>
<html lang="en" xmlns:ng="http://angularjs.org" id="ng-app" ng-app="wpAngularTemplate">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>WP-Angular example theme</title>

    <!-- Bootstrap -->
    <link href="<?php bloginfo('template_directory'); ?>/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/style.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php wp_head(); ?>

    <!--[if lte IE 8]>
        <script>
          document.createElement('wp-post');
          document.createElement('wp-posts');

          document.createElement('wp:post');
          document.createElement('wp:posts');
        </script>
      <![endif]-->

  </head>
  <body>
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">WP-Angular</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            
            <li class="dropdown">
              <a href="" class="dropdown-toggle" data-toggle="dropdown">Directives <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#/directive/wp-post">Wp-Post</a></li>
                <li><a href="#/directive/wp-posts">Wp-Posts</a></li>
                <li><a href="#/directive/wp-page">Wp-Page</a></li>
                <li><a href="#/directive/wp-menu">Wp-Menu</a></li>
              </ul>
            </li>

            <li><a href="#/contact">Contact</a></li>

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    <div class="container">
      <div ng-view></div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="<?php bloginfo('template_directory'); ?>/lib/bootstrap/js/bootstrap.min.js"></script>
    
    <script src="<?php bloginfo('template_directory'); ?>/app/app.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/app/directives/wpExample.js"></script>

    <?php wp_footer(); ?>
  </body>
</html>