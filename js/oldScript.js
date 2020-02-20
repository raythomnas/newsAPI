
// function generalTest(x){
//   $.ajax({
//     url: x,
//     type:'GET',
//     data:'json',
//     success: function(data) {
//       console.log(data);
//       var i;
//       for(i=0; i<data.articles.length; i++){
//         document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p class="" src="">'+data.articles[i].title+'</p>' + '</div>';
//       }
//     },//data end
//     error: function(){
//       console.log('error');
//     }//error end 
//   });//ajax ending here
// } 



// general(); // fill page with preset options

// document.getElementById('topSearchButton').addEventListener('click', function(e){

//   keyword = document.getElementById('searchWord').value; 
//   console.log(keyword);
//   country = document.getElementById('country').value;
//   console.log(country);
//   category = document.getElementById('category').value;
//   console.log(category);
//   document.getElementById('dump').innerHTML = ""; // clear page

//   paramCheck(); // checks which options are selected and which vars to set

//   var x = url; // set which search http to use

//   generalTest(x); //fire off funcitno
//   });




//checks for every set of parameters to be selected and places relavent url into url var
// function paramCheck(){
// if ((keyCheck === null) && (categoryCheck === null) && (countryCheck === null)) {
//   console.log('all null');
// } else if ((keyCheck === "checked") && (categoryCheck === null) && (countryCheck === null)) {
//   console.log('key checked');
//   url = `http://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${key}`;
// } else if ((keyCheck === null) && (categoryCheck === "checked") && (countryCheck === null)) {
//   console.log('categoryCheck checked');
//   url = `http://newsapi.org/v2/top-headlines?category=${category}&apiKey=${key}`;
// } else if ((keyCheck === null) && (categoryCheck === null) && (countryCheck === "checked")) {
//   console.log('country checked');
//   url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
// } else if ((keyCheck === "checked") && (categoryCheck === "checked") && (countryCheck === null)) {
//   console.log('key and category checked');
//   url = `http://newsapi.org/v2/top-headlines?q=${keyword}&category=${category}&apiKey=${key}`;
// } else if ((keyCheck === "checked") && (categoryCheck === null) && (countryCheck === "checked")) {
//   console.log('key and country checked');
//   url = `http://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&apiKey=${key}`;
// } else if ((keyCheck === null) && (categoryCheck === "checked") && (countryCheck === "checked")) {
//   console.log('category and country checked');
//   url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}`;
// } else if ((keyCheck === "checked") && (categoryCheck === "checked") && (countryCheck === "checked")) {
//   console.log('all checked');
//   url = `http://newsapi.org/v2/top-headlines?q=${keyword}&country=${country}&category=${category}&apiKey=${key}`;
// }
// }




// url = `http://newsapi.org/v2/top-headlines?country=nz&apiKey=${key}`;


// generic search for on load & testing, as well as everything version for testing
// var test = `http://newsapi.org/v2/top-headlines?country=nz&apiKey=${key}`;
// // var test = `http://newsapi.org/v2/everything?language=ud&apiKey=${key}`;

// function general(){
//   $.ajax({
//     url: test,
//     type:'GET',
//     data:'json',
//     success: function(data) {
//       console.log(data);
//       var i;
//       for(i=0; i<data.articles.length; i++){
//         document.getElementById('dump').innerHTML += '<div class="col-3">' + '<p class="" src="">'+data.articles[i].title+'</p>' + '</div>';
//       }
//     },//data end
//     error: function(){
//       console.log('error');
//     }//error end
//   });//ajax ending here
// }
