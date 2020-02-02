import Drag from './drag';
import helpers from './helpers';
import UI from './ui';
import settings from './settings';

class Event {

    options;
    DOMSelector;
    fontIndex;

    constructor(){
         this.DOMSelector = UI.getDomStrings();
         this.fontIndex = 0
    }

    // SETUP EVENT LISTENER
    setupEventListener(options) {
        this.options = options;

        if (this.options.fontSize) {
            // FONT RESIZE EVENT
            helpers.on(helpers._$(this.DOMSelector.fontIncrease), 'click', this.fontResize.bind(this, this.options.fontSize, 'increase'));
            helpers.on(helpers._$(this.DOMSelector.fontDecrease), 'click', this.fontResize.bind(this, this.options.fontSize, 'decrease'));
        }

        // LINK UNDERLINE
        if (this.options.linkUnderLine) {
            helpers.on(helpers._$(this.DOMSelector.fontUnderLine), 'click', this.linkUnderline.bind(this));
        }

        // FONT READABLE
        if (this.options.fontReadable) {
            helpers.on(helpers._$(this.DOMSelector.fontReadable), 'click', this.readableFont.bind(this));
        }


        // NEGATIVE CONTRAST
        if (this.options.negativeContrast) {
            helpers.on(helpers._$(this.DOMSelector.negativeContrast), 'click', this.negativeContrast.bind(this));
        }

        // HIGH CONTRAST
        if (this.options.highContrast) {
            helpers.on(helpers._$(this.DOMSelector.highContrast), 'click', this.highContrast.bind(this));
        }

        // READ GUIDE LINE
        if (this.options.readGuide) {
            helpers.on(helpers._$(this.DOMSelector.readGuide), 'click', this.readGuide.bind(this));
        }

        // HIGHT LIGHT LINKS
        if (this.options.highLightLinks) {
            helpers.on(helpers._$(this.DOMSelector.highLightLinks), 'click', this.highLightLinks.bind(this));
        }

        // LETTER SPACING
        if (this.options.letterSpacing) {
            helpers.on(helpers._$(this.DOMSelector.letterSpacing), 'click', this.letterSpacing.bind(this));
        }

        // WORD SPACING
        if (this.options.wordSpacing) {
            helpers.on(helpers._$(this.DOMSelector.wordSpacing), 'click', this.wordSpacing.bind(this));
        }
        // RESET
        helpers._$(this.DOMSelector.reset).addEventListener('click', this.reset.bind(this));

        // MENU TOGGLE FUNCTION
        helpers._$(this.DOMSelector.accessability__link).addEventListener('click', (e) => {
            helpers._$(this.DOMSelector.accessability__main).classList.toggle('rightPosition');
            e.currentTarget.classList.toggle('rightPosition-link');
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
    fontResize(size, type) {
        let fontSize;

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
            helpers._$(this.DOMSelector.html).style.fontSize = fontSize[this.fontIndex];

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
                helpers._$(this.DOMSelector.html).style.fontSize = fontSize;

            } else {
                /**
                 *
                 * @HTML render
                 */
                helpers._$(this.DOMSelector.html).style.fontSize = '100%';
            }
        }
    }

    linkUnderline(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.body).classList.toggle(this.DOMSelector.underLineClass);
    }

    headingHighlight(style) {
        helpers._$('head').appendChild(style);
    }

    highLightLinks(e) {
        e.preventDefault();

        helpers._$('body').classList.toggle(this.DOMSelector.highLightLinksClass);
    }

    readableFont(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.body).classList.toggle(this.DOMSelector.fontReadableClass)
    }

    readGuide(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.readGuideClass).classList.toggle('show');
        window.onmousemove = (e) => {
            helpers._$(this.DOMSelector.readGuideClass).style.top = e.y + 'px';
        }
    }

    increaseCursor() {

    }

    negativeContrast(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.body).classList.toggle(this.DOMSelector.negativeContrastClass);
    }

    highContrast(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.body).classList.toggle(this.DOMSelector.highContrastClass);
    }

    letterSpacing(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.body).classList.toggle(this.DOMSelector.letterSpacingClass);
    }

    wordSpacing(e) {
        e.preventDefault();

        helpers._$(this.DOMSelector.body).classList.toggle(this.DOMSelector.wordSpacingClass);
    }

    reset(e) {
        e.preventDefault();

        Array.from(helpers._$(this.DOMSelector.body).classList).forEach((ele) => {
            if (ele.indexOf('ACC__') > -1) {
                helpers._$(this.DOMSelector.body).classList.remove(ele);
            }
        });

        helpers._$(this.DOMSelector.html).style.fontSize = this.options.fontSize[0];
    }


}

export default new Event();