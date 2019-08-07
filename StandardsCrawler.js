/*
 *
 * JavaScript crawler for IEC standards.
 *
 * How to use it:
 * 1. open one of the links from the urls array below.
 * 2. open the browser console (e.g. [F12])
 *      This must be done in the tab with a website from the iec server. Otherwise the cross-origin-policy will forbid to automatically open any of the other websites.
 * 3. copy the whole content of this file into the console
 * 4. execute the code with enter
 * 5. wait untill all links have been opened and a download appears
 * 6. replace ",sto" with "\nsto"
 * 7. done!
 *
*/



// original link list
var urls = ["https://webstore.iec.ch/publication/7433",
"https://webstore.iec.ch/publication/153",
"https://webstore.iec.ch/publication/96",
"https://webstore.iec.ch/publication/587",
"https://webstore.iec.ch/publication/22991",
"https://webstore.iec.ch/publication/1022",
"https://webstore.iec.ch/publication/1165",
"https://webstore.iec.ch/publication/1166",
"https://webstore.iec.ch/publication/1160",
"https://webstore.iec.ch/publication/1172",
"https://webstore.iec.ch/publication/1258",
"https://webstore.iec.ch/publication/1259",
"https://webstore.iec.ch/publication/63037",
"https://webstore.iec.ch/publication/1949",
"https://webstore.iec.ch/publication/1948",
"https://webstore.iec.ch/publication/1950",
"https://webstore.iec.ch/publication/1950",
"https://webstore.iec.ch/publication/24120",
"https://webstore.iec.ch/publication/3666",
"https://webstore.iec.ch/publication/3669",
"https://webstore.iec.ch/publication/3671",
"https://webstore.iec.ch/publication/3672",
"https://webstore.iec.ch/publication/3673",
"https://webstore.iec.ch/publication/3674",
"https://webstore.iec.ch/publication/3675",
"https://webstore.iec.ch/publication/3684",
"https://webstore.iec.ch/publication/3727",
"https://webstore.iec.ch/publication/3728",
"https://webstore.iec.ch/publication/3738",
"https://webstore.iec.ch/publication/3739",
"https://webstore.iec.ch/publication/23822",
"https://webstore.iec.ch/publication/3744",
"https://webstore.iec.ch/publication/3745",
"https://webstore.iec.ch/publication/25035",
"https://webstore.iec.ch/publication/3742",
"https://webstore.iec.ch/publication/3747",
"https://webstore.iec.ch/publication/3748",
"https://webstore.iec.ch/publication/3749",
"https://webstore.iec.ch/publication/3750",
"https://webstore.iec.ch/publication/3751",
"https://webstore.iec.ch/publication/3757",
"https://webstore.iec.ch/publication/3758",
"https://webstore.iec.ch/publication/3759",
"https://webstore.iec.ch/publication/3760",
"https://webstore.iec.ch/publication/3765",
"https://webstore.iec.ch/publication/3767",
"https://webstore.iec.ch/publication/3768",
"https://webstore.iec.ch/publication/3769",
"https://webstore.iec.ch/publication/3881",
"https://webstore.iec.ch/publication/3961",
"https://webstore.iec.ch/publication/25629",
"https://webstore.iec.ch/publication/25400",
"https://webstore.iec.ch/publication/60204",
"https://webstore.iec.ch/publication/25399",
"https://webstore.iec.ch/publication/4550",
"https://webstore.iec.ch/publication/4550",
"https://webstore.iec.ch/publication/4707",
"https://webstore.iec.ch/publication/5263",
"https://webstore.iec.ch/publication/5264",
"https://webstore.iec.ch/publication/5265",
"https://webstore.iec.ch/publication/5308",
"https://webstore.iec.ch/publication/5308",
"https://webstore.iec.ch/publication/5297",
"https://webstore.iec.ch/publication/5298",
"https://webstore.iec.ch/publication/5299",
"https://webstore.iec.ch/publication/5300",
"https://webstore.iec.ch/publication/5301",
"https://webstore.iec.ch/publication/5302",
"https://webstore.iec.ch/publication/5303",
"https://webstore.iec.ch/publication/5304",
"https://webstore.iec.ch/publication/5305",
"https://webstore.iec.ch/publication/5306",
"https://webstore.iec.ch/publication/5307",
"https://webstore.iec.ch/publication/5313",
"https://webstore.iec.ch/publication/5380",
"https://webstore.iec.ch/publication/26603",
"https://webstore.iec.ch/publication/61087",
"https://webstore.iec.ch/publication/22813",
"https://webstore.iec.ch/publication/22808",
"https://webstore.iec.ch/publication/59497",
"https://webstore.iec.ch/publication/26560",
"https://webstore.iec.ch/publication/32580",
"https://webstore.iec.ch/publication/5506",
"https://webstore.iec.ch/publication/5513",
"https://webstore.iec.ch/publication/24241",
"https://webstore.iec.ch/publication/5528",
"https://webstore.iec.ch/publication/5532",
"https://webstore.iec.ch/publication/5723",
"https://webstore.iec.ch/publication/5724",
"https://webstore.iec.ch/publication/5726",
"https://webstore.iec.ch/publication/5878",
"https://webstore.iec.ch/publication/5953",
"https://webstore.iec.ch/publication/33869",
"https://webstore.iec.ch/publication/5963",
"https://webstore.iec.ch/publication/6225",
"https://webstore.iec.ch/publication/22797",
"https://webstore.iec.ch/publication/6675",
"https://webstore.iec.ch/publication/22781",
"https://webstore.iec.ch/publication/6871",
"https://webstore.iec.ch/publication/25442",
"https://webstore.iec.ch/publication/7029",
"https://webstore.iec.ch/publication/7033",
"https://webstore.iec.ch/publication/7040",
"https://webstore.iec.ch/publication/24433",
"https://webstore.iec.ch/publication/24433",
"https://webstore.iec.ch/publication/7326",
"https://webstore.iec.ch/publication/7446",
"https://webstore.iec.ch/publication/30082",
"https://webstore.iec.ch/publication/6626",
"https://webstore.iec.ch/publication/33023",
"https://webstore.iec.ch/publication/5380",
"https://webstore.iec.ch/publication/62997",
"https://webstore.iec.ch/publication/10334",
"https://webstore.iec.ch/publication/11190",
"https://webstore.iec.ch/publication/11351",
"https://webstore.iec.ch/publication/60834",
"https://webstore.iec.ch/publication/11411",
"https://webstore.iec.ch/publication/11978",
"https://webstore.iec.ch/publication/1865",
"https://webstore.iec.ch/publication/20072",
"https://webstore.iec.ch/publication/6008",
"https://webstore.iec.ch/publication/20074",
"https://webstore.iec.ch/publication/6011",
"https://webstore.iec.ch/publication/6011",
"https://webstore.iec.ch/publication/20077",
"https://webstore.iec.ch/publication/20078",
"https://webstore.iec.ch/publication/6015",
"https://webstore.iec.ch/publication/20079",
"https://webstore.iec.ch/publication/6016",
"https://webstore.iec.ch/publication/6019",
"https://webstore.iec.ch/publication/20080",
"https://webstore.iec.ch/publication/6017",
"https://webstore.iec.ch/publication/6202",
"https://webstore.iec.ch/publication/27527",
"https://webstore.iec.ch/publication/6203",
"https://webstore.iec.ch/publication/64397",
"https://webstore.iec.ch/publication/22834",
"https://webstore.iec.ch/publication/22537",
"https://webstore.iec.ch/publication/20183",
"https://webstore.iec.ch/publication/6204",
"https://webstore.iec.ch/publication/6208",
"https://webstore.iec.ch/publication/20189",
"https://webstore.iec.ch/publication/20190",
"https://webstore.iec.ch/publication/20191",
"https://webstore.iec.ch/publication/20192",
"https://webstore.iec.ch/publication/6210",
"https://webstore.iec.ch/publication/31356",
"https://webstore.iec.ch/publication/59669",
"https://webstore.iec.ch/publication/6212",
"https://webstore.iec.ch/publication/22090",
"https://webstore.iec.ch/publication/30444",
"https://webstore.iec.ch/publication/9602",
"https://webstore.iec.ch/publication/10255",
"https://webstore.iec.ch/publication/11302",
"https://webstore.iec.ch/publication/11304",
"https://webstore.iec.ch/publication/11314",
"https://webstore.iec.ch/publication/11322",
"https://webstore.iec.ch/publication/23118",
"https://webstore.iec.ch/publication/22636",
"https://webstore.iec.ch/publication/23481",
"https://webstore.iec.ch/publication/22637",
"https://webstore.iec.ch/publication/25315"];

