jQuery(function($){
      $('.choose_animation').on('change',function(){
           initAnimationNoEventSettingsSelect();  
         $('.update_class_btn').block({  message: null ,css: { backgroundColor: '#0000002e'} });

          $('#title_animation').text($(this).val());
          $('.play_btn').attr('data-anim-selected',$(this).val());
          console.log($(this).val());
          if($(this).val() == 'Counter'){
              $('.anime_examp .object_squ').hide();
              $('.object_anim_input').show();
              $('.svg_object_anim').hide();
          }
          if($(this).val() == 'Transformation 3 SVG'){
              $('.anime_examp .object_squ').hide();
              $('.anime_examp .svg_object_anim').show();
          }

          if($(this).val() != 'Transformation 3 SVG' && $(this).val() != 'Counter'){
              $('.anime_examp .object_squ').show();
              $('.object_anim_input').hide();
              $('.svg_object_anim').hide();
          }
          $('.object_squ').css('background-color','red');
          $('.object_squ').css('transform','translateX(0)');

          if($(this).val() == 'Object Move Point X To Y'){
            $('.options_con').empty();
              $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>translateX</span>
            <input type="number" value="1" name="translateX" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY" class="optionProp"/>`);
          }

          if($(this).val() == 'Object Move Point X To Y Delay'){
            $('.options_con').empty();
            $('.options_con').append(`
          <span class="option_title_name" style="font-weight:bold;">translateX</span>
          <input type="number" value="1" name="translateX" class="optionProp"/>
          <span class="option_title_name" style="font-weight:bold;">translateY</span>
          <input type="number" value="1" name="translateY" class="optionProp"/>
          <span class="option_title_name" style="font-weight:bold;">Delay</span>
          <input type="number" min="1" value="1" name="delay" class="optionProp"/>`);
        }


        if($(this).val() == 'Counter'){
          $('.options_con').empty();
          $('.options_con').append(`
        <span class="option_title_name" style="font-weight:bold;">value</span>
        <div style="display:flex; align-items:center; gap:10px;">
        From <input type="number" min="0" value="0" name="minValue" class="optionProp"/>
        To   <input type="number" min="1" value="1" name="Tovalue" class="optionProp"/>
        </div>
        <span class="option_title_name" style="font-weight:bold;">round</span>
        <input type="number" min="1" value="1" name="round" class="optionProp"/>`);
      }


      if($(this).val() == 'Transformation 1'){
        $('.options_con').empty();
        $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>Border Radius (percentage unit) </span>
            <input type="number" min="1" value="1" name="borderRadius" class="optionProp"/>`);
    }

    if($(this).val() == 'Transformation 2'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>Scale</span>
          <input type="number" min="1" value="1" name="scale" class="optionProp"/>`);
  }

    if($(this).val() == 'Transformation 3 SVG'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>svg points</span>
          <input type="text" name="svgPoints" class="optionProp"/>
          <span class="option_title_name" style="font-weight:bold";>Scale</span>
          <input type="number" min="1" value="1" name="scale" class="optionProp"/>
          <span class="option_title_name" style="font-weight:bold";>loop  <input type="checkbox" name="loop" style="margin-left:5px;" class="optionProp"/></span>
        `);
    }

    if($(this).val() == 'Alternate'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>translateX</span>
            <input type="number" value="1" name="translateX" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY" class="optionProp"/>`);
    }

    if($(this).val() == 'Element Grows'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>Width percentage unit)</span><div style="display:flex; align-items:center; gap:10px;">
        min-width <input type="number" min="0" value="1" name="minWidth" class="optionProp"/>
        max-width  <input type="number" min="1" value="1" name="maxWidth" class="optionProp"/>
        </div>`);
    }

    if($(this).val() == 'Ease in Out Color'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>End delay</span>
            <input type="number" min="1" value="1" name="endDelay" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>Background Color (hex-color)</span>
            <input type="color" name="backgroundColor" class="optionProp"/>`);
    }

    if($(this).val() == 'Ease Out Elastic'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>keyframes:</span>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY1" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateX</span>
            <input type="number" value="1" name="translateX1" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY2" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateX</span>
            <input type="number" value="1" name="translateX2" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY3" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>duration</span>
            <input type="number" value="1" name="duration" class="optionProp"/>`);
    }

    if($(this).val() == 'Ease Out Elastic 2'){
      $('.options_con').empty();
      $('.options_con').append(`
            <span class="option_title_name" style="font-weight:bold";> Default (Animation Preview Settings) <input type="checkbox" name="default" style="margin-left:5px;" value="off" class="optionProp"/></span>
            <span class="option_title_name" style="font-weight:bold";> Custom Code <input type="checkbox" name="checkboxCustomCode" style="margin-left:5px;" value="off" class="optionProp"/></span>
            <textarea style="height:300px" name="customCode" class="optionProp"></textarea>`);
    }


    if($(this).val() == 'Ease Out Quad Rotate'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>translateX</span>
            <input type="number" value="1" name="translateX" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>roate</span>
            <input type="number" value="1" name="roate" class="optionProp"/>`);
    }

    if($(this).val() == 'Steps'){
      $('.options_con').empty();
      $('.options_con').append(`<span class="option_title_name" style="font-weight:bold";>translateX</span>
            <input type="number" value="1" name="translateX" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>translateY</span>
            <input type="number" value="1" name="translateY" class="optionProp"/>
            <span class="option_title_name" style="font-weight:bold";>easing (steps)</span>
            <input type="number" value="1" name="easing" class="optionProp"/>`);
    }

    if($(this).val() == 'X To Y And Y To X Scale Color'){
      $('.options_con').empty();
      $('.options_con').append(`
            <span class="option_title_name" style="font-weight:bold";> Default (Animation Preview Settings) <input type="checkbox" name="default" style="margin-left:5px;" value="off" class="optionProp"/></span>
            <span class="option_title_name" style="font-weight:bold";> Custom Code <input type="checkbox" name="checkboxCustomCode" style="margin-left:5px;" value="off" class="optionProp"/></span>
            <textarea style="height:300px;" name="customCode" class="optionProp"></textarea>
            <span class="option_title_name" style="font-weight:bold";> Color finish</span> <input type="color" name="backgroundColor" class="optionProp"/>
             <span class="option_title_name" style="font-weight:bold";> Delay </span>  <input type="number" value="1" name="delay" class="optionProp"/>
               <span class="option_title_name" style="font-weight:bold";> End Delay </span><input type="number" value="1" name="endDelay" class="optionProp"/>
             <span class="option_title_name" style="font-weight:bold";> Duration</span>  <input type="number" value="1" name="duration" class="optionProp"/>`);
    }

  
  });

     $('body').on('change','.option_title_name input[name="default"]',function(){
        if($(this).is(':checked') == true){
          $(this).val('on');
          $('.option_title_name input[name="checkboxCustomCode"]').val('off');
        }

        if($(this).is(':checked') == false){
          $(this).val('off');
        }
     });

     $('body').on('change','.option_title_name input[name="checkboxCustomCode"]',function(){
      if($(this).is(':checked') == true){
        $(this).val('on');
        $('.option_title_name input[name="default"]').val('off');
      }

      if($(this).is(':checked') == false){
        $(this).val('off');
      }
   });

      $('.play_btn').on('click',function(){
          let objectSqu = $(this).closest('.anime_con').find('.anime_examp .object_squ');
          let svgObject = $(this).closest('.anime_con').find('.anime_examp .svg_object_anim').attr('class');
          let inputObjectCounter = $(this).closest('.anime_con').find('.anime_examp .object_anim_input').attr('class');
          objectSqu.css('transform','translateX(0)');
          let objectSquClass = objectSqu.attr('class');
          if($('.play_btn').attr('data-anim-selected') == 'Object Move Point X To Y'){
              anime({
                  targets: '.' + objectSquClass,
                  translateX: 250,
                });
          }

          if($('.play_btn').attr('data-anim-selected') == 'Object Move Point X To Y Delay'){
              anime({
                  targets: '.' + objectSquClass,
                  translateX: 250,
                  delay: 1000
                });
          }

          if($('.play_btn').attr('data-anim-selected') == 'Counter'){
              anime({
                  targets:  '.' + inputObjectCounter,
                  value: [0, 1000],
                  round: 1,
                  easing: 'easeInOutExpo'
                });
          }
          
          if($('.play_btn').attr('data-anim-selected') == 'Transformation 1'){
                  animation = anime({
                  targets:  '.' + objectSquClass,
                  borderRadius: '50%',
                });
                setTimeout(function(){
                  animation = anime({
                      targets:  '.' + objectSquClass,
                      borderRadius: ['0%', '0%'],
                    });
                },2000);
          }

          if($('.play_btn').attr('data-anim-selected') == 'Transformation 2'){
              animation = anime({
                  targets:  '.' + objectSquClass,
                  scale: 2,
                  rotate: '1turn'
            });
            setTimeout(function(){
              animation = anime({
                  targets:  '.' + objectSquClass,
                  scale: 1,
                  rotate: '1turn'
                });
            },2000);
      }

      if($('.play_btn').attr('data-anim-selected') == 'Transformation 3 SVG'){
          animation = anime({
              targets: ['.' + svgObject + ' polygon', 'feTurbulence', 'feDisplacementMap'],
                  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
                  baseFrequency: 1,
                  scale: 1,
                  loop: true,
                  direction: 'alternate',
                easing: 'easeInOutExpo'
        });
      }

      if($('.play_btn').attr('data-anim-selected') == 'Alternate'){
          anime({
              targets:  '.' + objectSquClass,
              translateX: 250,
              direction: 'alternate',
              easing: 'linear'
            });
      }

      if($('.play_btn').attr('data-anim-selected') == 'Element Grows'){
          anime({
              targets:  '.' + objectSquClass,
              width: ['4%', '100%'],
              easing: 'easeInOutQuad',
              direction: 'alternate',
            });
      }

      if($('.play_btn').attr('data-anim-selected') == 'Ease in Out Color'){
            anime.timeline({
              endDelay: 1000,
              easing: 'easeInOutQuad',
              direction: 'alternate',
            })
            .add({ targets:  '.' + objectSquClass,  background: '#FFF' }, 0)
      }

      if($('.play_btn').attr('data-anim-selected') == 'Ease Out Elastic'){
          anime({
              targets:  '.' + objectSquClass,
              keyframes: [
                {translateY: -40},
                {translateX: 250},
                {translateY: 40},
                {translateX: 0},
                {translateY: 0}
              ],
              duration: 4000,
              easing: 'easeOutElastic(1, .8)',
            });
      }

      if($('.play_btn').attr('data-anim-selected') == 'Ease Out Elastic 2'){
          anime({
              targets:  '.' + objectSquClass,
              translateX: [
                { value: 250, duration: 1000, delay: 500 },
                { value: 0, duration: 1000, delay: 500 }
              ],
              translateY: [
                { value: -40, duration: 500 },
                { value: 40, duration: 500, delay: 1000 },
                { value: 0, duration: 500, delay: 1000 }
              ],
              scaleX: [
                { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                { value: 1, duration: 900 },
                { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                { value: 1, duration: 900 }
              ],
              scaleY: [
                { value: 1, duration: 500 },
                { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                { value: 1, duration: 450 },
                { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                { value: 1, duration: 450 }
              ],
              easing: 'easeOutElastic(1, .8)',
            });
      }

      if($('.play_btn').attr('data-anim-selected') == 'Ease Out Quad Rotate'){
          anime({
              targets:  '.' + objectSquClass,
              translateX: 270,
              direction: 'alternate',
              rotate: 200,
              easing: 'easeInOutQuad'
            });
      }

      if($('.play_btn').attr('data-anim-selected') == 'Steps'){
          anime({
              targets:  '.' + objectSquClass,
              translateX: 250,
              direction: 'alternate',
              easing: 'steps(5)'
            });
      }


      if($('.play_btn').attr('data-anim-selected') == 'X To Y And Y To X Scale Color'){
          var finishedLogEl = document.querySelector('.promise-demo .finished-log');
          var promiseEl =  '.' + objectSquClass;
          function logFinished() {
            anime.set(finishedLogEl, {value: 'Promise resolved'});
            anime.set(promiseEl, {backgroundColor: '#18FF92'});
          }
          
          var animation = anime.timeline({
            targets:promiseEl,
            delay: 400,
            duration: 500,
            endDelay: 400,
            easing: 'easeInOutSine',
          }).add({
            translateX: 250
          }).add({
            scale: 2
          }).add({
            translateX: 0
          });
          
          animation.finished.then(logFinished);        
      }
      });

      $('.anime_sub_con .anime_no_event').on('click',function(){
         if($('.choose_animation').val() == null){
          alert('First Choose Animation');
         }else{
          let noEventBtn =  $(this).closest('.anime_con').find('.hidden_animation_settings .animation_no_event_settings');
          noEventBtn.show();
          if(noEventBtn.attr('data-showing') == 'false'){
              noEventBtn.attr('data-showing','true');
              noEventBtn.show();
              return;
          }
          if(noEventBtn.attr('data-showing') == 'true'){
              noEventBtn.attr('data-showing','false');
              noEventBtn.hide();
              return;
          }

        }
      });

      $('.anime_sub_con .anime_click_option').on('click',function(){
        if($('.choose_animation').val() == null){
          alert('First Choose Animation');
        }else{
          let clickEventBtn = $(this).closest('.anime_con').find('.hidden_animation_settings .animation_click_event_settings');
          clickEventBtn.show();
          if(clickEventBtn.attr('data-showing') == 'false'){
              clickEventBtn.attr('data-showing','true');
              clickEventBtn.show();
              return;
          }
          if(clickEventBtn.attr('data-showing') == 'true'){
              clickEventBtn.attr('data-showing','false');
              clickEventBtn.hide();
              return;
          }
        }
      });

      $('.anime_sub_con .anime_hover_option').on('click',function(){
        if($('.choose_animation').val() == null){
          alert('First Choose Animation');
        }else{
          let hoverEventBtn = $(this).closest('.anime_con').find('.hidden_animation_settings .animation_hover_event_settings');
          hoverEventBtn.show();
          if(hoverEventBtn.attr('data-showing') == 'false'){
              hoverEventBtn.attr('data-showing','true');
              hoverEventBtn.show();
              return;
          }
          if(hoverEventBtn.attr('data-showing') == 'true'){
              hoverEventBtn.attr('data-showing','false');
              hoverEventBtn.hide();
              return;
          }
        }
      });

      $('body').on('change','.animation_no_event_settings input[name="default"]',function(){
        if($(this).is(':checked')){
        $('.animation_no_event_settings input[name="checkboxCustomCode"]').prop('checked',false);
        }
    });

    $('body').on('change','.animation_no_event_settings input[name="checkboxCustomCode"]',function(){
      if($(this).is(':checked')){
        $('.animation_no_event_settings input[name="default"]').prop('checked',false);
      }
    });

      $('body').on('change','.animation_click_event_settings input[name="default"]',function(){
        if($(this).is(':checked')){
          $('.animation_click_event_settings input[name="checkboxCustomCode"]').prop('checked',false);
        }
      });

      $('body').on('change','.animation_click_event_settings input[name="checkboxCustomCode"]',function(){
        if($(this).is(':checked')){
        $('.animation_click_event_settings input[name="default"]').prop('checked',false);
        }
    });

    $('body').on('change','.animation_hover_event_settings input[name="default"]',function(){
      if($(this).is(':checked')){
      $('.animation_hover_event_settings  input[name="checkboxCustomCode"]').prop('checked',false);
      }
  });

  $('body').on('change','.animation_hover_event_settings input[name="checkboxCustomCode"]',function(){
    if($(this).is(':checked')){
      $('.animation_hover_event_settings input[name="default"]').prop('checked',false);
    }
  });

  $('.add_class .add_new_class_btn').on('click',function(){
      let newClassInputField =  $(this).parent().find('input').val();

      if(newClassInputField != ''){
      let animationType = $('.choose_animation').val();
      let eventType = $(this).parent().parent().parent().attr('class').replace('_settings','').replace('animation_','');
      let selectorType = $(this).parent().find('.selector_type').val();
      let action = null;
      let arrayOptions = [];
      let optionObject = {};
      let settingContainer = '';

  
      if($(this).closest('.animation_no_event_settings').size() == 1){
        action ='postAddClassNameNoEvent';

        settingContainer = $(this).closest('.animation_no_event_settings');
        settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });

        $(this).closest('.animation_no_event_settings').find('.options_con .optionProp').each(function(){
          let optionName = $(this).attr('name');
          let optionValue = $(this).val();
           optionObject = {
            optionName: optionName,
            optionValue: optionValue.replaceAll("'","`").replaceAll("\\","").replaceAll('"','')
          }
          arrayOptions.push(optionObject);
      });

      }

      if($(this).closest('.animation_click_event_settings').size() == 1){
        action ='postAddClassNameClickEvent';

        settingContainer = $(this).closest('.animation_click_event_settings');
        settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });

        $(this).closest('.animation_click_event_settings').find('.options_con .optionProp').each(function(){
          let optionName = $(this).attr('name');
          let optionValue = $(this).val();
           optionObject = {
            optionName: optionName,
            optionValue: optionValue
          }
          arrayOptions.push(optionObject);
      });

      }

      if($(this).closest('.animation_hover_event_settings').size() == 1){
        action ='postAddClassNameHoverEvent';

        settingContainer = $(this).closest('.animation_hover_event_settings');
        settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });

        $(this).closest('.animation_hover_event_settings').find('.options_con .optionProp').each(function(){
          let optionName = $(this).attr('name');
          let optionValue = $(this).val();
           optionObject = {
            optionName: optionName,
            optionValue: optionValue
          }
          arrayOptions.push(optionObject);
      });

      }

      let addClassObject = {
        action: action,
        data:{
          className: newClassInputField,
          animationType: animationType,
          selectorType:selectorType,
          eventType: eventType,
          animationProperties:arrayOptions,
          cache: false
        },
      }

      $.post('admin-ajax.php',addClassObject) 
      .done(function(response){
        if (response.success) {
          setTimeout(() => {
            settingContainer.find('.success_note').remove();
          }, 2000);
         settingContainer.find('.add_class').append('<span class="success_note" style="font-weight:bold;color:green;">Success</span>');
          $('.animation_' + eventType + '_settings'+ ' .select_class').append('<option>'+newClassInputField+'</option>');
          settingContainer.unblock();
        } else {
          setTimeout(() => {
          settingContainer.find('.failed_note').remove();
        }, 2000);
          settingContainer.find('.add_class').append('<span class="failed_note" style="font-weight:bold;color:red;">Failed</span>');
          settingContainer.unblock();
        }
      })
      .fail(function(){
        alert('An unexpected error occurred.');
        settingContainer.unblock();
      });
     }else{
      alert('Must enter class name or id');
     // settingContainer.unblock();
     }
  });


  $('.delete_class_btn').on('click',function(){
    let removeClassInputField =  $(this).parent().find('input').val();
    if(removeClassInputField != ''){
    let animationType = $('.choose_animation').val();
    let eventType = $(this).parent().parent().parent().attr('class').replace('_settings','').replace('animation_','');
    let action = null;
    let settingContainer = '';

    if($(this).closest('.animation_no_event_settings').size() == 1){
      action ='postDeleteClassNameNoEvent'; 
      settingContainer = $(this).closest('.animation_no_event_settings');
      settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });

    }

    if($(this).closest('.animation_click_event_settings').size() == 1){
      action ='postDeleteClassNameClickEvent';
      settingContainer = $(this).closest('.animation_click_event_settings');
      settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });
    }

    if($(this).closest('.animation_hover_event_settings').size() == 1){
      action ='postDeleteClassNameHoverEvent';
      settingContainer = $(this).closest('.animation_hover_event_settings');
      settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });
    }

    let removeClassObject = {
      action: action,
      data:{
        className: removeClassInputField,
        animationType: animationType,
        eventType: eventType,
        cache: false
      },
    }

    $.post('admin-ajax.php',removeClassObject) 
    .done(function(response){
      if (response.success) {
        console.log(response);
        let message = response.data.message;
        let errorColor = null;
        if(message == 'Success'){
          errorColor ='green';
        }else{
          errorColor ='#c8c213';
        }
        setTimeout(() => {
          settingContainer.find('.success_note').remove();
        }, 2000);
        settingContainer.find('.delete_class').append('<span class="success_note" style="font-weight:bold;color:'+errorColor+';">'+response.data.message+'</span>');
        settingContainer.unblock();
      } else {
        setTimeout(() => {
          settingContainer.find('.failed_note').remove();
        }, 2000);
        settingContainer.find('.delete_class').append('<span class="failed_note" style="font-weight:bold;color:red;">Failed</span>');
        settingContainer.unblock();
      }
    })
    .fail(function(){
      alert('An unexpected error occurred.');
      settingContainer.unblock();
    });
   }else{
    alert('Must enter class name or id');
    //settingContainer.unblock();
   }
});

