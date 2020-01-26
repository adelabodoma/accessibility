import helpers from './helpers';
import UI from './ui';

class Drag {

    DOMSelector = UI.getDomStrings();

    constructor() {
        // Internet Explorer
        const isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE) {
            console.info("Please Note that the drag and drop feature doesn't support in your browser!");
            return;
        }

        helpers.on(helpers._$('#dragMe'), 'dragstart', this.dragStart, false);

        helpers.on(helpers._$(this.DOMSelector.body), 'dragover', this.dragOver, false);
        helpers.on(helpers._$(this.DOMSelector.body), 'drop', this.drop, false);

    }


    dragStart(event) {
        const style = window.getComputedStyle(event.target, null);

        event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
    }

    dragOver(event) {
        event.preventDefault();
        return false;
    }

    drop(event) {
        var wrapper, element, offset;

        wrapper = helpers._$('.accessability__main');
        element = helpers._$('#dragMe');

        offset = event.dataTransfer.getData("text/plain").split(',');

        element.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
        element.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';



        wrapper.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        wrapper.style.left = (event.clientX + parseInt(offset[0], 10) + 70) + 'px';

        event.preventDefault();
        return false;
    }
}

export default Drag;