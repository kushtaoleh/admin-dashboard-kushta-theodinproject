/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'profile': '&#xe923;',
            'file2': '&#xe923;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'clock2': '&#xe94f;',
            'time3': '&#xe94f;',
            'bell': '&#xe951;',
            'alarm2': '&#xe951;',
            'bubbles': '&#xe96c;',
            'comments': '&#xe96c;',
            'users': '&#xe972;',
            'group': '&#xe972;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'equalizer': '&#xe992;',
            'sliders': '&#xe992;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'shield': '&#xe9b4;',
            'security': '&#xe9b4;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'eye-plus': '&#xe9cf;',
            'views2': '&#xe9cf;',
            'bookmarks': '&#xe9d3;',
            'ribbons': '&#xe9d3;',
            'question': '&#xea09;',
            'help': '&#xea09;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
