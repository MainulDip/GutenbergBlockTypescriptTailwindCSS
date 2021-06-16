<?php
/*
Plugin Name: TypeScript Gutenberg Block
Plugin URI: https://github.com/mainuldip
Description: React Typescript Gutenberg Block
Version: 1.0.0
Requires at least: 5.2
Requires PHP: 7.2
Author: Mainul Dip
Author URI: https://github.com/mainuldip
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ts-gutenberg
Domain Path: /languages

*/


if (!defined('ABSPATH')) exit; // Exit If Accessed Directly

class CustomBlockInit
{
    public function __construct()
    {
        // add_action('enqueue_block_editor_assets', [$this, 'adminAssets']);
        add_action('init', [$this, 'adminAssets']);
    }

    public function adminAssets()
    {
        wp_enqueue_script('customblocktype', plugin_dir_url(__FILE__) . 'build/index.js', ['wp-blocks', 'wp-element']);
        // wp_register_script('customblocktype', plugin_dir_url(__FILE__) . 'build/index.js', ['wp-blocks', 'wp-element']);
        // wp_register_style(
        //     'gutenberg-examples-02-editor',
        //     plugins_url('editor.css', __FILE__),
        //     array('wp-edit-blocks'),
        //     filemtime(plugin_dir_path(__FILE__) . 'editor.css')
        // );
        register_block_type('tsgutenblock/block-type', [
            'editor_script' => 'customblocktype',
            // 'render_callback' => [$this, 'blockHTML']
        ]);
    }

    function blockHTML($attributes)
    {
        return '<p>This is from php and sky color is ' . $attributes['skyColor'] . ' and grass color is ' . $attributes['grassColor'] . '</p>';
    }
}

new CustomBlockInit();

// function gutenberg_examples_02_register_block()
// {
//     wp_register_script(
//         'gutenberg-examples-02',
//         plugins_url('block.js', __FILE__),
//         array('wp-blocks', 'wp-element'),
//         filemtime(plugin_dir_path(__FILE__) . 'block.js')
//     );

//     wp_register_style(
//         'gutenberg-examples-02-editor',
//         plugins_url('editor.css', __FILE__),
//         array('wp-edit-blocks'),
//         filemtime(plugin_dir_path(__FILE__) . 'editor.css')
//     );

//     wp_register_style(
//         'gutenberg-examples-02',
//         plugins_url('style.css', __FILE__),
//         array(),
//         filemtime(plugin_dir_path(__FILE__) . 'style.css')
//     );

//     // Allow inlining small stylesheets on the frontend if possible.
//     wp_style_add_data('gutenberg-examples-02', 'path', dirname(__FILE__) . '/style.css');

//     register_block_type('gutenberg-examples/example-02-stylesheets', array(
//         'api_version' => 2,
//         'style' => 'gutenberg-examples-02',
//         'editor_style' => 'gutenberg-examples-02-editor',
//         'editor_script' => 'gutenberg-examples-02',
//     ));
// }
// add_action('init', 'gutenberg_examples_02_register_block');
