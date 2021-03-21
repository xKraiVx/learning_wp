<?php

/**
 * const
 */
// define('ASSETS', get_template_directory_uri() . '/assets/');
define('MY_ACF_PATH', get_stylesheet_directory() . '/includes/acf/');
define('MY_ACF_URL', get_stylesheet_directory_uri() . '/includes/acf/');

/**
 * acf
 */
include_once(MY_ACF_PATH . 'acf.php');
add_filter('acf/settings/url', function () {
    return MY_ACF_URL;
});
add_filter('acf/settings/save_json', function () {
    return get_stylesheet_directory() . '/includes/acf-json';
});

add_filter('acf/settings/load_json', 'my_acf_json_load_point');
    function my_acf_json_load_point($paths)
{
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . '/acf-jconr';
    return $paths;
}

