<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function enqueue_styles_admin(){
    wp_enqueue_style('admin_styles',plugin_dir_url(__FILE__).'src/styles/backend/css/style.css');
    wp_enqueue_script('admin_scripts',plugin_dir_url(__FILE__).'src/scripts/backend/js/admin.js',array('jquery'),'1.0',true);
    wp_enqueue_script('admin_animejs',plugin_dir_url(__FILE__).'src/scripts/backend/js/animejs/lib/anime.min.js',array('jquery'),'1.0',true);
    wp_enqueue_script('select2js',plugin_dir_url(__FILE__).'src/scripts/backend/select2/select2.min.js',array('jquery'),'1.0',true);
    wp_enqueue_script('blockui',plugin_dir_url(__FILE__).'src/scripts/backend/js/blockUI/jquery.blockUI.js',array('jquery'),'1.0',true);
    wp_enqueue_style('select2css',plugin_dir_url(__FILE__).'src/scripts/backend/select2/css/select2.min.css');
  }
  add_action('admin_enqueue_scripts','enqueue_styles_admin');


  function enqueue_styles_front(){
    wp_enqueue_script('font_script_animation_deluxe',plugin_dir_url(__FILE__).'src/scripts/frontend/js/front.js',array('jquery'),'1.0',true);
    wp_enqueue_script('animejs_deluxe',plugin_dir_url(__FILE__).'src/scripts/frontend/js/animejs/lib/anime.min.js',array('jquery'),'1.0',true);
  }
  add_action('wp_enqueue_scripts','enqueue_styles_front');

  add_action('add_selector', 'add_selector', 10, 6);

  function add_selector($className,$animationType,$eventType,$selectorType,$animationProperties,$postId){
    $objectClassAnimation = [
      ['className' => $className,
      'animationType' => $animationType,
      'eventType' => $eventType,
      'selectorType' => $selectorType,
      'animationProperties' => $animationProperties,
      ]
    ];

    $metaId = '';

    if($eventType == 'no_event'){
      $metaId = 'animation_deluxe_no_event_classes';
    }

    if($eventType == 'click_event'){
      $metaId = 'animation_deluxe_click_event_classes';
    }

    if($eventType == 'hover_event'){
      $metaId = 'animation_deluxe_hover_event_classes';
    }

    if(!get_post_meta($postId ,$metaId,true)){
      add_post_meta($postId ,$metaId,maybe_serialize($objectClassAnimation));
    }else{
    $getObjectClassAnimation =  get_post_meta($postId ,$metaId,true);
    $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);
    foreach($unserializeObjectAnimation as $key => $objClassAnim){
        if($objClassAnim["className"] ==  $objectClassAnimation[0]['className'] ){
         wp_send_json_success(['message' => $getObjectClassAnimation, 'post_id' => $postId ]);
          return;
         }
     }
     $unserializeObjectAnimation[] = $objectClassAnimation[0];
     update_post_meta($postId, $metaId, maybe_serialize($unserializeObjectAnimation));
   }
   
  
  wp_send_json_success(['message' => $getObjectClassAnimation, 'post_id' => $postId]);
     
    wp_die();

  }


  add_action('delete_selector','delete_selector',10,4);

  function delete_selector($className,$animationType, $eventType,$postId){

    $objectClassAnimation = [
      ['className' => $className,
      'animationType' => $animationType,
      'eventType' => $eventType]
    ];

    $metaId = '';

    if($eventType == 'no_event'){
      $metaId = 'animation_deluxe_no_event_classes';
    }

    if($eventType == 'click_event'){
      $metaId = 'animation_deluxe_click_event_classes';
    }

    if($eventType == 'hover_event'){
      $metaId = 'animation_deluxe_hover_event_classes';
    }

    $selectorExist = false;

    $getObjectClassAnimation =  get_post_meta($postId ,$metaId,true);
    $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);
    $unserializeObjectAnimationNew = [];
   foreach($unserializeObjectAnimation as $key => $objClassAnim){
        if($objClassAnim['className'] ==  $objectClassAnimation[0]['className'] ){
          if(count($unserializeObjectAnimation) == 1 && $objClassAnim['className'] ==  $objectClassAnimation[0]['className']){
            delete_post_meta($postId, $metaId);
          }
          $selectorExist = true;
         }else{
          $unserializeObjectAnimationNew[] = $objClassAnim;
         }
     }
     update_post_meta($postId, $metaId, maybe_serialize($unserializeObjectAnimationNew));
    

    if($selectorExist){  
      wp_send_json_success(['message' => 'Success', 'post_id' => $postId]);
    }else{
      wp_send_json_success(['message' => 'No Selector Found', 'post_id' => $postId,'className'=>$objClassAnim['className']]);
    }
     wp_die();
  }

  add_action('update_selector','update_selector',10,5);

  function update_selector($className,$animationType, $eventType, $animationProperties,$postId){

    $metaId = '';

    if($eventType == 'no_event'){
      $metaId = 'animation_deluxe_no_event_classes';
    }

    if($eventType == 'click_event'){
      $metaId = 'animation_deluxe_click_event_classes';
    }

    if($eventType == 'hover_event'){
      $metaId = 'animation_deluxe_hover_event_classes';
    }

    $objectClassAnimation = [
      ['className' => $className,
      'animationType' => $animationType,
      'eventType' => $eventType,
      'animationProperties' => $animationProperties
      ]
    ];

    $getObjectClassAnimation =  get_post_meta($postId ,$metaId,true);
    $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);

    $unserializeObjectAnimationNew = [];
   foreach($unserializeObjectAnimation as $key => $objClassAnim){
        if($objClassAnim['className'] ==  $objectClassAnimation[0]['className'] ){
          $objClassAnim['animationProperties'] = $objectClassAnimation[0]['animationProperties'] ;
          foreach($objClassAnim['animationProperties'] as $keyProp => $propAnim){
                if($propAnim['optionName'] == "customCode"){
                  $objClassAnim['animationProperties'][$keyProp]['optionValue'] = $objClassAnim['animationProperties'][$keyProp]['optionValue'];
                }
          }
     }
     $unserializeObjectAnimationNew[] = $objClassAnim;
    }
     update_post_meta($postId, $metaId, maybe_serialize($unserializeObjectAnimationNew));
     wp_send_json_success(['message' => $unserializeObjectAnimationNew, 'post_id' => $postId,'className' =>   $className ]);
     wp_die();
  }


  add_action('get_selectors','get_selectors',10,2);

  function get_selectors($eventType,$className){
    $postId = get_option('wordpress_animation_deluxe_postId');

    $metaId = '';
    
  if($eventType == 'no_event'){
      $metaId = 'animation_deluxe_no_event_classes';
 }

   if($eventType == 'click_event'){
       $metaId = 'animation_deluxe_click_event_classes';
     }

     if($eventType == 'hover_event'){
       $metaId = 'animation_deluxe_hover_event_classes';
     }
    
    $getObjectClassAnimation =  get_post_meta($postId , $metaId,true);
    $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);

    $animationProperties = [];
    $selectorArray = [];
    $getClassAnimationPropertiesTerm = [];
    $match = false;
    foreach($unserializeObjectAnimation as $key=>$arrSelctor){
      if(!empty($_GET['term']) && strpos($arrSelctor['className'], $_GET['term']) !== false ){
        if($_GET['animationType'] == $arrSelctor['animationType'] && $_GET['eventType'] == $arrSelctor['eventType']){
        $selectorArray[] = 
        ['id' => $arrSelctor['className'] . '|' . $key,
          'text' => $arrSelctor['selectorType'] == 'class' ? '.'.$arrSelctor['className'] 
          : '#'.$arrSelctor['className'] 
        ];
       }else{
        $selectorArray[] = '';
       }
      }
      if(empty($_GET['term'])){
        if($_GET['animationType'] == $arrSelctor['animationType'] && $_GET['eventType'] == $arrSelctor['eventType']){
            $selectorArray[] = 
            ['id' => $arrSelctor['className'] . '|' . $key,
            'text' => $arrSelctor['selectorType'] == 'class' ? '.'.$arrSelctor['className'] : '#'.$arrSelctor['className'] 
          ];
        }else{
          $selectorArray[] = '';
        }
    }
    $animationProperties[] = [
      $arrSelctor['className'],
     $arrSelctor['animationProperties'],
    ];
  }

    if(!empty($className) ) {
      $getClassAnimationProperties = array_filter($animationProperties, function ($item) use ($className)   {
          return isset($item[0]) && $item[0] === $className;
      });
    }
    wp_send_json_success( ['status' => true,'results' => json_encode($selectorArray) ,'animationProperties' =>    $getClassAnimationProperties       ]   );

    wp_die();

  }

  /////////// Add class events /////////

  add_action('wp_ajax_postAddClassNameNoEvent', 'postAddClassNameNoEvent'); 
  add_action('wp_ajax_nopriv_postAddClassNameNoEvent', 'postAddClassNameNoEvent'); 

  function postAddClassNameNoEvent(){
    $className = $_REQUEST['data']['className'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $selectorType = $_REQUEST['data']['selectorType'];
    $animationProperties = $_REQUEST['data']['animationProperties'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('add_selector', $className, $animationType,$eventType,$selectorType,$animationProperties,$postId);
  }
  
  add_action('wp_ajax_postAddClassNameClickEvent', 'postAddClassNameClickEvent'); 
  add_action('wp_ajax_nopriv_postAddClassNameClickEvent', 'postAddClassNameClickEvent'); 

  function postAddClassNameClickEvent(){
    $className = $_REQUEST['data']['className'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $selectorType = $_REQUEST['data']['selectorType'];
    $animationProperties = $_REQUEST['data']['animationProperties'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('add_selector', $className, $animationType,$eventType,$selectorType,$animationProperties,$postId);

  }

  add_action('wp_ajax_postAddClassNameHoverEvent', 'postAddClassNameHoverEvent'); 
  add_action('wp_ajax_nopriv_postAddClassNameHoverEvent', 'postAddClassNameHoverEvent'); 

  function postAddClassNameHoverEvent(){
    $className = $_REQUEST['data']['className'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $selectorType = $_REQUEST['data']['selectorType'];
    $animationProperties = $_REQUEST['data']['animationProperties'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('add_selector', $className, $animationType,$eventType,$selectorType,$animationProperties,$postId);

  }


/////////// Delete class events /////////

  add_action('wp_ajax_postDeleteClassNameNoEvent', 'postDeleteClassNameNoEvent'); 
  add_action('wp_ajax_nopriv_postDeleteClassNameNoEvent', 'postDeleteClassNameNoEvent'); 

  function postDeleteClassNameNoEvent(){
    $className = $_REQUEST['data']['className'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('delete_selector',$className,$animationType, $eventType,$postId);
}

add_action('wp_ajax_postDeleteClassNameClickEvent', 'postDeleteClassNameClickEvent'); 
add_action('wp_ajax_nopriv_postDeleteClassNameClickEvent', 'postDeleteClassNameClickEvent'); 

function postDeleteClassNameClickEvent(){
  $className = $_REQUEST['data']['className'];
  $animationType = $_REQUEST['data']['animationType'];
  $eventType = $_REQUEST['data']['eventType'];
  $postId = get_option('wordpress_animation_deluxe_postId');

  do_action('delete_selector',$className,$animationType, $eventType,$postId);
}


add_action('wp_ajax_postDeleteClassNameHoverEvent', 'postDeleteClassNameHoverEvent'); 
add_action('wp_ajax_postDeleteClassNameHoverEvent', 'postDeleteClassNameHoverEvent'); 

function postDeleteClassNameHoverEvent(){
  $className = $_REQUEST['data']['className'];
  $animationType = $_REQUEST['data']['animationType'];
  $eventType = $_REQUEST['data']['eventType'];
  $postId = get_option('wordpress_animation_deluxe_postId');

  do_action('delete_selector',$className,$animationType, $eventType,$postId);
}

/////////// Update class events /////////

  add_action('wp_ajax_postUpdateClassNameNoEvent', 'postUpdateClassNameNoEvent'); 
  add_action('wp_ajax_nopriv_postUpdateClassNameNoEvent', 'postUpdateClassNameNoEvent'); 

  function postUpdateClassNameNoEvent(){
    $className = $_REQUEST['data']['selectorName'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $animationProperties = $_REQUEST['data']['animationProperties'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('update_selector',$className,$animationType, $eventType, $animationProperties,$postId);


  }

  add_action('wp_ajax_postUpdateClassNameClickEvent', 'postUpdateClassNameClickEvent'); 
  add_action('wp_ajax_nopriv_postUpdateClassNameClickEvent', 'postUpdateClassNameClickEvent'); 

  function postUpdateClassNameClickEvent(){
    $className = $_REQUEST['data']['selectorName'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $animationProperties = $_REQUEST['data']['animationProperties'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('update_selector',$className,$animationType, $eventType, $animationProperties,$postId);


  }

  add_action('wp_ajax_postUpdateClassNameHoverEvent', 'postUpdateClassNameHoverEvent'); 
  add_action('wp_ajax_nopriv_postUpdateClassNameHoverEvent', 'postUpdateClassNameHoverEvent'); 

  function postUpdateClassNameHoverEvent(){
    $className = $_REQUEST['data']['selectorName'];
    $animationType = $_REQUEST['data']['animationType'];
    $eventType = $_REQUEST['data']['eventType'];
    $animationProperties = $_REQUEST['data']['animationProperties'];
    $postId = get_option('wordpress_animation_deluxe_postId');

    do_action('update_selector',$className,$animationType, $eventType, $animationProperties,$postId);

  }

 ////////////Get Selectors Events/////////

  
  add_action('wp_ajax_animationNoEventGetSelectors', 'animationNoEventGetSelectors'); 
  add_action('wp_ajax_nopriv_animationNoEventGetSelectors', 'animationNoEventGetSelectors'); 

  function animationNoEventGetSelectors(){
    $eventType = $_GET['eventType'];
    do_action('get_selectors', $eventType,null);
  }

  add_action('wp_ajax_animationClickEventGetSelectors', 'animationClickEventGetSelectors'); 
  add_action('wp_ajax_nopriv_animationClickEventGetSelectors', 'animationClickEventGetSelectors'); 

  function animationClickEventGetSelectors(){
    $eventType = $_GET['eventType'];
    do_action('get_selectors', $eventType,null);
  }

  add_action('wp_ajax_animationHoverEventGetSelectors', 'animationHoverEventGetSelectors'); 
  add_action('wp_ajax_nopriv_animationHoverEventGetSelectors', 'animationHoverEventGetSelectors'); 

  function animationHoverEventGetSelectors(){
    $eventType = $_GET['eventType'];
    do_action('get_selectors', $eventType,null);
  }
  

 ////////////Selection Selectors Events/////////

 add_action('wp_ajax_animationNoEventSelectSelectors', 'animationNoEventSelectSelectors'); 
 add_action('wp_ajax_nopriv_animationNoEventSelectSelectors', 'animationNoEventSelectSelectors'); 

 function animationNoEventSelectSelectors(){
   $eventType = $_POST['value']['eventType'];
   $className = $_POST['value']['className'];
   do_action('get_selectors', $eventType, $className);
 }


 add_action('wp_ajax_animationClickEventSelectSelectors', 'animationClickEventSelectSelectors'); 
 add_action('wp_ajax_nopriv_animationClickEventSelectSelectorss', 'animationClickEventSelectSelectors'); 

 function animationClickEventSelectSelectors(){
   $eventType = $_POST['value']['eventType'];
   $className = $_POST['value']['className'];
   do_action('get_selectors', $eventType, $className);
 }

 add_action('wp_ajax_animationHoverEventSelectSelectors', 'animationHoverEventSelectSelectors'); 
 add_action('wp_ajax_nopriv_animationHoverEventSelectSelectors', 'animationHoverEventSelectSelectors'); 

 function animationHoverEventSelectSelectors(){
   $eventType = $_POST['value']['eventType'];
   $className = $_POST['value']['className'];
   do_action('get_selectors', $eventType, $className);
 }
 
 //Get animation in Front

 add_action('wp_ajax_nopriv_getNoEventsAnimationProperties', 'getNoEventsAnimationProperties'); 
 add_action('wp_ajax_getNoEventsAnimationProperties', 'getNoEventsAnimationProperties'); 

 function getNoEventsAnimationProperties(){
  $postId = get_option('wordpress_animation_deluxe_postId');
  $getObjectClassAnimation =  get_post_meta($postId , 'animation_deluxe_no_event_classes',true);
  $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);

  wp_send_json_success(["results"=>$unserializeObjectAnimation]);

  exit();
 }

 add_action('wp_ajax_nopriv_getClickEventsAnimationProperties', 'getClickEventsAnimationProperties'); 
 add_action('wp_ajax_getClickEventsAnimationProperties', 'getClickEventsAnimationProperties'); 

 function getClickEventsAnimationProperties(){
  $postId = get_option('wordpress_animation_deluxe_postId');
  $getObjectClassAnimation =  get_post_meta($postId , 'animation_deluxe_click_event_classes',true);
  $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);

  wp_send_json_success(["results"=>$unserializeObjectAnimation]);

  exit();
 }


 add_action('wp_ajax_nopriv_getHoverEventsAnimationProperties', 'getHoverEventsAnimationProperties'); 
 add_action('wp_ajax_getHoverEventsAnimationProperties', 'getHoverEventsAnimationProperties'); 

 function getHoverEventsAnimationProperties(){
  $postId = get_option('wordpress_animation_deluxe_postId');
  $getObjectClassAnimation =  get_post_meta($postId , 'animation_deluxe_hover_event_classes',true);
  $unserializeObjectAnimation = maybe_unserialize($getObjectClassAnimation);

  wp_send_json_success(["results"=>$unserializeObjectAnimation]);

  exit();
 }

 


?>