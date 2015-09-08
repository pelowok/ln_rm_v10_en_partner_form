/*
 new_cookies.js
 Alex Young - GFI Software - 06/2013

 */

// called to retrieve specific querystring parameters
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&amp;|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

// function set cookie
function setACookie(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}
// function read cookie
function getACookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}

// on document ready run the replacement and cookie functions

$().ready(function() {

    adv = getURLParameter('adv');
    loc = getURLParameter('loc');

    if ( adv != null ){
        document.getElementById('adv').value = adv;
        setACookie('adv', adv, 30);
    } else {
        advCookie = getACookie( "adv");
        document.getElementById('adv').value = advCookie;

    }

    if ( loc != null ){
        document.getElementById('loc').value = loc;
        setACookie('loc', loc, 30);
    } else {
        locCookie = getACookie( "loc");
        document.getElementById('loc').value = locCookie;
    }


});