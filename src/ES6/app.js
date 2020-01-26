/*
 * Accessability JavaScript Library v1.0.0
 * LINK DEVELOPMENT CO.
 * Date: 2019-12-18T21:04Z
 * Author: Adel Sadek - Front-end developer at link dev.
 */

import css from '../../css/ACC.css';
import UI from './ui';
import settings from './settings';
import Drag from './drag';
import helpers from './helpers';
import Events from './events';
class App {

  /**
  * Default options for the accessability.
  * @public
  */

  options = settings;

  // RENDER THE HTML TEMPLATE FOR ACCESSABILITY TOOL
  initialize(selector, options) {
    UI.htmlRender(selector, options);

    // this.setupEventListener();
    Events.setupEventListener(options);
  }

  /**
  * init the function with passed params.
  * @public
  */
  init(selector, opt) {
    let ele, options, elem, defaultSize;
    
    ele = helpers._$(selector);

    // Check if the selector exist in the DOM
    if (!ele) {
      throw Error('Invalid Selector');
    }

    /**
    * Current options set by the caller including defaults.
    * @public;
    */
    // options = opt;

    if (typeof opt !== "object") {
      throw Error('Invalid Options! Options must be an object');
    }

    if (typeof opt.fontSize !== "object" && !Array.isArray(opt.fontSize)) {
      throw Error('Invalid FontSize! FontSize must be an Array');
    }


    this.options = helpers.extendObject(this.options, opt);

    
    /**
     *  GET DEFAULT FONT SIZE TO RESET IN CASE NON SIZES
     */
    elem = helpers._$("html");
    defaultSize = window.getComputedStyle(elem, null).getPropertyValue("font-size");

    /**
     * APPEND DEFAULT SIZE TO SIZE ARRAY
     */
    this.options.fontSize.unshift(defaultSize);

    // Render HTML Template
    this.initialize(selector, this.options);
  }

}

/*
* check if lib is not in global
*/
!window.ACC ? window['ACC'] = new App() : '';



ACC.init('#app', {
  fontSize: ['20px', '25px', '30px'],
  fontIncrease: true,
  fontDecrease: true,
  highContrast: true,
  negativeContrast: false,
  linkUnderLine: false,
  highLightLinks: false,
  fontReadable: false,
  readGuide: false,
  letterSpacing: false,
  wordSpacing: false,
  drag: true
})

