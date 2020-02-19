var k = JSON.parse(apiKey);
key = k[0].key;

$(document).ready(function(){

var test = `http://newsapi.org/v2/top-headlines?country=nz&apiKey=${key}`;
var test2 = `http://newsapi.org/v2/everything?q=${keyword}&apiKey=${key}`;

function general(){
  $.ajax({
    url: test,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<data.articles.length; i++){
        document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p class="" src="">'+data.articles[i].title+'</p>' + '</div>';
      }
    },//data end
    error: function(){
      console.log('error');
    }//error end
  });//ajax ending here
}

function generalTest(x){
  $.ajax({
    url: x,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<data.articles.length; i++){
        document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p class="" src="">'+data.articles[i].title+'</p>' + '</div>';
      }
    },//data end
    error: function(){
      console.log('error');
    }//error end 
  });//ajax ending here
} 

//search vars
var keyword = "";
var country = "";
var category = "";

//checks for search url
var keyCheck = null;
var countryCheck = null;
var categoryCheck = null;

general();

document.getElementById('searchButton').addEventListener('click', function(e){
  keyword = document.getElementById('searchWord').value; 
  console.log(keyword);
  test2 = `http://newsapi.org/v2/everything?q=${keyword}&apiKey=${key}`;
  // orient = document.getElementById('orient').value;
  // console.log(orient)
  // number = document.getElementById('numbers').value;
  // console.log(number)
  document.getElementById('dump').innerHTML = ""; // clear page
  var x = test2; // set which search htttp to use

  generalTest(x); //fire off funcitno
  });
});

// var input = document.getElementById("searchWord");
// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("searchButton").click();
//   }
// });

// console.log('changes');

$(document).on('change','#category',function(){
    alert('Change Happened');
    categoryCheck = "checked";
});

$(document).on('change','#searchWord',function(){
    alert('Change Happened');
    keyCheck = "checked";
});

$(document).on('change','#country',function(){
    alert('Change Happened');
    countryCheck = "checked";
});