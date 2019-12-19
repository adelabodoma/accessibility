/*
 * Accessability JavaScript Library v1.0.0
 * LINK DEVELOPMENT CO.
 * Date: 2019-12-18T21:04Z
 * Author: Adel Sadek - Front-end developer at link dev.
 */


/**
* HANDEL UI TASKS
* RENDER THE HTML
* CONTROL HIDE AND SHOW ELEMENT
*/
var UI = (function () {

   // All DOM selector
   var DOMStrings =
   {
      fontIncrease: '.accessability__href--increase',
      fontDecrease: '.accessability__href--decrease',

      accessability__link: '.accessability__link',
      accessability__main: '.accessability__main',

      accessability__underLine: '.accessability__href--underLine',
      accessability__fontReadable: '.accessability__href--font-readable',

      // HELPERS CSS CLASSES
      underLineClass: 'ACC__underlineClass'

   };

   var htmlTemplate = '<nav class="accessability"> <div class="accessability__link"> <svg class="accessability__link--icon"> <use xlink:href="sprite.svg#icon-accessibility"></use> </svg> </div> <div class="accessability__main"> <h2 class="accessability__title"> Accessibility Tools </h2> <ul class="accessability__items"> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--increase"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-zoom-in"></use> </svg> <span class="accessability--text">Increase Text</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--decrease"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-zoom-out"></use> </svg> <span class="accessability--text">Decrease Text</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-contrast"></use> </svg> <span class="accessability--text">High Contrast</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-eye"></use> </svg> <span class="accessability--text">Negative Contrast</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-link"></use> </svg> <span class="accessability--text">Links Underline</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-text-color"></use> </svg> <span class="accessability--text">Readable Font</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-reload"></use> </svg> <span class="accessability--text">Reset</span> </a> </li> </ul> </div> </nav>';

   var htmlRender = function (selector, cb) {
      document.querySelector(selector).innerHTML = htmlTemplate;
      cb();
   }

   return {
      getDomStrings: function () {
         return DOMStrings;
      },
      htmlRender: htmlRender
   }

})();

(function (UI) {

   "use strict";

   function Accessibility(selector, options) {

      return new Accessibility(selector, options);
   }

   /**
    * init the function with passed params.
    * @public
    */
   Accessibility.init = function (selector, options) {

      // HTML ELEMENT
      // var ele = document.querySelector(selector);

      // Check if the selector exist in the DOM
      // if (!ele) {
      //    throw Error('Invalid Selector');
      // }

      /**
      * Current options set by the caller including defaults.
      * @public
      */
      Accessibility.options = extendObject(Accessibility.options, options);




      // Render HTML Template
      // setupHtmlRender(selector);
   }

   // ADD VERSION 
   Accessibility.version = '1.0.0';

   /**
* Default options for the accessability.
* @public
*/
   Accessibility.options = {
      fontSize: '100%',
      headingHighlight: false,
      linkHighlight: false,

      zooming: false,
      letterSpacing: false,
      wordSpacing: false,
      increaseCursor: false
   }

   // GET DOM SELECTOR
   var selector = UI.getDomStrings();


   /** Functionalities
 
   •	Highlight Links
   •	Highlight Heading 
   •	Font resize 
   •	Readable font
   •	Zooming
   •	Increase Spacing 
   •	Reader Guide 
   •	Read Speaker 
   •	Increase cursor
   •	Reset 
   */

   // current font size count
   var fontCount = 0;
   var fontIndex = 0;
   var fontResize = function (size, type) {
      // font size ['2rem', ['3rem']]
      var fontSize = size;

      // check if size is an array not single size
      if (typeof fontSize === 'object' && Array.isArray(fontSize)) {

         /**
         * increase the index and the count if type increase else decrease
         * @var {fontIndex}
         */
         type == "increase" ? fontIndex++ : fontIndex--;

         /**
          * check  if @counter more than the array itself
          * 
          */
         if (fontIndex > fontSize.length) {
            /**
             * if the index @counter more than the array length. 
             * font index will be the array length minus one 
             */

            fontIndex = fontSize.length - 1;

         } else if (fontIndex < 0) {
            /**
             * check if index counter less than 0 ex. -1 
             * font index will be first index ex. 0
             */
            fontIndex = 0;
         }

         // html render 
         document.querySelector('html')
            .style.fontSize = fontSize[fontIndex];



      } else if (typeof fontSize === 'string') { // if the font size is just one size 
         /**
          * check if the user pass a one value so we have to ways
          * @first type === increase
          * otherwise the type will be decrease
          */
         if (type === 'increase') {
            /**
             * 
             * @HTML render
             */
            document.querySelector('html').style.fontSize = fontSize;

         } else {
            /**
             * 
             * @HTML render
             */
            document.querySelector('html').style.fontSize = '100%';
         }
      }
   }

   var linkUnderline = function (style) {
      // var links  = Array.from(document.querySelectorAll('a'));
      // for (var i = 0; i < links.length; i++) {
      //    var element = links[i];
      //    element.style.textDecoration = 'underline';

      // }

      document.querySelector('body').classList.toggle(selector.underLineClass);
   }

   var headingHighlight = function (style) {
      document.querySelector('head').appendChild(style);
   }

   var readableFont = function () {
      document.querySelector('body').classList.toggle('ACC__fontReadable');

   }

   var readSpeaker = function () {

   }

   var increaseCursor = function () {

   }

   var reset = function () {

   }

   /// HELPERS FUNCTIONS

   // =>  extend object by merge them 
   var extendObject = function (defaultOptions, options) {
      for (var key in defaultOptions) {
         if (!options.hasOwnProperty(key)) {
            options[key] = defaultOptions[key];
         }
      }
      // return new object by merge to objects
      return options;
   }


   // SETUP EVENT LISTENER
   var setupEventListener = function () {
      // FONT RESIZE EVENT
      document.querySelector(selector.fontIncrease).addEventListener('click', fontResize.bind(null, Accessibility.options.fontSize, 'increase'));
      document.querySelector(selector.fontDecrease).addEventListener('click', fontResize.bind(null, Accessibility.options.fontSize, 'decrease'));

      // LINK UNDERLINE
      document.querySelector(selector.accessability__underLine).addEventListener('click', linkUnderline);

      // FONT READABLE
      document.querySelector(selector.accessability__fontReadable).addEventListener('click', readableFont);


      // MENU TOGGLE FUNCTION
      document.querySelector(selector.accessability__link).addEventListener('click', function () {
         document.querySelector(selector.accessability__main).classList.toggle('rightPosition');
         this.classList.toggle('rightPosition-link');
      })
   }

   // RENDER THE HTML TEMPLATE FOR ACCESSABILITY TOOL
   var setupHtmlRender = function (selector) {
      UI.htmlRender(selector, function () {
         debugger
         // Fire events
         setupEventListener();
      })
   }

   setupEventListener();


   // define the tool in global level at window object
   // so we can access the tool direct from window 
   // define $accessability as reference name for the tool

   window.accessibility = Accessibility;


   // return accessability tool
   // @return 

   return accessibility;


})(UI);


accessibility.init('#accessability', {
   fontSize: '10rem'
})