//initAnimationNoEventSettingsSelect();

 function initAnimationNoEventSettingsSelect(){
  $('.animation_no_event_settings .select_class').empty().select2({
    ajax: {
      url: 'admin-ajax.php',
      data: function( params ) {
        return {
            term: params.term,
            eventType: $('.animation_no_event_settings').attr('class').replace('_settings','').replace('animation_',''),
            animationType: $('.choose_animation').val(),
            action: 'animationNoEventGetSelectors'
        };
    },
      processResults: function (data) {
        $('.update_class_btn').unblock();
        return {
          results: JSON.parse(data.data.results)
        };
      }
    },
});

$('.animation_click_event_settings .select_class').empty().select2({
  ajax: {
    url: 'admin-ajax.php',
    data: function( params ) {
      return {
          term: params.term,
          eventType: $('.animation_click_event_settings').attr('class').replace('_settings','').replace('animation_',''),
          animationType: $('.choose_animation').val(),
          action: 'animationClickEventGetSelectors'
      };
  },
    processResults: function (data) {
      console.log(data);
      $('.update_class_btn').unblock();
      return {
        results: JSON.parse(data.data.results)
      };
    }
  },
});

$('.animation_hover_event_settings .select_class').empty().select2({
  ajax: {
    url: 'admin-ajax.php',
    data: function( params ) {
      return {
          term: params.term,
          eventType: $('.animation_hover_event_settings').attr('class').replace('_settings','').replace('animation_',''),
          animationType: $('.choose_animation').val(),
          action: 'animationHoverEventGetSelectors'
      };
  },
    processResults: function (data) {
      $('.update_class_btn').unblock();
      return {
        results: JSON.parse(data.data.results)
      };
    }
  },
});

 }

  $('.animation_no_event_settings .select_class').on('select2:select', function(e){
    function splitLast(str, delimiter) {
      let lastIndex = str.lastIndexOf(delimiter);
      if (lastIndex === -1) return [str];
  
      return [str.slice(0, lastIndex), str.slice(lastIndex + 1)];
  }

    let className = splitLast($(this).val(),"|");
    let indexSelectCLass = className[1];
     let settingContainer = $(this).closest('.animation_no_event_settings');
    settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });
    let optionsInputs = $(this).closest('.animation_no_event_settings').find('.options_con .optionProp');
    console.log(optionsInputs);
    let animationProperties  = '';
       let obj ={
          url: 'admin-ajax.php',
          action: 'animationNoEventSelectSelectors',
          value: {
            className:className[0],
            eventType: 'no_event'
          },
        }
      $.post('admin-ajax.php',obj) 
      .done(function(response){
        console.log(response);
        animationProperties = response.data.animationProperties[indexSelectCLass][1];
       optionsInputs.each(function(index){
        if(animationProperties[index].optionValue == 'on'){
          $(this).attr('value',animationProperties[index].optionValue);
          $(this).prop('checked',true);
        }

        if(animationProperties[index].optionValue == 'off'){
          $(this).attr('value',animationProperties[index].optionValue);
          $(this).prop('checked',false);
        }
        $(this).val(animationProperties[index].optionValue);
       }); 
       settingContainer.unblock();
      })
      .fail(function(e){
        alert(e);
        settingContainer.unblock();
      });      
  });
  

  
  $('.animation_click_event_settings .select_class').on('select2:select', function(e){
    function splitLast(str, delimiter) {
      let lastIndex = str.lastIndexOf(delimiter);
      if (lastIndex === -1) return [str];
  
      return [str.slice(0, lastIndex), str.slice(lastIndex + 1)];
  }

    let className = splitLast($(this).val(),"|");
    let indexSelectCLass = className[1];
     let settingContainer = $(this).closest('.animation_click_event_settings');
    settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });
    let optionsInputs = $(this).closest('.animation_click_event_settings').find('.options_con .optionProp');
    let animationProperties  = '';
       let obj ={
          url: 'admin-ajax.php',
          action: 'animationClickEventSelectSelectors',
          value: {
            className:className[0],
            eventType: 'click_event'
          },
        }
      $.post('admin-ajax.php',obj) 
      .done(function(response){
        animationProperties = response.data.animationProperties[indexSelectCLass][1];
       optionsInputs.each(function(index){
        $(this).val(animationProperties[index].optionValue);
       }); 
       settingContainer.unblock();
      })
      .fail(function(e){
        alert(e);
        settingContainer.unblock();
      });      
  });


  $('.animation_hover_event_settings .select_class').on('select2:select', function(e){
    function splitLast(str, delimiter) {
      let lastIndex = str.lastIndexOf(delimiter);
      if (lastIndex === -1) return [str];
  
      return [str.slice(0, lastIndex), str.slice(lastIndex + 1)];
  }

    let className = splitLast($(this).val(),"|");
    let indexSelectCLass = className[1];
     let settingContainer = $(this).closest('.animation_hover_event_settings');
    settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });
    let optionsInputs = $(this).closest('.animation_hover_event_settings').find('.options_con .optionProp');
    let animationProperties  = '';
       let obj ={
          url: 'admin-ajax.php',
          action: 'animationHoverEventSelectSelectors',
          value: {
            className:className[0],
            eventType: 'hover_event'
          },
        }
      $.post('admin-ajax.php',obj) 
      .done(function(response){
        animationProperties = response.data.animationProperties[indexSelectCLass][1];
       optionsInputs.each(function(index){
        $(this).val(animationProperties[index].optionValue);
       }); 
       settingContainer.unblock();
      })
      .fail(function(e){
        alert(e);
        settingContainer.unblock();
      });      
  });

  $('.update_class_btn').on('click',function(){
       let selectorName =   $(this).parent().parent().parent().find('.select_class').val();

        function splitLast(str, delimiter) {
          let lastIndex = str.lastIndexOf(delimiter);
          if (lastIndex === -1) return [str];
      
          return [str.slice(0, lastIndex), str.slice(lastIndex + 1)];
      }
  
       let selectorNameArray = splitLast(selectorName,"|");

       if(selectorName != null){
       let animationType = $('.choose_animation').val();
       let eventType = $(this).parent().parent().parent().attr('class').replace('_settings','').replace('animation_','');
       let arrayOptions = [];
       let action = null;
       let settingContainer = '';
  
       if($(this).closest('.animation_no_event_settings').size() == 1){
        settingContainer = $(this).closest('.animation_no_event_settings');
        settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });
        action ='postUpdateClassNameNoEvent';
        
        $(this).closest('.animation_no_event_settings').find('.options_con .optionProp').each(function(){
          let optionName = $(this).attr('name');
          let optionValue = $(this).val();
           optionObject = {
            optionName: optionName,
            optionValue: optionValue.replaceAll("'","`").replaceAll("\\","").replaceAll('"','')
          }
          arrayOptions.push(optionObject);
      });

      }

      if($(this).closest('.animation_click_event_settings').size() == 1){
        action ='postUpdateClassNameClickEvent';

        settingContainer = $(this).closest('.animation_click_event_settings');
        settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });

        $(this).closest('.animation_click_event_settings').find('.options_con .optionProp').each(function(){
          let optionName = $(this).attr('name');
          let optionValue = $(this).val();
           optionObject = {
            optionName: optionName,
            optionValue: optionValue
          }
          arrayOptions.push(optionObject);
      });

      }

      if($(this).closest('.animation_hover_event_settings').size() == 1){

        settingContainer = $(this).closest('.animation_hover_event_settings');
        settingContainer.block({  message: null ,css: { backgroundColor: '#0000002e'} });

        action ='postUpdateClassNameHoverEvent';

        $(this).closest('.animation_hover_event_settings').find('.options_con .optionProp').each(function(){
          let optionName = $(this).attr('name');
          let optionValue = $(this).val();
           optionObject = {
            optionName: optionName,
            optionValue: optionValue
          }
          arrayOptions.push(optionObject);
      });
    }
       let updateClassObject = {
         action: action,
         data:{
           selectorName: selectorNameArray[0],
           animationType: animationType,
           eventType: eventType,
           animationProperties:arrayOptions,
           cache: false
         },
       }
   
       $.post('admin-ajax.php',updateClassObject) 
       .done(function(response){
         if (response.success) {
          console.log(response);
          setTimeout(() => {
            settingContainer.find('.success_note').remove();
          }, 2000);
          settingContainer.find('.select_con').append('<span class="success_note" style="font-weight:bold;color:green;">Success</span>');
          settingContainer.unblock();
         } else {
          setTimeout(() => {
          settingContainer.find('.failed_note').remove();
        }, 2000);
          settingContainer.find('.select_con').append('<span class="failed_note" style="font-weight:bold;color:red;">Failed</span>');
           settingContainer.unblock();
         }
       })
       .fail(function(){
         alert('An unexpected error occurred.');
         settingContainer.unblock();
       });
      }else{
       alert('Must enter class name or id');
      }
    });
});