var results = [];
var entity ;



function getClass(value) {
		
	if (value.includes("Standard")) return "sto:Standard" ;
	
	throw "no class found for entry " + value ;
	
}


function getDate(value) {
	
	return "\"" + value + "\"^^xsd:date" ;

}


function getLanguage(value) {
	
	var languages = value.split("/") ;
	var counter;
	var result = "";
	for (counter = 0; counter < languages.length; counter++) {
		if (languages[counter].includes("German")) result += "<http://lexvo.org/id/iso639-3/deu>, " ;
		if (languages[counter].includes("English")) result += "<http://lexvo.org/id/iso639-3/eng>, " ;
		if (languages[counter].includes("French")) result += "<http://lexvo.org/id/iso639-3/fra>, " ;
		if (languages[counter].includes("rus")) result += "<http://lexvo.org/id/iso639-3/rus>, " ;
		if (languages[counter].includes("Spanish")) result += "<http://lexvo.org/id/iso639-3/spa>, " ;
	}
	
	return result ;
}
	

function getPropertyValuePair(key, value) {
	
	if (key == "Publication type") return "rdf:type" + " " + getClass(value);
	if (key == "Publication date") return "sto:hasPublicationDate" + " " + getDate(value);
	if (key == "Edition") return "sto:hasEdition"  + " " + "\"" + value + "\"";
	if (key.includes("language")) return "sto:hasAvailableLanguage"  + " " + getLanguage(value);
	if (key == "Technical Committee") return "sto:hasTechnicalCommittee"  + " " + "\"" + value + "\"";
	if (key == "ICS") return "sto:hasICS"  + " " + "\"" + value + "\"" ;
	if (key == "Pages") return "sto:hasPages" + " " + "\"" + value + "\"^^xsd:int";
	if (key == "File size") return "sto:hasFileSize" + " " + "\"" + value + " KB\"";
	
	throw "no property found for " + key ;
}


