//top Nav hide show

$("#menuOpen",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "flex",    
    });
});

$("#menuClose",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "none",    
    });
});


$("#searchAll, #searchTop",).click(function(){
    $("#topFilters, #allFilters",).toggle();
    $("#searchAll, #searchTop",).toggleClass("redText");
});

//search menu hide show // filter drop downs

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

$("#filterLang, #filterOpt, #filterCat, #filterCnt",).click(function(clicked_id){
	var listId = ("#" + this.id + "Drop");
	var showId = ("#" + this.id + "Show");
	var closeId = ("#" + this.id + "Close");
	$("" + listId + "").toggleClass("hidden");
	$("" + showId + "").toggle();
	$("" + closeId + "").toggle();
});

	//icon swap on filters

for (i=0; i < languages.length; i++){
	if (languages[i].abv === "en") {
		document.getElementById('filterLangList').innerHTML 	
	+= '<option value="'+languages[i].abv+'" selected="selected"">' + languages[i].fullName + '</option>'
} else
	document.getElementById('filterLangList').innerHTML 	
	+= '<option value="'+languages[i].abv+'">' + languages[i].fullName + '</option>'
}

function languagecheck(){
	var l = document.getElementById("filterLangList");
	var searchLanguage = l.options[l.selectedIndex].value;
	var searchLanguageDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterLangText').innerHTML 	
	= 'Language: '+searchLanguageDisplay+''
	$("#filterLangDrop").toggleClass("hidden");
	$("#filterLangShow").toggle();
	$("#filterLangClose").toggle();
};

function sortbycheck(){
	var l = document.getElementById("filterOptList");
	var searchSort = l.options[l.selectedIndex].value;
	var searchSortDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterOptText').innerHTML 	
	= 'Sort by: '+searchSortDisplay+''
	$("#filterOptDrop").toggleClass("hidden");
	$("#filterOptShow").toggle();
	$("#filterOptClose").toggle();
};

for (i=0; i < countries.length; i++){
	if (countries[i].abv === "nz") {
		document.getElementById('filterCntList').innerHTML 	
	+= '<option value="'+countries[i].abv+'" selected="selected"">' + countries[i].fullName + '</option>'
} else
	document.getElementById('filterCntList').innerHTML 	
	+= '<option value="'+countries[i].abv+'">' + countries[i].fullName + '</option>'
}

function countrycheck(){
	var l = document.getElementById("filterCntList");
	var searchCnt = l.options[l.selectedIndex].value;
	var searchCntDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterCntText').innerHTML 	
	= 'Country: '+searchCntDisplay+''
	$("#filterCntDrop").toggleClass("hidden");
	$("#filterCntShow").toggle();
	$("#filterCntClose").toggle();
};


for (i=0; i < categories.length; i++){
	document.getElementById('filterCatList').innerHTML 	
	+= '<option value="'+categories[i].name+'">' + categories[i].name + '</option>'
}

function categorycheck(){
	var l = document.getElementById("filterCatList");
	var searchCat = l.options[l.selectedIndex].value;
	var searchCatDisplay = l.options[l.selectedIndex].text;
	document.getElementById('filterCatText').innerHTML 	
	= 'Category: '+searchCatDisplay+''
	$("#filterCatDrop").toggleClass("hidden");
	$("#filterCatShow").toggle();
	$("#filterCatClose").toggle();
};

var k = JSON.parse(apiKey);
key = k[0].key;

// search param vars

var searchKey = "";
var searchLanguage = "";
var searchSort = "";
var searchCnt = "";
var searchCat = "";

//checks for search url
var keyCheck = null;
var countryCheck = null;
var categoryCheck = null;
var languageCheck = null;
var sortbyCheck = null;

// default URL

var baseUrlAll = 'http://newsapi.org/v2/everything?';

// function to create new search request

function loadPaste(){
  baseUrl = 'http://newsapi.org/v2/top-headlines?';
  newUrl();
  homeResults(baseUrl);
}

function newUrl(){
  // keyword = document.getElementById('searchWord').value; 
  // country = document.getElementById('country').value;
  // category = document.getElementById('category').value;

  if(countryCheck != null)baseUrl += "country=" + searchCnt + "&";

  if(keyCheck != null)baseUrl += "q=" + searchKey + "&";

  if(categoryCheck != null)baseUrl += "category=" + searchCat + "&";

  if(baseUrl === 'http://newsapi.org/v2/top-headlines?')baseUrl += "country=nz&";
  
  baseUrl += "apiKey=" + key;
}

// search function 

function homeResults(x){
  $.ajax({
    url: x,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<1; i++){
      	document.getElementById('contentArea').innerHTML 
		+='<div class="headliner" onclick="testArticle(this.id)" id="'+i+'">'
		+'<div class="headlinerImg" id="headLinerImg");">'
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
		}
      for(i=1; i<data.articles.length; i++){
      	if (isEven(i) === false) {
        document.getElementById('contentArea').innerHTML 
		+= '<div class="article" id="'+i+'">'
		+ '<div class="articleImg">'
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
		+= '<div class="article" id="'+i+'">'
		+ '<div class="articleText">'
		+ '<p class="articleTextTitle">'+data.articles[i].title+'</p>'
		+ '<p class="articleTextAuthor articleDetailText">'+data.articles[i].author+'</p>'
		+ '<p class="articleTextDate articleDetailText">'+data.articles[i].publishedAt.substring(0, 10)+'</p>'
		+ '<p class="articleTextRead ">read</p>'
		+ '</div>'
		+ '<div class="articleImg">'
		+ '<img src="'+data.articles[i].urlToImage+'">'
		+ '</div>'
		+ '</div>'
      }
  	}
    },//data end
    error: function(){
      console.log('error');
    }//error end 
  });//ajax ending here  
} 

// determine if number is even or odd (for alternating lay out)

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

loadPaste();

//article viewing js 

$("#art1Link").click(function(){
	$("#article1").toggleClass("flex").toggleClass("hidden");
});

function testArticle(){
	document.getElementById('singleArticle').innerHTML 
		+='<div class="articleFull" id="article1">'
		+'<div class="articleReturn barSml">'
		+'<p onclick="testArticle()">Return</p>'
		+'</div>'
		+'<div class="articleHero">'
		+'<div class="heroContent">'
		+'<h2>TITLE</h2>'
		+'<div>'
		+'<h3>Author</h3>'
		+'<h3>Date</h3>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="articleContent">'
		+'<p></p>'
		+'<img src="images/testImg.jpg">'
		+'</div>'
		+'</div>'
  };