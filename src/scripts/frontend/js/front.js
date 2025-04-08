jQuery(function($){
localStorage.removeItem('objAnimClick');
    function initAnimation(selectorType,selector){
        if(selector.animationType == 'Object Move Point X To Y'){
            anime({
                    targets: selectorType + selector.className,
                    translateX: selector.animationProperties[0].optionValue,
                    translateY: selector.animationProperties[1].optionValue,
               });
        }

        if(selector.animationType == 'Object Move Point X To Y Delay'){
            anime({
                    targets: selectorType + selector.className,
                    translateX: selector.animationProperties[0].optionValue,
                    translateY: selector.animationProperties[1].optionValue,
                    delay: selector.animationProperties[2].optionValue,
               });
        }

        if(selector.animationType == 'Counter'){
            anime({
                    targets: selectorType + selector.className,
                    value: [selector.animationProperties[0].optionValue, selector.animationProperties[1].optionValue],
                    round: selector.animationProperties[2].optionValue,
                    easing: 'easeInOutExpo'
               });
        }

        if(selector.animationType  == 'Transformation 1'){
            animation = anime({
            targets:  selectorType + selector.className,
            borderRadius:selector.animationProperties[0].optionValue,
          });
     }

     if(selector.animationType  == 'Transformation 2'){
        animation = anime({
            targets:  selectorType + selector.className,
            scale: selector.animationProperties[0].optionValue,
            rotate: '1turn'
      });
    }

    if(selector.animationType == 'Transformation 3 SVG'){
        animation = anime({
            targets: [selectorType + selector.className + ' polygon', 'feTurbulence', 'feDisplacementMap'],
                points: selector.animationProperties[0].optionValue,
                baseFrequency: 1,
                scale: selector.animationProperties[1].optionValue,
                loop: true,
                direction: 'alternate',
              easing: 'easeInOutExpo'
      });
    }
    
    if(selector.animationType == 'Alternate'){
        anime({
            targets: selectorType + selector.className,
            translateX: selector.animationProperties[0].optionValue,
            translateX: selector.animationProperties[1].optionValue,
            direction: 'alternate',
            easing: 'linear'
          });
    }

    if(selector.animationType  == 'Element Grows'){
        anime({
            targets: selectorType + selector.className,
            width: [selector.animationProperties[0].optionValue, selector.animationProperties[1].optionValue],
            easing: 'easeInOutQuad',
            direction: 'alternate',
          });
    }

    if(selector.animationType  == 'Ease in Out Color'){
        anime.timeline({
          endDelay: selector.animationProperties[0].optionValue,
          easing: 'easeInOutQuad',
          direction: 'alternate',
        })
        .add({ targets: selectorType + selector.className,  background: selector.animationProperties[1].optionValue }, 0)
  }

    if(selector.animationType  == 'Ease Out Elastic'){
        anime({
            targets:  selectorType + selector.className,
            keyframes: [
            {translateY: selector.animationProperties[0].optionValue},
            {translateX:selector.animationProperties[1].optionValue},
            {translateY: selector.animationProperties[2].optionValue},
            {translateX: selector.animationProperties[3].optionValue},
            {translateY: selector.animationProperties[4].optionValue}
            ],
            duration: selector.animationProperties[5].optionValue,
            easing: 'easeOutElastic(1, .8)',
        });
     }

     if(selector.animationType == 'Ease Out Elastic 2'){
        if(selector.animationProperties[0].optionValue == 'on'){
        anime({
            targets: selectorType + selector.className,
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
      if(selector.animationProperties[1].optionValue == 'on'){
        let transform = selector.animationProperties[2].optionValue;
        transform = `{ ${transform} }`;
        let animationProps = (new Function('return ' + transform))();
        
        anime({
            targets: selectorType + selector.className,
            ...animationProps
       });

      }
    }

      if(selector.animationType == 'Ease Out Quad Rotate'){
        anime({
            targets: selectorType + selector.className,
            translateX: selector.animationProperties[0].optionValue,
            translateY: selector.animationProperties[1].optionValue,
            direction: 'alternate',
            rotate: selector.animationProperties[2].optionValue,
            easing: 'easeInOutQuad'
          });
    }

    if(selector.animationType == 'Steps'){
        anime({
            targets: selectorType + selector.className,
            translateX: selector.animationProperties[0].optionValue,
            translateY: selector.animationProperties[1].optionValue,
            direction: 'alternate',
            easing: 'steps('+selector.animationProperties[2].optionValue+')',
          });
    }
    
  if(selector.animationType  == 'X To Y And Y To X Scale Color'){
    if(selector.animationProperties[0].optionValue == 'on'){
    var finishedLogEl = document.querySelector('.promise-demo .finished-log');
    var promiseEl =  selectorType + selector.className;
    function logFinished() {
      anime.set(finishedLogEl, {value: 'Promise resolved'});
      anime.set(promiseEl, {backgroundColor: selector.animationProperties[3]});
    }
    
    var animation = anime.timeline({
      targets:promiseEl,
      delay: selector.animationProperties[4].optionValue,
      endDelay:selector.animationProperties[5].optionValue,
      duration: selector.animationProperties[6].optionValue,
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
if(selector.animationProperties[1].optionValue == 'on'){
    var finishedLogEl = document.querySelector('.promise-demo .finished-log');
    var promiseEl =  selectorType + selector.className;

    function logFinished() {
        anime.set(finishedLogEl, {value: 'Promise resolved'});
        anime.set(promiseEl, {backgroundColor: selector.animationProperties[3].optionValue});
      }

    const transform =  selector.animationProperties[2].optionValue;

    var animation = anime.timeline({
        targets:promiseEl,
        delay: selector.animationProperties[4].optionValue,
        endDelay:selector.animationProperties[5].optionValue,
        duration: selector.animationProperties[6].optionValue,
        easing: 'easeInOutSine',
    });
    
    (new Function('timeline', 'timeline' + transform))(animation);
    
    animation.finished.then(logFinished); 
   }
  }
}

 //no event

    let objNoEvents ={
       action: 'getNoEventsAnimationProperties',
       dataType:'json'
     }

   $.get('/wp-admin/admin-ajax.php',objNoEvents,function(response){
        let getResults = response.data.results;
        getResults.forEach(selector => {
            let selectorType = null;
            if(selector.selectorType == 'class'){
              selectorType = '.';
            }else if(selector.selectorType == 'id'){
              selectorType = '#';
            }
            initAnimation(selectorType,selector);         
     });
   });

   //click event

   let obClickEvents ={
    action: 'getClickEventsAnimationProperties',
    dataType:'json'
  }

    $.get('/wp-admin/admin-ajax.php',obClickEvents,function(response){
        let getClickResults = response.data.results;
        getClickResults.forEach(selector => {
            let selectorType = null;
            if(selector.selectorType == 'class'){
              selectorType = '.';
            }else if(selector.selectorType == 'id'){
              selectorType = '#';
            }
            $(selectorType + selector.className).attr('data-anim-deluxe',true);
            $(selectorType + selector.className).attr('data-anim-deluxe-eventType',selector.eventType);
            $(selectorType + selector.className).attr('data-anim-deluxe-selector',selector.selectorType);

        localStorage.setItem('objAnimClick',JSON.stringify(getClickResults));
     }); 
    });

    function clickElementAnimation(selector){
        let getClickAnimationnObject = JSON.parse(localStorage.getItem('objAnimClick'));
        getClickAnimationnObject.forEach(e => {
            let selectorType = null;
            if(e.selectorType == 'class'){
              selectorType = '.';
            }else if(e.selectorType == 'id'){
              selectorType = '#';
            }
            if(selector.indexOf(e.className) >= 0){
                 initAnimation(selectorType,e);
            }
        });
    }

    $('*').on('click',function(){
        if($(this).attr('data-anim-deluxe') == 'true' && $(this).attr('data-anim-deluxe-eventtype') == 'click_event') {
            if($(this).attr('data-anim-deluxe-selector') == 'class'){
                clickElementAnimation($(this).attr('class'));
            }else{
                clickElementAnimation($(this).attr('id'));
            }
            
        }
        return false;
    });

    //hover event

    let obHoverEvents ={
        action: 'getHoverEventsAnimationProperties',
        dataType:'json'
      }
    
        $.get('/wp-admin/admin-ajax.php',obHoverEvents,function(response){
            let getHoverResults = response.data.results;
            getHoverResults.forEach(selector => {
                let selectorType = null;
                if(selector.selectorType == 'class'){
                  selectorType = '.';
                }else if(selector.selectorType == 'id'){
                  selectorType = '#';
                }
                $(selectorType + selector.className).attr('data-anim-deluxe',true);
                $(selectorType + selector.className).attr('data-anim-deluxe-eventType',selector.eventType);
                $(selectorType + selector.className).attr('data-anim-deluxe-selector',selector.selectorType);
    
            localStorage.setItem('objAnimHover',JSON.stringify(getHoverResults));
         }); 
        });
    

    function hoverElementAnimation(selector){
        let getHoverAnimationnObject = JSON.parse(localStorage.getItem('objAnimHover'));
        getHoverAnimationnObject.forEach(e => {
            let selectorType = null;
            if(e.selectorType == 'class'){
              selectorType = '.';
            }else if(e.selectorType == 'id'){
              selectorType = '#';
            }
            if(selector.indexOf(e.className) >= 0){
                 initAnimation(selectorType,e);
            }
        });
    }

    $('*').on('mouseenter',function(){
        if($(this).attr('data-anim-deluxe') == 'true' && $(this).attr('data-anim-deluxe-eventtype') == 'hover_event') {
            if($(this).attr('data-anim-deluxe-selector') == 'class'){
                hoverElementAnimation($(this).attr('class'));
            }else{
                hoverElementAnimation($(this).attr('id'));
            }
            
        }
        return false;
    });
});