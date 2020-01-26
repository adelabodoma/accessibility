class helpers {

   /**
    * handle dom selector
   * @param {HTMLElement} selector
   */
   _$(selector) {
      return document.querySelector(selector);
   }


   /**
   * Attaches to an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The event handler to attach.
   * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
   */
   on(element, event, listener, capture) {
      if (element) {
         if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
         } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
         }
      }
   };

   /**
    * to merge between two objects
    * @param {object} defaultOptions
    * @param {object} options
    */
   extendObject(defaultOptions, options) {
      for (let key in defaultOptions) {
         if (!options.hasOwnProperty(key)) {
            options[key] = defaultOptions[key];
         }
      }
      // return new object by merge to objects
      return options;
   }


}

export default new helpers();