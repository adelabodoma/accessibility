/*
 * Accessability JavaScript Library v1.0.0
 * LINK DEVELOPMENT CO.
 * Date: 2019-12-18T21:04Z
 * Author: Adel Sadek - Front-end developer at link dev.
 */


 (function(global, factory){

    "use strict";

    factory();

 })(typeof window !== "undefined" ? window : this, function(){


    // define accessibility
    var accessibility = function(selector, options){

        // return new object from accessability 
        return new accessibility.fn.init(selector, options);
    }

    accessibility.fn = accessibility.prototype = {


    };

 });


