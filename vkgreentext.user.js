// ==UserScript==
// @name         vk greentext
// @namespace    http://github.com/mr-nv
// @version      1.0
// @description  зеленый мемный текст для впараши как на популярных мемных сайтах таких как двач и форчан (здесь все мои друзья)
// @author       mr-nv
// @match        *vk.com/im*
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
