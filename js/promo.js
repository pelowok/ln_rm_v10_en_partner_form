/**
 * This script handles the promo code Query/Cookie checking
 *
 * requires inclusion of {url,querystring,cookie}.js
 */

/**
 * Check whether a value is integer
 *
 * @param value input value to check
 * @return boolean true if it matches an integer regex
 */
function isInteger(value) {
    if (value == null || !value.toString().match(/^\d+$/)) return false;
    return true;
}

var oQry = new Querystring();
// read query string
var cpid = oQry.get( "CPID", null );
var adv = oQry.get( "adv", null );
var loc = oQry.get( "loc", null );
var keywords = oQry.get( "keywords", null );
var fReadCookies = true;
/*
 * 1) if CPID is present in the querystring of the accessed page, and is numeric, store that along with the lead.
 * eg http://www.example.com/app/max/max-trial/?CPID=123
 */
if (isInteger(cpid)) {
    document.forms.gfimaxform.CPID.value = cpid;
    fReadCookies = false
}
/*
 * 2) Else if the adv and loc are present in the querystring of the accessed page, and are numeric, store those along with the lead.
 * eg http://www.example.com/app/max/max-trial/?adv=123&loc=456
 */
if (isInteger(adv) && isInteger(loc)) {
    document.forms.gfimaxform.adv.value = adv;
    document.forms.gfimaxform.loc.value = loc;
    fReadCookies = false;
}
if (fReadCookies) {
    // read cookies
    cpid = getCookie("CPID");
    adv = getCookie( "adv");
    loc = getCookie( "loc");
    /* 3) Else if the CPID is present in the cookie, and is numeric, store that along with the lead.
     * eg http://www.example.com/app/max/max-trial/ is accessed and CPID=123 is in the cookie
     */
    if (isInteger(cpid)) {
        document.forms.gfimaxform.CPID.value = cpid;
    }
    /* 4) Else if the adv and loc are present in the cookie, and are numeric, store those along with the lead.
     * eg http://www.example.com/app/max/max-trial/ is accessed and adv=123 and loc=456 are in the cookie
     */
    if (isInteger(adv) && isInteger(loc)) {
        document.forms.gfimaxform.adv.value = adv;
        document.forms.gfimaxform.loc.value = loc;
    }
}

if (keywords) {
    document.forms.gfimaxform.keywords.value = keywords;
} else {
    keywords = getCookie("q");
    if (keywords) {
        document.forms.gfimaxform.keywords.value = keywords;
    }
}

$(function() {
// Add listener for form submit to append _ga cookie
    $('form[id="gfimaxform"]').submit(function() {
        console.log('In GA Submit');
        var gglcid = getCookie("_ga");
        if (gglcid !== null) {
            if (!document.getElementById("GGLCID")) {
                var ggl = document.createElement("INPUT");
                ggl.id = "GGLCID";
                ggl.name = "GGLCID";
                ggl.type = "hidden";
                document.forms.gfimaxform.appendChild(ggl);
            }

            if (document.getElementById('GGLCID') !== null) {
                document.forms.gfimaxform.GGLCID.value = gglcid;
            }
        }
    });
});