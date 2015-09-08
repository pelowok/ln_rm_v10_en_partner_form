/**
 * handle state selections on forms for countries which have states/territories
 */

/*global document $ Option */

/**
 * get a list of US States
 *
 * @return Array (numeric) of Arrays (associative), keys: code, state
 */
function getUSList() {
    var aStates = [
        {"code":"US-AL","state":"Alabama"},
        {"code":"US-AK","state":"Alaska"},
        {"code":"US-AS","state":"American Samoa"},
        {"code":"US-AZ","state":"Arizona"},
        {"code":"US-AR","state":"Arkansas"},
        {"code":"US-CA","state":"California"},
        {"code":"US-CO","state":"Colorado"},
        {"code":"US-CT","state":"Connecticut"},
        {"code":"US-DE","state":"Delaware"},
        {"code":"US-DC","state":"District of Columbia"},
        {"code":"US-FL","state":"Florida"},
        {"code":"US-GA","state":"Georgia"},
        {"code":"US-GU","state":"Guam"},
        {"code":"US-HI","state":"Hawaii"},
        {"code":"US-ID","state":"Idaho"},
        {"code":"US-IL","state":"Illinois"},
        {"code":"US-IN","state":"Indiana"},
        {"code":"US-IA","state":"Iowa"},
        {"code":"US-KS","state":"Kansas"},
        {"code":"US-KY","state":"Kentucky"},
        {"code":"US-LA","state":"Louisiana"},
        {"code":"US-ME","state":"Maine"},
        {"code":"US-MD","state":"Maryland"},
        {"code":"US-MA","state":"Massachusetts"},
        {"code":"US-MI","state":"Michigan"},
        {"code":"US-MN","state":"Minnesota"},
        {"code":"US-MS","state":"Mississippi"},
        {"code":"US-MO","state":"Missouri"},
        {"code":"US-MT","state":"Montana"},
        {"code":"US-NE","state":"Nebraska"},
        {"code":"US-NV","state":"Nevada"},
        {"code":"US-NH","state":"New Hampshire"},
        {"code":"US-NJ","state":"New Jersey"},
        {"code":"US-NM","state":"New Mexico"},
        {"code":"US-NY","state":"New York"},
        {"code":"US-NC","state":"North Carolina"},
        {"code":"US-ND","state":"North Dakota"},
        {"code":"US-MP","state":"Northern Mariana Islands"},
        {"code":"US-OH","state":"Ohio"},
        {"code":"US-OK","state":"Oklahoma"},
        {"code":"US-OR","state":"Oregon"},
        {"code":"US-PA","state":"Pennsylvania"},
        {"code":"US-PR","state":"Puerto Rico"},
        {"code":"US-RI","state":"Rhode Island"},
        {"code":"US-SC","state":"South Carolina"},
        {"code":"US-SD","state":"South Dakota"},
        {"code":"US-TN","state":"Tennessee"},
        {"code":"US-TX","state":"Texas"},
        {"code":"US-UM","state":"United States Minor Outlying Islands"},
        {"code":"US-VI","state":"United States Virgin Islands"},
        {"code":"US-UT","state":"Utah"},
        {"code":"US-VT","state":"Vermont"},
        {"code":"US-VA","state":"Virginia"},
        {"code":"US-WA","state":"Washington"},
        {"code":"US-WV","state":"West Virginia"},
        {"code":"US-WI","state":"Wisconsin"},
        {"code":"US-WY","state":"Wyoming"}
    ];
    return aStates;
}

/**
 * get a list of Canada States
 *
 * @return Array (numeric) of Arrays (associative), keys: code, state
 */
function getCAList() {
    var aStates = [
        {"code":"CA-AB","state":"Alberta"},
        {"code":"CA-BC","state":"British Columbia"},
        {"code":"CA-MB","state":"Manitoba"},
        {"code":"CA-NB","state":"New Brunswick"},
        {"code":"CA-NL","state":"Newfoundland and Labrador"},
        {"code":"CA-NT","state":"Northwest Territories"},
        {"code":"CA-NS","state":"Nova Scotia"},
        {"code":"CA-NU","state":"Nunavut"},
        {"code":"CA-ON","state":"Ontario"},
        {"code":"CA-PE","state":"Prince Edward Island"},
        {"code":"CA-QC","state":"Quebec"},
        {"code":"CA-SK","state":"Saskatchewan"},
        {"code":"CA-YT","state":"Yukon Territory"}
    ];
    return aStates;
}

/**
 * get a list of States
 *
 * @param countryCode country code
 * @return Array (numeric) of Arrays (associative), keys: code, state
 */
function getStateList(countryCode) {
    var aStates = [];
    switch (countryCode) {
        case 'us':
            aStates = getUSList();
            break;
        case 'ca':
            aStates = getCAList();
            break;
    }
    return aStates;
}

/**
 * Show or hide the div containin the state/territory selection
 * dependin on whether we need it.
 *
 * Currently we only have state/territory selection for the US and CA
 */
function showHideStateSelection() {

    console.log('showHideStateSelection function is initiated.')

    var countryBox = document.forms.gfimaxform.country;
    var countryCode = countryBox.options[countryBox.selectedIndex].value;
    var stateBox = document.forms.gfimaxform.state;
    var aStates = getStateList(countryCode);
    if (aStates.length === 0) {
        stateBox.disabled = true;
        // make selection of state non-mandatory if states are not shown
        stateBox.setAttribute("alt", "");
        $("#state_choice_div").hide();
    } else {
        stateBox.disabled = false;
        // make selection of state mandatory if states are shown
        stateBox.setAttribute("alt", "select");
        // retain "please select..."
        stateBox.options.length = 1;
        for (var i = 0; i<aStates.length; i++) {
            stateBox.options[i+1] = new Option(
                aStates[i].state,	// label
                aStates[i].code);	// value
        }
        $("#state_choice_div").show();
    }

}

// when document is ready
$(document).ready(function() {
    // new country selection causes list to be updated and hidden/shown
    $("#country").change(function() {
        showHideStateSelection();
    });
    // initial run
    showHideStateSelection();
});