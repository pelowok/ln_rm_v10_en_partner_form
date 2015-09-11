'use strict';

/**
 * Created by Zak PeloJoaquin
 *  on 9/11/15.
 * http://mynameiszak.com
 * github repo : https://github.com/pelowok/ln_rm_v10_en_partner_form.git
 * github owner : pelowok
 */

var MNIZ = MNIZ || {};

MNIZ.Main = (function ($) {

    var pub = {};

    function init(){
        console.log('MNIZ.Main initialized.');
    }

    pub.init = init();

    return pub;

})(jQuery);

jQuery(document).ready(function($) {
    MNIZ.Main.init;
});
