// search all or top buttons, swap css

$("#searchAll, #searchTop",).click(function(){
    $("#topFilters, #allFilters",).toggle();
    $("#searchTopConfirm, #searchAllConfirm",).toggleClass("hidden");
    $("#searchAll, #searchTop",).toggleClass("activeBtnBg");
});

//search menu hide show

$("#searchOpen").click(function(){
	$("#searchBox").css({
		"display" : "flex",
	});
});

$("#searchReturn").click(function(){
	$("#searchBox").css({
		"display" : "none",
	});
});

// drop down hide and show

$("#filterLang, #filterOpt, #filterCat, #filterCnt",).click(function(clicked_id){
	var listId = ("#" + this.id + "Drop");
	var showId = ("#" + this.id + "Show");
	var closeId = ("#" + this.id + "Close");
	$("" + listId + "").toggleClass("hidden");
	$("" + showId + "").toggle();
	$("" + closeId + "").toggle();
});

// generates dropdowns based on objects in optionsObjects.js

for (i=0; i < categories.length; i++){
		document.getElementById('header').innerHTML 	
			+='<div class="headerItem" onclick="headerlink(this.id)" id="top'+categories[i].name+'">'
			+'<p>'+categories[i].name+'</p>'
			+'</div>'
} // for end

for (i=0; i < languages.length; i++){
	if (languages[i].abv === "en") {
		document.getElementById('filterLangList').innerHTML 	
			+= '<option value="'+languages[i].abv+'" selected="selected"">' + languages[i].fullName + '</option>'
	} else
		document.getElementById('filterLangList').innerHTML 	
			+= '<option value="'+languages[i].abv+'">' + languages[i].fullName + '</option>'
} // for end

for (i=0; i < categories.length; i++){
	document.getElementById('filterCatList').innerHTML 	
		+= '<option value="'+categories[i].name+'">' + categories[i].name + '</option>'
} // for end

for (i=0; i < countries.length; i++){
	if (countries[i].abv === "nz") {
		document.getElementById('filterCntList').innerHTML 	
			+= '<option value="'+countries[i].abv+'" selected="selected"">' + countries[i].fullName + '</option>'
	} else
		document.getElementById('filterCntList').innerHTML 	
			+= '<option value="'+countries[i].abv+'">' + countries[i].fullName + '</option>'
} // for end

//icon swap on filters plus hide and show dropdown options

function languagecheck(){
	var l = document.getElementById("filterLangList");
	searchLanguage = l.options[l.selectedIndex].value;
	var searchLanguageDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterLangText').innerHTML 	
		= 'Language: '+searchLanguageDisplay+''
	$("#filterLangDrop").toggleClass("hidden");
	$("#filterLangShow").toggle();
	$("#filterLangClose").toggle();
	languageAdd = "true";
}; // languagecheck() end

function sortbycheck(){
	var l = document.getElementById("filterOptList");
	searchSort = l.options[l.selectedIndex].value;
	var searchSortDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterOptText').innerHTML 	
		= 'Sort by: '+searchSortDisplay+''
	$("#filterOptDrop").toggleClass("hidden");
	$("#filterOptShow").toggle();
	$("#filterOptClose").toggle();
	sortbyAdd = "true";
}; // sortbycheck() end

function countrycheck(){
	var l = document.getElementById("filterCntList");
	searchCnt = l.options[l.selectedIndex].value;
	var searchCntDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterCntText').innerHTML 	
		= 'Country: '+searchCntDisplay+''
	$("#filterCntDrop").toggleClass("hidden");
	$("#filterCntShow").toggle();
	$("#filterCntClose").toggle();
	countryAdd = "true";
}; // countrycheck() end

function categorycheck(){
	var l = document.getElementById("filterCatList");
	searchCat = l.options[l.selectedIndex].value;
	var searchCatDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterCatText').innerHTML 	
	= 'Category: '+searchCatDisplay+''
	$("#filterCatDrop").toggleClass("hidden");
	$("#filterCatShow").toggle();
	$("#filterCatClose").toggle();
	categoryAdd = "true";
}; // categorycheck() end

function searchcheck(){
	searchKey = document.getElementById("searchBar").value;
	keyAdd = "true";
}

//set API key

var k = JSON.parse(apiKey);
key = k[0].key;
var baseUrlAll = 'http://newsapi.org/v2/everything?';

// search param vars

var searchKey = "";
var searchLanguage = "";
var searchSort = "";
var searchCnt = "";
var searchCat = "";

function clearSearchTerms(){
	searchKey = "";
	searchLanguage = "";
	searchSort = "";
	searchCnt = "";
	searchCat = "";
}

//checks for search url

var keyAdd = null;
var countryAdd = null;
var categoryAdd = null;
var languageAdd = null;
var sortbyAdd = null;

