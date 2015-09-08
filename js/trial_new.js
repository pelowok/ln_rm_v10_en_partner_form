var oQry = new Querystring();

var status = oQry.get( "status", "form" );
var oEl = document.getElementById( status );

if (oEl != undefined)
    oEl.style.display="inline";

if ( ( status == "2" ) || ( status == "3" ) ) {
    document.getElementById( "form" ).style.display="inline";

    var sitename = oQry.get( "sitename", "" );
    if ( sitename != "" )
        document.getElementById( "sitename" ).value = Url.decode( sitename );

    var country = oQry.get( "country", "" );
    if ( country != "" )
        document.getElementById( "country" ).value = Url.decode( country );

    /*
     var country = oQry.get( "country", "" );
     if ( country != "" )  {
     for(i=0;i<document.getElementById( "country" ).length;i++)
     {
     if(document.getElementById( "country" ).options[i].value==country)
     {
     document.getElementById( "country" ).selectedIndex=i
     }
     }
     }
     */

    var language = oQry.get( "language", "" );
    if ( language != "" )
        document.getElementById( "language" ).value = Url.decode( language );

    //This is the same as the language hidden field
    var language_choice = oQry.get( "language", "" );
    if ( language_choice != "" )
        document.getElementById( "language_choice" ).value = Url.decode( language_choice );

    var varname = oQry.get( "varname", "" );
    if ( varname != "" )
        document.getElementById( "varname" ).value = Url.decode( varname );

    var contactname = oQry.get( "contactname", "" );
    if ( contactname != "" )
        document.getElementById( "contactname" ).value = Url.decode( contactname );

    var contactemail = oQry.get( "contactemail", "" );
    if ( contactemail != "" )
        document.getElementById( "contactemail" ).value = Url.decode( contactemail );

    var contactemailverification = oQry.get( "contactemailverification", "" );
    if ( contactemailverification != "" )
        document.getElementById( "contactemailverification" ).value = Url.decode( contactemailverification );

    var varaddress = oQry.get( "varaddress", "" );
    if ( varaddress != "" )
        document.getElementById( "varaddress" ).value = Url.decode( varaddress );

    var city = oQry.get( "city", "" );
    if ( city != "" )
        document.getElementById( "city" ).value = Url.decode( city );

    var postcode = oQry.get( "postcode", "" );
    if ( postcode != "" )
        document.getElementById( "postcode" ).value = Url.decode( postcode );

    var phone = oQry.get( "phone", "" );
    if ( phone != "" )
        document.getElementById( "phone" ).value = Url.decode( phone );

    var website = oQry.get( "website", "" );
    if ( website != "" )
        document.getElementById( "website" ).value = Url.decode( website );

    var alertemail = oQry.get( "alertemail", "" );
    if ( alertemail != "" )
        document.getElementById( "alertemail", "" ).value = Url.decode( alertemail );

    var heardfrom = oQry.get( "heardfrom", "" );
    if ( heardfrom != "" )
        document.getElementById( "heardfrom", "" ).value = Url.decode( heardfrom );

    var referrer_code = oQry.get( "referrer_code", "" );
    if ( referrer_code != "" )
        document.getElementById( "referrer_code", "" ).value = Url.decode( referrer_code );
}

if ( status == "form" ) {
    var promo = oQry.get( "promo", "nopromo" );
    var oEl = document.getElementById( promo.toUpperCase() );
    if ( oEl != undefined ) {
        oEl.style.display="inline";
    }

    var referrer_code = oQry.get( "referrer_code", "" );
    if ( referrer_code != "" ) {
        document.getElementById( "referrer_code", "" ).value = Url.decode( referrer_code );
    }
}