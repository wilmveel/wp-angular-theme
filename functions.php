<?php

function wp_angular_setup() {

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'primary'   => __( 'Top primary menu', 'twentyfourteen' ),
		'secondary' => __( 'Secondary menu in left sidebar', 'twentyfourteen' ),
	) );
}

add_action( 'after_setup_theme', 'wp_angular_setup' );

add_theme_support( 'post-thumbnails' ); 
?>