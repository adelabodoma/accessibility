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
* 
*/
var UI = (function () {

   // All DOM selector
   var DOMStrings =
   {
      fontIncrease: '.accessability__href--increase',
      fontDecrease: '.accessability__href--decrease',
   };


   return {
      getDomStrings: function () {
         return DOMStrings;
      }
   }

})();

(function (UI) {

   "use strict";

   function Accessibility(options) {

      return new Accessibility(options);
   }

   /**
    * init the function with passed params.
    * @public
    */
   Accessibility.init = function (options) {

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


      // Fire events
      setupEventListener();
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
          * increase the count if type increase else decrease
          * @var {fontCount}
          */
         // type == "increase" ?  (fontCount < fontSize.length ? fontCount++ : fontCount) : fontCount--;

         /**
         * increase the index and the count if type increase else decrease
         * @var {fontIndex}
         */
         // type == "increase" ? (fontIndex < fontSize.length ? fontIndex++ : fontIndex) : fontIndex--;
         type == "increase" ? fontIndex++ : fontIndex--;

         // fontIndex < 0 ? fontIndex = 0 : fontIndex = fontIndex;
         // fontCount < 0 ? fontCount = 0 : fontCount = fontCount;

         if (fontIndex > fontSize.length) {
            fontIndex = fontSize.length - 1;
         }else if (fontIndex < 0) {
            fontIndex = 0;
         }

         // html render 
         document.querySelector('html')
            .style.fontSize = fontSize[fontIndex];



      } else if (typeof fontSize === 'string') { // if the font size is just one size 
         document.querySelector('html').style.fontSize = fontSize;
      }
   }

   var linkHighlight = function (style) {
      document.querySelector('head').appendChild(style);
   }

   var headingHighlight = function (style) {
      document.querySelector('head').appendChild(style);
   }

   var readableFont = function () {

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
      for (const key in defaultOptions) {
         if (!options.hasOwnProperty(key)) {
            options[key] = defaultOptions[key];
         }
      }
      // return new object by merge to objects
      return options;
   }


   // SETUP EVENT LISTENER
   var setupEventListener = function () {
      // GET DOM SELECTOR
      var selector = UI.getDomStrings();

      // FONT RESIZE EVENT
      document.querySelector(selector.fontIncrease).addEventListener('click', fontResize.bind(null, Accessibility.options.fontSize, 'increase'));
      document.querySelector(selector.fontDecrease).addEventListener('click', fontResize.bind(null, Accessibility.options.fontSize, 'decrease'));
   }

   // define the tool in global level at window object
   // so we can access the tool direct from window 
   // define $accessability as reference name for the tool

   window.accessibility = Accessibility;


   // return accessability tool
   // @return 

   return accessibility;


})(UI);


document.querySelector('.accessability__link').addEventListener('click', function () {


   document.querySelector('.accessability__main').classList.toggle('rightPosition');
   document.querySelector('.accessability__link').classList.toggle('rightPosition-link');

})