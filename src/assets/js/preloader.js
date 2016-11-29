(function (global) {
      var counter = 0, timeout;
      var fakewidthglobal = 0;
      var preloader = document.querySelector('.preloader');
      var progressBar = document.querySelector('.preloader-progress-bar');
      var body = document.querySelector('body');
      // disables scrollbar
      body.style.overflow = 'hidden';
      timeout = setTimeout(startCounter, 0);
      // main.ts call this function once the app is boostrapped
      global.appBootstrap = function () {
          setTimeout(endCounter, 1500);
      };
      function startCounter() {
     
          var remaining = 100 - counter;
 
          counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));
          progressBar.style.width = Math.round(counter) + '%';
          timeout = setTimeout(startCounter, 5);
      }
      function faketime( _callback ){
    
        progressBar.style.width = Math.round(fakewidthglobal) + '%';
        fakewidthglobal += 5;
        var condexit = fakewidthglobal >= 100;
        if ( condexit ){
             progressBar.style.width = "100%";
             _callback();
        }
        if ( !condexit ){
             setTimeout( function(){
                faketime( _callback );
            }, 35);
        }
      }

      function endCounter() {
          clearTimeout(timeout);
          fakewidthglobal = parseInt(  progressBar.style.width );
          faketime(  function(){
               setTimeout(function () {
                    // animate preloader hiding
                    removePreloader();
                    // retore scrollbar
                    body.style.overflow = '';
                }, 300);
          });
      }
      function removePreloader() {
          preloader.addEventListener('transitionend', function () {
              preloader.className = 'preloader-hidden';
          });
          preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
      }
      
  })(window);