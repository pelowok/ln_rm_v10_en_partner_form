/* Client-side access to querystring name=value pairs
 Version 1.2.3
 22 Jun 2005
 Adam Vandenberg
 */
function Querystring(qs) { // optionally pass a querystring to parse
    this.params = new Object()
    this.get=Querystring_get

    if (qs == null)
        qs=location.search.substring(1,location.search.length)

    if (qs.length == 0) return

// Turn <plus> back to <space>
// See: http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.13.4.1
    qs = qs.replace(/\+/g, ' ')
    var args = qs.split('&') // parse out name/value pairs separated via &

// split out each name=value pair
    for (var i=0;i<args.length;i++) {
        var value;
        var pair = args[i].split('=')
        var name = unescape(pair[0])

        if (pair.length == 2)
            value = unescape(pair[1])
        else
            value = name

        this.params[name] = value
    }
}

function Querystring_get(key, default_) {
    // This silly looking line changes UNDEFINED to NULL
    if (default_ == null) default_ = null;

    var value=this.params[key]
    if (value==null) value=default_;

    return value
}


function getCookie(c_name)
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

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function checkCookie()
{
    username=getCookie('username');
    if (username!=null && username!="")
    {
        alert('Welcome again '+username+'!');
    }
    else
    {
        username=prompt('Please enter your name:',"");
        if (username!=null && username!="")
        {
            setCookie('username',username,365);
        }
    }
}