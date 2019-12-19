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
   var DOMStrings;

   DOMStrings = {
      body: 'body',
      head: 'head',
      html: 'html',
      fontIncrease: '.accessability__href--increase',
      fontDecrease: '.accessability__href--decrease',

      accessability__link: '.accessability__link',
      accessability__main: '.accessability__main',

      fontUnderLine: '.accessability__href--underLine',
      fontReadable: '.accessability__href--font-readable',
      highContrast: '.accessability__href--high-contrast',
      negativeContrast: '.accessability__href--negative-contrast',
      reset: '.accessability__href--reset',

      // HELPERS CSS CLASSES
      underLineClass: 'ACC__UNDERLINECLASS',
      nigativeContrastClass: 'ACC__NIGATIVECONTRAST',
      highContrastClass: 'ACC__HIGHCONTRAST',
      fontReadableClass: 'ACC__FONTREADABLE'

   };


   return {
      getDomStrings: function () {
         return DOMStrings;
      },
      htmlRender: function (selector, cb) {
         var htmlTemplate;
         htmlTemplate = '<nav class="accessability"> <div class="accessability__link"> <svg class="accessability__link--icon"> <use xlink:href="sprite.svg#icon-accessibility"></use> </svg> </div> <div class="accessability__main"> <h2 class="accessability__title"> Accessibility Tools </h2> <ul class="accessability__items"> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--increase"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-zoom-in"></use> </svg> <span class="accessability--text">Increase Text</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--decrease"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-zoom-out"></use> </svg> <span class="accessability--text">Decrease Text</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--high-contrast"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-contrast"></use> </svg> <span class="accessability--text">High Contrast</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--negative-contrast"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-eye"></use> </svg> <span class="accessability--text">Negative Contrast</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--underLine"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-link"></use> </svg> <span class="accessability--text">Links Underline</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--font-readable"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-text-color"></use> </svg> <span class="accessability--text">Readable Font</span> </a> </li> <li class="accessability__item"> <a href="#" class="accessability__href accessability__href--reset"> <svg class="accessability--icon"> <use xlink:href="sprite.svg#icon-reload"></use> </svg> <span class="accessability--text">Reset</span> </a> </li> </ul> </div> </nav>';
         document.querySelector(selector).innerHTML = htmlTemplate;
         cb();
      }
   }

})();

var controller = (function (UI) {

   "use strict";

   function Accessibility() {

      // return new Accessibility(selector, options);
   }

   // ADD VERSION 
   Accessibility.version = '1.0.0';

   /**
   * Default options for the accessability.
   * @public
   */
   Accessibility.options = {
      fontSize: '100%',
      readableFont: '',
      headingHighlight: false,
      linkHighlight: false,

      zooming: false,
      letterSpacing: false,
      wordSpacing: false,
      increaseCursor: false
   }

   // GET DOM SELECTOR
   var DOMselector = UI.getDomStrings();


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

   // current font index
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
          */
         if (fontIndex > fontSize.length) {
            fontIndex = fontSize.length - 1;
         } else if (fontIndex < 0) {
            /**
             * check if index counter less than 0 ex. -1 
             * font index will be first index ex. 0
             */
            fontIndex = 0;
         }

         // html render 
         document.querySelector(DOMselector.html).style.fontSize = fontSize[fontIndex];

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
            document.querySelector(DOMselector.html).style.fontSize = fontSize;

         } else {
            /**
             * 
             * @HTML render
             */
            document.querySelector(DOMselector.html).style.fontSize = '100%';
         }
      }
   }

   var linkUnderline = function (style) {
      document.querySelector(DOMselector.body).classList.toggle(DOMselector.underLineClass);
   }

   var headingHighlight = function (style) {
      document.querySelector('head').appendChild(style);
   }

   var readableFont = function () {
      document.querySelector(DOMselector.body).style.fontFamily = Accessibility.options.readableFont
   }

   var readSpeaker = function () {

   }

   var increaseCursor = function () {

   }

   var negativeContrast = function () {
      document.querySelector(DOMselector.body).classList.toggle(DOMselector.nigativeContrastClass);
   }

   var highContrast = function () {
      document.querySelector(DOMselector.body).classList.toggle(DOMselector.highContrastClass);
   }

   var reset = function () {
      // REMOVE CLASSES FROM 
      // var classes =  '"'+     DOMselector.highContrastClass + '", ' + 
      //               '"' + DOMselector.nigativeContrastClass + '", ' +
      //               '"' + DOMselector.underLineClass + '", ' +
      //               '"' + DOMselector.fontReadableClass + '"'
      //               classes = classes.replace(/\./g,'')

                   
      document.querySelector(DOMselector.body).className = ''

      // RESET FONT SIZE
      document.querySelector(DOMselector.html).removeAttribute('style')
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
      document.querySelector(DOMselector.fontIncrease).addEventListener('click', fontResize.bind(null, Accessibility.options.fontSize, 'increase'));
      document.querySelector(DOMselector.fontDecrease).addEventListener('click', fontResize.bind(null, Accessibility.options.fontSize, 'decrease'));

      // LINK UNDERLINE
      document.querySelector(DOMselector.fontUnderLine).addEventListener('click', linkUnderline);

      // FONT READABLE
      document.querySelector(DOMselector.fontReadable).addEventListener('click', readableFont);


      // NEGATIVE CONTRAST
      document.querySelector(DOMselector.negativeContrast).addEventListener('click', negativeContrast);

      // HIGH CONTRAST
      document.querySelector(DOMselector.highContrast).addEventListener('click', highContrast);

      // RESET
      document.querySelector(DOMselector.reset).addEventListener('click', reset);

      // MENU TOGGLE FUNCTION
      document.querySelector(DOMselector.accessability__link).addEventListener('click', function () {
         document.querySelector(DOMselector.accessability__main).classList.toggle('rightPosition');
         this.classList.toggle('rightPosition-link');
      })
   }

   // RENDER THE HTML TEMPLATE FOR ACCESSABILITY TOOL
   var setupHtmlRender = function (selector) {
      UI.htmlRender(selector, function () {
         // Fire events
         setupEventListener();
      })
   }

   // setupEventListener();


   // define the tool in global level at window object
   // so we can access the tool direct from window 
   // define $accessability as reference name for the tool

   window.accessibility = Accessibility;


   // return accessability tool
   // @return 

   return {
      /**
      * init the function with passed params.
      * @public
      */
      init: function (selector, options) {
         var ele, options;
         ele = document.querySelector(selector);

         // Check if the selector exist in the DOM
         if (!ele) {
            throw Error('Invalid Selector');
         }

         /**
         * Current options set by the caller including defaults.
         * @public;
         */
         options = options;
         if (typeof options !== "object") {
            throw Error('Invalid Options! Options must be an object');
         }
         Accessibility.options = extendObject(Accessibility.options, options);

         // Render HTML Template
         setupHtmlRender(selector);
      }
   };


})(UI);


controller.init('#app', {
   fontSize: '20px',
   readableFont: 'fantasy'
})