function readInfoTable(url_counter) {
	
	var table = ws.document.getElementsByClassName("table-info")[0].children[0] ;

		var i;
		for (i = 1; i < table.children.length; i++) {
			var key = table.children[i].children[0].innerHTML ;
			if (key.startsWith("<")) key = table.children[i].children[0].firstChild.title ;
			var value = table.children[i].children[1].firstChild.innerHTML ;
			results[url_counter].push(entity + " " + getPropertyValuePair(key, value ) + " ." ) ;
		}	


}


function readHistoryTable(url_counter) {
	
	var table = ws.document.getElementsByClassName("table-striped")[0].children[1] ;

	var i;
	for (i = 0; i < table.children.length; i++) {
		
		var key = "sto:" + table.children[i].children[1].firstChild.innerHTML.replace(/\s/g, '_'); ;
		results[url_counter].push(entity + " prov:wasRevisionOf " + key + " .") ;
		
		var edition = table.children[i].children[2].innerHTML ;
		results[url_counter].push(key + " sto:hasEdition \"" + edition + "\"^^xsd:double .") ;
		
		var state = table.children[i].children[3].innerHTML ;
		results[url_counter].push(key + " sto:hasStatus \"" + state + "\"@en .") ;
	}	


}


// source: https://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + strData;


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    };
	
	

    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}



var ws;

function load(i) {
	//console.log(urls[i]);
	console.log(i);
	ws = window.open(urls[i]);
	setTimeout(function() {
		
		results[i] = [];
		results[i][0] = urls[i] ;// first field is the link of the website
		
		entity = "sto:" + ws.document.getElementById("view:dOCUMENTNAME1").innerHTML.replace(/\s/g, '_');
		
		readInfoTable(i) ; 
		readHistoryTable(i) ;
		
	}, 1000);
}



function main(iter) {
	
		
	if (iter > 0) {
		ws.close();
	}
	
	if (iter < urls.length) {
		load(iter);
		setTimeout(function() {	main(iter + 1) }, 2000);
	} else {
		console.log(results);
		download(results.toString(), 'crawler-results.txt', 'text/plain');
	}
}
main(0);