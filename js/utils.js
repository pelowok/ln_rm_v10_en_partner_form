var englishOnly = new Array("English");
var englishFrenchGerman = new Array("English","French","German");
var frenchGerman = new Array("French","German");
var germanOnly = new Array("German");
var frenchOnly = new Array("French");
var englishFrench = new Array("English","French");
var freeEmails = new Array("hotmail", "gmail", "googlemail", "yahoo");

function changeLanguage(box)
{
    var data;

    switch( box.options[box.selectedIndex].value )
    {
        case 'eu':
            data = englishFrenchGerman;
            adddiv( 'language_choice_div' );
            break;
        case 'ch':
            data = englishFrenchGerman;
            adddiv( 'language_choice_div' );
            break;
        case 'de': case 'au':
        data = germanOnly;
        removediv( 'language_choice_div' );
        break;
        case 'fr':
            data = frenchOnly;
            removediv( 'language_choice_div' );
            break;
        case 'blank':
            data = new Array('     ');
            removediv( 'language_choice_div' );
            break;
        case 'be':
            data = englishFrench;
            adddiv( 'language_choice_div' );
            break;
        default:
            data = englishOnly;
            removediv( 'language_choice_div' );
            break;
    }

    document.forms.gfimaxform.language_choice.options.length = 0;
    for(i=0;i<data.length;i++)
    {
        document.forms.gfimaxform.language_choice.options[i] = new Option(data[i],data[i]);
    }

    document.forms.gfimaxform.language.value = data[0];

}

function checkCompanyName(box) {
    if ( box.value.toUpperCase() == "COMPUTER TROUBLESHOOTERS" ) {
        adddiv( 'companynameerror' );
    } else {
        removediv( 'companynameerror' );
    }
}


function isFreeEmail( address ) {
    var haystack = address.toLowerCase();

    for(i = 0; i < freeEmails.length; i++ ) {
        if ( haystack.match( freeEmails[i] ) != null ) {
            return true;
        }
    }
    return false;
}

function checkEmail() {
    if (( ( document.forms.gfimaxform.contactemail.value != "" ) && ( document.forms.gfimaxform.contactemailverification.value != "" ) )
        &&  ( document.forms.gfimaxform.contactemail.value != document.forms.gfimaxform.contactemailverification.value )) {
        adddiv('emailerror');
    } else {
        removediv('emailerror');
    }

    /*
     if ( isFreeEmail( document.forms.gfimaxform.contactemail.value ) ) {
     adddiv('emailfree');
     } else {
     removediv('emailfree');
     }
     */

}

function checkPassword() {

}

function checkConfirmPassword() {
    if ( (document.forms.gfimaxform.password.value != document.forms.gfimaxform.confirmpassword.value) && (document.forms.gfimaxform.confirmpassword.value != "") )
        adddiv('confirmpassworderror');
    else
        removediv('confirmpassworderror');
}

function hidediv(name) {
    if (document.getElementById) { // DOM3 = IE5, NS6
        document.getElementById(name).style.visibility = 'hidden';
    }
    else {
        if (document.layers) { // Netscape 4
            document[name].visibility = 'hidden';
        }
        else { // IE 4
            document.all[name].style.visibility = 'hidden';
        }
    }
}

function showdiv(name) {
    if (document.getElementById) { // DOM3 = IE5, NS6
        document.getElementById(name).style.visibility = 'visible';
    }
    else {
        if (document.layers) { // Netscape 4
            document[name].visibility = 'visible';
        }
        else { // IE 4
            document.all[name].style.visibility = 'visible';
        }
    }
}

function removediv(name) {
    if (document.getElementById) { // DOM3 = IE5, NS6
        document.getElementById(name).style.display = 'none';
    }
    else {
        if (document.layers) { // Netscape 4
            document[name].display = 'none';
        }
        else { // IE 4
            document.all[name].style.display = 'none';
        }
    }
}

function adddiv(name) {
    if (document.getElementById) { // DOM3 = IE5, NS6
        document.getElementById(name).style.display = 'inline';
    }
    else {
        if (document.layers) { // Netscape 4
            document[name].display = 'inline';
        }
        else { // IE 4
            document.all[name].style.display = 'inline';
        }
    }
}
 