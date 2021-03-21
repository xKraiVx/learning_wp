<?php

define("ASSETS", get_template_directory_uri()."/assets");

require "includes/settings.php";

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_template_directory_uri().'/assets/css/style.css');

    wp_enqueue_script('paper', get_template_directory_uri().'/assets/custom_js/paper/paper-full.js', [], '1.0.0', true);
    wp_enqueue_script('paper_custom', get_template_directory_uri().'/assets/custom_js/index.js', [], '1.0.0', true);
    wp_enqueue_script('script', get_template_directory_uri().'/assets/js/app.js', [], '1.0.0', true);
    
});

function my_paper_scripts( $tag, $handle, $src ) {
    // the handles of the enqueued scripts we want to async
    $async_scripts = array( 'paper_custom');

    if ( in_array( $handle, $async_scripts ) ) {
        return '<script type="text/paperscript" src="' . $src . '" canvas="canvas"></script>' . "\n";
    }
    return $tag;
}

add_filter( 'script_loader_tag', 'my_paper_scripts', 10, 3 );

add_action('after_setup_theme', function(){

    register_nav_menus([
        'header-menu' => 'Меню хедера',
        'footer-menu' => 'Меню футера'
    ]);  
    
});