function clearAdd(){
	keyAdd = null;
	countryAdd = null;
	categoryAdd = null;
	languageAdd = null;
	sortbyAdd = null;
}

var useAllUrl = null;
var useTopUrl = "true";

// function to create new search request

function loadPaste(){
  baseUrl = 'http://newsapi.org/v2/top-headlines?';
  newUrl();
  homeResults(baseUrl);
}

//generate url to search with depending on what filters are active

function newUrl(){

  if(countryAdd != null)baseUrl += "country=" + searchCnt + "&";

  if(keyAdd != null)baseUrl += "q=" + searchKey + "&";

  if(categoryAdd != null)baseUrl += "category=" + searchCat + "&";

  if(baseUrl === 'http://newsapi.org/v2/top-headlines?')baseUrl += "country=nz&";
  
  baseUrl += "apiKey=" + key;
  console.log(baseUrl)
} //newUrl() end

function newUrlAll(){

  if(languageAdd != null)baseUrlAll += "language=" + searchLanguage + "&";

  if(keyAdd != null)baseUrlAll += "q=" + searchKey + "&";

  if(sortbyAdd != null)baseUrlAll += "sortBy=" + searchSort + "&";

  if(baseUrlAll === 'http://newsapi.org/v2/everything?')baseUrlAll += "q=news&language=en&sortBy=popularity&";
  
  baseUrlAll += "apiKey=" + key;
  console.log(searchLanguage)
  console.log(baseUrlAll)
} // newurlAll end

// function for returning the home page style results

function homeResults(u){
  $.ajax({
    url: u,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<1; i++){
      	document.getElementById('contentArea').innerHTML 
      	// headliner article
		+='<div class="headliner" onclick="loadSingle(this.id)" id="'+i+'">'
		+'<div class="headlinerImg roundedB" id="headLinerImg");">'
		+'<h2 class="headlinerTitle">'+data.articles[i].title+'</h2>'
		+'<p class="headlinerAuthor">'+data.articles[i].author+'</p>'
		+'<p class="headlinerDate">'+data.articles[i].publishedAt.substring(0, 10)+'</p>'
		+'</div>'
		+'<div class="headlinerBlurb">'
		+'<p>'+data.articles[i].content+'</p>'
		+'</div>'
		+'<div class="headlinerRead">'
		+'<h3 id="art1Link">read more</h3>'
		+'</div>'
		+'</div>'
		document.getElementById('headLinerImg').style.backgroundImage = "url("+data.articles[i].urlToImage+")";
		} // for end
      for(i=1; i<data.articles.length; i++){
      	// if statement here will alternate lay outs of articles
      	if (isEven(i) === false) {
	        document.getElementById('contentArea').innerHTML 
			+= '<div class="article" onclick="loadSingle(this.id)" id="'+i+'">'
			+ '<div class="articleImg roundedB">'
			+ '<img src="'+data.articles[i].urlToImage+'">'
			+ '</div>     '
			+ '<div class="articleText">'
			+ '<p class="articleTextTitle">'+data.articles[i].title+'</p>'
			+ '<p class="articleTextAuthor articleDetailText">'+data.articles[i].author+'</p>'
			+ '<p class="articleTextDate articleDetailText">'+data.articles[i].publishedAt.substring(0, 10)+'</p>'
			+ '<p class="articleTextRead ">read</p>'
			+ '</div>'
			+ '</div>'
			} else {
        	document.getElementById('contentArea').innerHTML 
			+= '<div class="article" onclick="loadSingle(this.id)" id="'+i+'">'
			+ '<div class="articleText">'
			+ '<p class="articleTextTitle">'+data.articles[i].title+'</p>'
			+ '<p class="articleTextAuthor articleDetailText">'+data.articles[i].author+'</p>'
			+ '<p class="articleTextDate articleDetailText">'+data.articles[i].publishedAt.substring(0, 10)+'</p>'
			+ '<p class="articleTextRead ">read</p>'
			+ '</div>'
			+ '<div class="articleImg roundedB">'
			+ '<img src="'+data.articles[i].urlToImage+'">'
			+ '</div>'
			+ '</div>'
        	} // if else end
  		} // for end
    }, //data end
    error: function(){
    console.log('error');
    }//error end 
  });//ajax ending here  
} // homeresults() end

// determine if number is even or odd (for alternating lay out)

function isEven(value) {
	if (value%2 == 0){
		return true;
	}
	else	{
		return false;
	}
}; //isEven() end

// function to paste home page results with default search url (NZ, top)

loadPaste();

// function for loading a single articles detail within a page

function loadSingle(clicked_id){
	baseUrl = 'http://newsapi.org/v2/top-headlines?';
	baseUrlAll = 'http://newsapi.org/v2/everything?';
	id = clicked_id;
	if (useTopUrl != null){
		newUrl(); // if any filters are in place will match the current search
		singleArticle(baseUrl, id);
	} else {
		newUrlAll();
		singleArticle(baseUrlAll, id);
	}
	
	
} // loadSinle() end

