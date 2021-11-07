// ==UserScript==
// @name         vk greentext
// @namespace    http://github.com/mr-nv
// @version      1.1
// @description  зеленый мемный текст как на популярных сайтах таких как двач и форчан
// @author       mr-nv
// @match        *vk.com/*
// @updateURL    https://github.com/mr-nv/vkgreentext/raw/master/vkgreentext.user.js
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function Scan( )
    {
        document.getElementsByClassName( "im-mess--text" ).forEach( function( msg )
        {
            if( msg.textContent[ 0 ] == '>' )
                msg.style.color = "#789922";
        } );
    }

    setInterval( Scan, 50 );
})();
