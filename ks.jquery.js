/*
 * keySequence (jQuery)
 * version: 0.1 (29-03-2017)
 * author: @iamtiago
 * homepage: https://iamtiago.net/
 *
 * Licensed under the MIT license
 * 
 * A super simple jQuery function to detect a sequence of pressed keyboard keys.
*/

;(function ( $, window, document, undefined ) {

	$.keySequence = function(seq, func)
    {
        var chars = seq.split(''), 
        	nextKey = 0;

        $(window).keydown(function(e)
        {
            if (e.key === chars[nextKey]) 
            	nextKey++; 
            else 
            	nextKey = 0;
            
            var maxKeyIndex = chars.length;
            
            if(nextKey >= maxKeyIndex) {
                func(); nextKey = 0;
            }
        });
    };

})( jQuery, window, document );