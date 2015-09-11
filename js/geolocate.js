$(document).ready(function() {

    timer = +new Date();

    $.get( "https://www.maxfocus.com/geo/country", function( data ) {
        countryCode = data.toLowerCase();

        $("#country").val(countryCode);
        $("#country").trigger("change");

        if(countryCode == "us"){
            $.get( "https://www.maxfocus.com/geo/region", function( data ) {
                regionCode = "US-"+data;
                $("#state").val(regionCode);

                console.log(regionCode);

                newtimer = +new Date();
                console.log(newtimer - timer);

            });
        }
        if(countryCode == "ca"){
            $.get( "https://www.maxfocus.com/geo/region", function( data ) {
                regionCode = "CA-"+data;
                $("#state").val(regionCode);

                newtimer = +new Date();
                console.log(newtimer - timer);

            });
        }
    });
});