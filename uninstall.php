<?php
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

$postId = get_option('wordpress_animation_deluxe_postId');

//Delete post meta

delete_post_meta($postId , 'animation_deluxe_no_event_classes',null);
delete_post_meta($postId , 'animation_deluxe_click_event_classes',null);
delete_post_meta($postId , 'animation_deluxe_hover_event_classes',null);

wp_delete_post( $postId, true);

// Delete plugin options

delete_option('wordpress_animation_deluxe_postId');

