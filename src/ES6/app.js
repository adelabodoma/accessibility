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


import UI from './ui';
import settings from './settings';
import Drag from './drag';

class App {

  /**
   * @public Version
   */
  version = '1.0.0';

  /**
  * Default options for the accessability.
  * @public
  */

  options = settings;


  // GET DOM SELECTOR
  DOMSelector = UI.getDomStrings();

  // SETUP EVENT LISTENER
  setupEventListener() {

    if (this.options.fontSize) {
      // FONT RESIZE EVENT
      this.on(_$(this.DOMSelector.fontIncrease), 'click', fontResize.bind(null, this.options.fontSize, 'increase'))
      this.on(_$(this.DOMSelector.fontDecrease), 'click', fontResize.bind(null, this.options.fontSize, 'decrease'))
    }

    // LINK UNDERLINE
    if (this.options.linkUnderLine) {
      this.on(_$(this.DOMSelector.fontUnderLine), 'click', linkUnderline);
    }

    // FONT READABLE
    if (this.options.fontReadable) {
      this.on(_$(this.DOMSelector.fontReadable), 'click', readableFont);
    }


    // NEGATIVE CONTRAST
    if (this.options.negativeContrast) {
      this.on(_$(this.DOMSelector.negativeContrast), 'click', negativeContrast);
    }

    // HIGH CONTRAST
    if (this.options.highContrast) {
      this.on(_$(this.DOMSelector.highContrast), 'click', highContrast);
    }

    // READ GUIDE LINE
    if (this.options.readGuide) {
      this.on(_$(this.DOMSelector.readGuide), 'click', readGuide);
    }

    // HIGHT LIGHT LINKS
    if (this.options.highLightLinks) {
      this.on(_$(this.DOMSelector.highLightLinks), 'click', highLightLinks);
    }

    // LETTER SPACING
    if (this.options.letterSpacing) {
      this.on(_$(this.DOMSelector.letterSpacing), 'click', letterSpacing);
    }

    // WORD SPACING
    if (this.options.wordSpacing) {
      this.on(_$(this.DOMSelector.wordSpacing), 'click', wordSpacing);
    }
    // RESET
    _$(this.DOMSelector.reset).addEventListener('click', reset);

    // MENU TOGGLE FUNCTION
    _$(this.DOMSelector.accessability__link).addEventListener('click', function () {
      _$(this.DOMSelector.accessability__main).classList.toggle('rightPosition');
      this.classList.toggle('rightPosition-link');
    });







    /////////////////////////////////////////////////////////
    ///////////////////////////// DRAG AND DROP
    if (this.options.drag) {
      new Drag();
    }
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




  /**
   * Attaches to an internal event.
   * @protected
   * @param {string} size - The font size.
   * @variable {number} fontIndex - to handle toggle between font sizes
   */
  fontIndex = 0;
  fontResize(size, type) {
    var fontSize;

    fontSize = size;

    // check if size is an array not single size
    if (typeof fontSize === 'object' && Array.isArray(fontSize)) {

      /**
      * increase the index and the count if type increase else decrease
      * @var {fontIndex}
      */
      type == "increase" ? this.fontIndex++ : this.fontIndex--;

      /**
       * check  if @counter more than the array itself
       */
      if (this.fontIndex > fontSize.length) {
        this.fontIndex = fontSize.length - 1;
      } else if (this.fontIndex < 0) {
        /**
         * check if index counter less than 0 ex. -1
         * font index will be first index ex. 0
         */
        this.fontIndex = 0;
      }

      // html render
      _$(this.DOMSelector.html).style.fontSize = fontSize[this.fontIndex];

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
        _$(this.DOMSelector.html).style.fontSize = fontSize;

      } else {
        /**
         *
         * @HTML render
         */
        _$(this.DOMSelector.html).style.fontSize = '100%';
      }
    }
  }

  linkUnderline(e) {
    e.preventDefault();

    _$(this.DOMSelector.body).classList.toggle(this.DOMSelector.underLineClass);
  }

  headingHighlight(style) {
    _$('head').appendChild(style);
  }


  highLightLinks(e) {
    e.preventDefault();

    _$('body').classList.toggle(DOMStrings.highLightLinksClass);
  }


  readableFont(e) {
    e.preventDefault();

    _$(this.DOMSelector.body).classList.toggle(DOMStrings.fontReadableClass)
  }

  readGuide(e) {
    e.preventDefault();

    _$(DOMStrings.readGuideClass).classList.toggle('show');
    window.onmousemove = function (e) {
      _$(this.DOMSelector.readGuideClass).style.top = e.y + 'px';
    }
  }

  increaseCursor() {

  }

  negativeContrast(e) {
    e.preventDefault();

    _$(this.DOMSelector.body).classList.toggle(this.DOMSelector.negativeContrastClass);
  }

  highContrast(e) {
    e.preventDefault();

    _$(this.DOMSelector.body).classList.toggle(this.DOMSelector.highContrastClass);
  }

  letterSpacing(e) {
    e.preventDefault();

    _$(this.DOMSelector.body).classList.toggle(this.DOMSelector.letterSpacingClass);
  }

  wordSpacing(e) {
    e.preventDefault();

    _$(this.DOMSelector.body).classList.toggle(this.DOMSelector.wordSpacingClass);
  }

  reset(e) {
    e.preventDefault();

    Array.from(_$(this.DOMSelector.body).classList).forEach((ele) => {
      if (ele.indexOf('ACC__') > -1) {
        _$(this.DOMSelector.body).classList.remove(ele);
      }
    });
    _$(DOMStrings.html).style.fontSize = ACC.prototype.options.fontSize[0];
  }


  // RENDER THE HTML TEMPLATE FOR ACCESSABILITY TOOL
  initialize(selector) {
    UI.htmlRender(selector, this.options);

    this.setupEventListener();
  }


  /**
  * init the function with passed params.
  * @public
  */
  init(selector, options) {
    var ele, options, elem, defaultSize
    ele = _$(selector);

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

    if (typeof options.fontSize !== "object" && !Array.isArray(options.fontSize)) {
      throw Error('Invalid FontSize! FontSize must be an Array');
    }
    this.options = extendObject(this.options, options);
    /**
     *  GET DEFAULT FONT SIZE TO RESET IN CASE NON SIZES
     */
    elem = _$("html");
    defaultSize = window.getComputedStyle(elem, null).getPropertyValue("font-size");

    /**
     * APPEND DEFAULT SIZE TO SIZE ARRAY
     */
    this.options.fontSize.unshift(defaultSize);

    // Render HTML Template
    this.initialize(selector);
  }

  //  window.ACC = ACC.prototype;

}



const ACC = new App().init('#app', {
  fontSize: ['20px', '25px', '30px'],
  fontIncrease: true,
  fontDecrease: true,
  highContrast: true,
  negativeContrast: true,
  linkUnderLine: true,
  highLightLinks: true,
  fontReadable: true,
  readGuide: true,
  letterSpacing: true,
  wordSpacing: true,
  drag: true
})