function singleArticle(x, i){
	// function passed with x & i as baseUrl, clicked_id
	console.log('single fired')
	var id = i;
	$.ajax({
    url: x,
    type:'GET',
    data:'json',
    success: function(data) {
	    console.log(data);
		document.getElementById('singleArticle').innerHTML = "";
		for(i=0; i<data.articles.length; i++){
			if (i == id){
				document.getElementById('singleArticle').innerHTML 
				// article layout when clicked on
				+='<div class="articleFull" id="articleL">'
				+'<div class="articleReturn barSml">'
				+'<p onclick="hideArticle()"><i class="fa fa-angle-left"></i> Return</p>'
				+'</div>'
				+'<div class="articleHero" >'
				+'<div class="heroContent" id="heroBg'+i+'">'
				+'<h2>'+data.articles[i].title+'</h2>'
				+'<div>'
				+'<h3>'+data.articles[i].author+'</h3>'
				+'<h3>'+data.articles[i].publishedAt.substring(0, 10)+'</h3>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'<div class="articleContent">'
				+'<p>'+data.articles[i].description+'</p>'
				+'<p>'+data.articles[i].content+'</p>'
				+'<p>Read more at <a href="'+data.articles[i].url+'">this link</a></p>'
				+'</div>'
				+'</div>'
				document.getElementById('heroBg'+i+'').style.backgroundImage = "url("+data.articles[i].urlToImage+")";
				document.getElementById('articleL').style.zIndex = "4";
				} // if end
			} // for end
    }, //data end
    error: function(){
      console.log('error');
    } //error end 
  }); //ajax ending here  
}; // singleArticle() end

// function for links in header

$("#homeBtn").click(function(){
	document.getElementById('contentArea').innerHTML = "";
	clearAdd();
	clearSearchTerms();
	loadPaste();
});


$("#headerTop").click(function(){
	document.getElementById('contentArea').innerHTML = "";
	clearAdd();
	clearSearchTerms();
	loadPaste();
});

function headerlink(clicked_id){
	clearAdd();
	clearSearchTerms();
    baseUrl = 'http://newsapi.org/v2/top-headlines?';
    opt = clicked_id;
    opt = opt.substr(3);
    document.getElementById('contentArea').innerHTML = "";
    categoryAdd = "true";
    countryAdd = "true";
    searchCat = opt;
    searchCnt = "nz";
    useAllUrl = null;
	useTopUrl = "true";
    newUrl(); // if any filters are in place will match the current search
    homeResults(baseUrl);
} // headerlink() end

// search w filters functions 

$("#searchBar").click(function(){
	$("#searchBar").css({
		"border" : "solid 1px lightgrey",
	})
});

$("#searchAllConfirm").click(function(){
	if (keyAdd != null){
	searchByAll();
} else {
	$("#searchBar").css({
		"border" : "solid 1px red",
	});
	document.getElementById("searchBar").placeholder = " Please enter a search term";
}
})

function searchByAll(){
    baseUrlAll = 'http://newsapi.org/v2/everything?';
    document.getElementById('contentArea').innerHTML = "";
    newUrlAll(); // if any filters are in place will match the current search
    homeResults(baseUrlAll);
    $("#searchBox").css({
		"display" : "none",
	});
	useAllUrl = "true";
	useTopUrl = null;
} // headerlink() end

$("#searchTopConfirm").click(function(){
	if (keyAdd != null){
	searchByTop();
} else {
	$("#searchBar").css({
		"border" : "solid 1px red",
	});
	document.getElementById("searchBar").placeholder = " Please enter a search term";
}
})

function searchByTop(){
    baseUrl = 'http://newsapi.org/v2/top-headlines?';
    document.getElementById('contentArea').innerHTML = "";
    newUrl(); // if any filters are in place will match the current search
    homeResults(baseUrl);
    $("#searchBox").css({
		"display" : "none",
	});
	useAllUrl = null;
	useTopUrl = "true";
} // headerlink() end

//removes article

function hideArticle(){
	document.getElementById('singleArticle').innerHTML = "";
	$("#articleL").toggleClass("flex").toggleClass("hidden");
}

//top Nav hide show

$("#menuOpen",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "flex",    
    });
    $("#articleL").css({
    	"top" : "7.5rem",    
    });
    $("#navContainer").css({
    	"height" : "7.5rem",    
    });
});

$("#menuClose, #searchTopConfirm, #searchAllConfirm, #homeBtn",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "none",    
    });
    $("#articleL").css({
    	"top" : "3rem",    
    });
    $("#navContainer").css({
    	"height" : "3rem",    
    });
});

// sticky test

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navContainer");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    $("#bumper").toggle();
  } else {
    navbar.classList.remove("sticky");
  }
}