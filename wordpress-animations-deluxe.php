<?php
/*
Plugin Name: Wordpress Animations Deluxe 
Description: Amazing animations for elements in wordpress
Author: Tal Rimer
Version: 1.0
License: GPLv3 or later License
License URI: http://www.gnu.org/licenses/gpl-3.0.html
Text Domain: wordpress-animations-deluxe
*/


register_activation_hook(__FILE__, 'plugin_activated');

function plugin_activated() {
  $argsPost = [
    'post_type' => 'animation_deluxe',
    'post_status' => 'publish',
    'post_status' => 'any', // Check all statuses
     'numberposts' => 1
  ];

  $existing_post = get_posts($argsPost);

  if(empty($existing_post)){
    $post_data = [
      'post_title'   => 'wordpress_animation_deluxe', 
      'post_content' => 'wordpress_animation_deluxe',
      'post_status'  => 'publish', 
      'post_author'   => 1,
      'post_type'    => 'animation_deluxe'
  ];
   $post_id = wp_insert_post($post_data);
   add_option('wordpress_animation_deluxe_postId',$post_id);
  }
}

require_once('functions.php');

if (!defined('ABSPATH')){
    exit;
}

add_action('admin_menu','wordpress_animation_deluxe_menu');

  function wordpress_animation_deluxe_menu(){
    add_menu_page(
      'Wordpress Animation Deluxe',
      'Wordpress Animation Deluxe',
      'manage_options',
      'wordpress-animation-deluxe',
      'animation_deluxe_func',
      'dashicons-admin-customizer',
      12
    );
  }

  function animation_deluxe_func(){
    echo '<h1>Wordpress Animation Deluxe</h1>';
    ?>
    </br>
        <section class="main_section">
            <div class="anime_con">
                <span style="font-size:16px; font-weight:bold; margin-right:10px;" id="title_animation">Animation</span>Enable Animation Preview <img src="<?php echo plugin_dir_url(__FILE__) ?>src/icons/play_button_preview.png" class="play_btn"/>
                </br>
                </br>
                 <div class = "anime_sub_con">
                  <div class = "anime_sub_con_header">
                   <div class = "anime_examp">
                      <div class = "object_squ"></div>
                      <input class="object_anim_input" value = "0" style="display:none; text-align:center;" />
                      <svg class="svg_object_anim" width="20" height="20" viewBox="0 0 128 128" style="display:none;">
                    <filter id="displacementFilter">
                        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" style="transform: scale(1);"></feTurbulence>
                        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="15" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
                    </filter>
                    <polygon points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100 " style="filter: url(&quot;#displacementFilter&quot;); transform: scale(1);" fill="currentColor"></polygon>
                    </svg>
                    </div>
                    <div class = "anime_no_event">
                        <span>No Event</span>
                    </div>
                    <div class = "anime_click_option">
                        <span>Event Mouse Click</span>
                    </div>
                    <div class = "anime_hover_option">
                       <span>Event Mouse Hover</span>
                    </div>
                    <select class="choose_animation" name="choose_animation">
                         <option disabled selected>Choose Animation</option>
                         <option value="Object Move Point X To Y">Object Move Point X To Y</option>
                         <option value="Object Move Point X To Y Delay">Object Move Point X To Y Delay </option>
                         <option value="Counter">Counter</option>
                         <option value="Transformation 1">Transformation 1</option>
                         <option value="Transformation 2">Transformation 2</option>
                         <option value="Transformation 3 SVG">Transformation 3 SVG</option>
                         <option value="Alternate">Alternate</option>
                         <option value="Element Grows">Element Grows</option>
                         <option value="Ease in Out Color">Ease in Out Color</option>
                         <option value="Ease Out Elastic">Ease Out Elastic</option>
                         <option value="Ease Out Elastic 2">Ease Out Elastic 2</option>
                         <option value="Ease Out Quad Rotate">Ease Out Quad Rotate</option>
                         <option value="Steps">Steps</option>
                         <option value="X To Y And Y To X Scale Color">X To Y And Y To X Scale Color</option>
                    </select>
                    </div>
                    <div class="hidden_animation_settings">
                        <div class="animation_no_event_settings" data-showing ="false">
                            <h2>No Event Settings</h2>
                           <div class="classes_con">
                              <div class="add_class">
                              <input placeholder="Add new class or id" name="add_new_class"/>
                              <select class="selector_type">
                                  <option value="class">class</option>
                                  <option value="id">id</option>
                              </select>
                              <button class="add_new_class_btn">Add</button>
                              </div>
                              <div class="delete_class">
                              <input placeholder="Delete class or id" name="delete_class"/>
                              <button class="delete_class_btn">Delete</button>
                              </div>
                              <div class ="select_con">
                              <select class="select_class">
                                <option disabled selected>Select Class</option>
                              </select>
                              <button class="update_class_btn">Update</button>
                              </div>
                           </div>
                           <div class ="options_con">
                          </div>
                        </div>
                        <div class="animation_click_event_settings" data-showing ="false">
                           <h2>Click Event Settings</h2>
                           <div class="classes_con">
                              <div class="add_class">
                              <input placeholder="Add new class or id" name="add_new_class"/>
                              <select class="selector_type">
                                  <option value="class">class</option>
                                  <option value="id">id</option>
                              </select>
                              <button class="add_new_class_btn">Add</button>
                              </div>
                              <div class="delete_class">
                              <input placeholder="Delete class or id" name="delete_class"/>
                              <button class="delete_class_btn">Delete</button>
                              </div>
                              <div class ="select_con">
                              <select class="select_class">
                                <option disabled selected>Select Class</option>
                              </select>
                              <button class="update_class_btn">Update</button>
                              </div>
                           </div>
                           <div class ="options_con">
                          </div>
                        </div>
                        <div class="animation_hover_event_settings" data-showing ="false">
                            <h2>Hover Event Settings</h2>
                            <div class="classes_con">
                              <div class="add_class">
                              <input placeholder="Add new class or id" name="add_new_class"/>
                              <select class="selector_type">
                                  <option value="class">class</option>
                                  <option value="id">id</option>
                              </select>
                              <button class="add_new_class_btn">Add</button>
                              </div>
                              <div class="delete_class">
                              <input placeholder="Delete class or id" name="delete_class"/>
                              <button class="delete_class_btn">Delete</button>
                              </div>
                              <div class ="select_con">
                              <select class="select_class">
                                <option disabled selected>Select Class</option>
                              </select>
                              <button class="update_class_btn">Update</button>
                              </div>
                           </div>
                           <div class ="options_con">
                          </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <?php
  }
?>