var k = JSON.parse(apiKey);
key = k[0].key;

$(document).ready(function(){

//swaps between search all and search top
document.getElementById('allButton').addEventListener('click', function(){
  document.getElementById('topButton').style.backgroundColor = "white";
  document.getElementById('allButton').style.backgroundColor = "grey";
  document.getElementById('topSection').style.display = "none";
  document.getElementById('allSection').style.display = "block";
  document.getElementById("topSearchButton").style.display = "none";
  document.getElementById("allSearchButton").style.display = "block";
  console.log('clicked');
});

document.getElementById('topButton').addEventListener('click', function(){
  document.getElementById('allButton').style.backgroundColor = "white";
  document.getElementById('topButton').style.backgroundColor = "grey";
  document.getElementById('allSection').style.display = "none";
  document.getElementById('topSection').style.display = "block";
  document.getElementById("allSearchButton").style.display = "none";
  document.getElementById("topSearchButton").style.display = "block";
});

// end of param checks for top section

function loadPaste(){
  baseUrl = 'http://newsapi.org/v2/top-headlines?';
  newUrl();
  searchTop(baseUrl);
}

// checks

//search vars
var keyword = "";
var country = "";
var category = ""; 

//checks for search url
var keyCheck = null;
var countryCheck = null;
var categoryCheck = null;

//checks

$(document).on('change','#category',function(){
    categoryCheck = "checked";
    console.log(categoryCheck);
});

$(document).on('change','#searchWord',function(){
    keyCheck = "checked";
    console.log(keyCheck);
});

$(document).on('change','#country',function(){
    countryCheck = "checked";
    console.log(countryCheck);
});

// top search

function searchTop(x){
  $.ajax({
    url: x,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      document.getElementById('dump').innerHTML += '<div class="col-12 p-2 mt-2">' + '<p style="text-align:center">'+data.totalResults+' results found</p>' + '</div>';
      for(i=0; i<data.articles.length; i++){
        document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p class="" src="">'+data.articles[i].title+'</p>' + '</div>';
        resultsFound = true;
      }
    },//data end
    error: function(){
      console.log('error');
    }//error end 
  });//ajax ending here  
} 

var baseUrl = 'http://newsapi.org/v2/top-headlines?';

function newUrl(){
  keyword = document.getElementById('searchWord').value; 
  console.log(keyword);
  country = document.getElementById('country').value;
  console.log(country);
  category = document.getElementById('category').value;
  console.log(category);

  if(countryCheck != null)baseUrl += "country=" + country + "&";

  if(keyCheck != null)baseUrl += "q=" + keyword + "&";

  if(categoryCheck != null)baseUrl += "category=" + category + "&";

  if(baseUrl === 'http://newsapi.org/v2/top-headlines?')baseUrl += "country=nz&";
  
  baseUrl += "apiKey=" + key;
}

document.getElementById('topSearchButton').addEventListener('click', function(){
  baseUrl = 'http://newsapi.org/v2/top-headlines?';
  newUrl();
  console.log(baseUrl);
  document.getElementById('dump').innerHTML = ""; 
  searchTop(baseUrl);
});

//end search top

//begin search all

// checks

//search vars
var keywordAll = "";
var language = "";
var sortBy = ""; 

//checks for search url
var keyCheckAll = null;
var languageCheck = null;
var sortByCheck = null;

//checks

$(document).on('change','#language',function(){
    languageCheck = "checked";
    console.log(languageCheck);
});

$(document).on('change','#searchWord2',function(){
    keyCheckAll = "checked";
    document.getElementById('textWarningKey').style.display = "none";
    document.getElementById('searchWord2').style.border = "";
    console.log(keyCheckAll);
});

$(document).on('change','#sortBy',function(){
    sortByCheck = "checked";
    console.log(sortByCheck);
});

function searchAll(x){
  $.ajax({
    url: x,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<data.articles.length; i++){
        document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p>'+data.articles[i].title+'</p>' + '</div>';
      }
    },//data end
    error: function(){
      console.log('error');
    }//error end 
  });//ajax ending here
} 

var baseUrlAll = 'http://newsapi.org/v2/everything?';

function keyWordAllCheck(){
  if(keyCheckAll === null){
    // alert('enter search word');
    document.getElementById('textWarningKey').style.display = "block";
    document.getElementById('searchWord2').style.border = "solid red 1px";
  } else if (keyCheckAll != null){
    newUrlAll();
  console.log(baseUrlAll);
  document.getElementById('dump').innerHTML = ""; 
  searchAll(baseUrlAll);
  }
  var check = document.getElementById('dump').innerHTML;
  if (check === ""){
    document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p> no results </p>' + '</div>';
  }
}

function newUrlAll(){
  keywordAll = document.getElementById('searchWord2').value; 
  console.log(keyword);
  language = document.getElementById('language').value;
  console.log(country);
  sortBy = document.getElementById('sortBy').value;
  console.log(category);
  if(languageCheck != null)baseUrlAll += "language=" + language + "&";
  if(keyCheckAll != null)baseUrlAll += "q=" + keywordAll + "&";
  if(sortByCheck != null)baseUrlAll += "sortBy=" + sortBy + "&";
  if(baseUrlAll === 'http://newsapi.org/v2/everything?')baseUrlAll += "q=news&language=en&sortBy=popularity&";
  baseUrlAll += "apiKey=" + key;
}


document.getElementById('allSearchButton').addEventListener('click', function(){
  baseUrlAll = 'http://newsapi.org/v2/everything?';
  keyWordAllCheck();
});

$(document).on('change','#searchWord2',function(){
    document.getElementById('sortBy').innerHTML += '<option value="relevancy">Relevance</option>';
    console.log("key2Check");
});

//executes search function onclick while focused on keyword entry area
var input = document.getElementById("searchWord");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("topSearchButton").click();
  }
});

loadPaste(); // fill with top nz headlines on load

});