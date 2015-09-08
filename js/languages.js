/**
 * handle language selections on forms
 */

/*global $ Option document LANGUAGE_EN LANGUAGE_DE LANGUAGE_IT LANGUAGE_ES LANGUAGE_FR */

/**
 * apply a language setting, copy the language selected in the dropdown to the
 * hidden form variable
 */
function applyLanguage() {
    var language = $("#language").get(0);
    var languageChoice = $("#language_choice").get(0);
    language.value = languageChoice.options[languageChoice.selectedIndex].value;
}

/**
 * determine which languages are available for a country
 *
 * @param countryCode two-letter country code
 * @return Array of language. Array (numeric of Arrays (associative) Keys: code, language
 */
function getLanguagesForCountry(countryCode) {
    var english	= [{code:"en",language:LANGUAGE_EN}];
    var german	= [{code:"de",language:LANGUAGE_DE}];
    var italian	= [{code:"it",language:LANGUAGE_IT}];
    var spanish	= [{code:"es",language:LANGUAGE_ES}];
    var french	= [{code:"fr",language:LANGUAGE_FR}];
    var ret = [];

    switch( countryCode ){
        // test servers
        case 'si-dev':
        case 'si-test':
        case 'ws-dev':
        case 'ws-test':
        case 'proj-dev':
        case 'proj-test':
        case 'hs-dev':
        case 'hs-test':
        case 'production':
            ret = english.concat(german, french, italian, spanish);
            break;
        case 'eu':
            ret = english.concat(german, french, italian, spanish);
            break;
        case 'ch':
            ret = german.concat(english, french);
            break;
        case 'de':
        case 'au':
            ret = german;
            break;
        case 'fr':
            ret = french;
            break;
        case 'be':
            ret = english.concat(french);
            break;
        case 'it':
            ret = italian;
            break;
        case 'es':
            ret = spanish;
            break;
        case 'ar':
        case 'cl':
        case 'co':
        case 'ec':
        case 'pe':
        case 'py':
        case 'bo':
        case 'uy':
        case 've':
        case 'mx':
        case 'cr':
        case 'do':
        case 'gt':
        case 'hn':
        case 'ni':
        case 'pa':
        case 'pr':
        case 'sv':
            ret = spanish;
            break;
        default:
            ret = english;
            break;
    }
    return ret;
}

/**
 * refresh the list of languages for a country
 */
function refreshLanguageList() {
    // read which country has been selected
    var countryBox = $("#country").get(0);
    var countryCode = countryBox.options[countryBox.selectedIndex].value;
    // get the list of languages for that country
    var aLanguages = getLanguagesForCountry(countryCode);
    // only show selection if there is more than one language to choose from
    if (aLanguages.length > 1) {
        $("#language_choice_div").show();
    } else {
        $("#language_choice_div").hide();
    }
    // grab the dropdown, clear and fill with the
    var languageChoice = $("#language_choice").get(0);
    languageChoice.options.length = 0;
    for(var i=0; i<aLanguages.length; i++) {
        languageChoice.options[i] = new Option(aLanguages[i].language,aLanguages[i].code);
    }
    // select first
    languageChoice.selectedIndex = 0;
    // the change event is not triggered by the above, trigger now
    // this will at least cause applyLanguage() to run
    // if distributors.js is loaded, refreshDistributorList() in there also runs
    $("#language_choice").trigger("change");
}

// when document is ready
$(document).ready(function() {
    // run refresh function when a new country is selected
    $("#country").change(function() {
        refreshLanguageList();
    });
    // apply setting when a new language is selecteds
    $("#language_choice").change(function() {
        applyLanguage();
    });
    // initial run
    refreshLanguageList();
});