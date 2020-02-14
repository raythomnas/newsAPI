// var k = JSON.parse(apiKey);
// key = k[0].key;

// $(document).ready(function(){

function test(){
  $.ajax({

    url:`https://newsapi.org/v2/everything?q=salsa&apiKey=MYKEY`,
    type:'GET',
    data:'json',
    success: function(data) {
      console.log(data);
      var i;
      for(i=0; i<data.articles.length; i++){
        document.getElementById('dump').innerHTML 
        += '<div class="col-3">'
        + '<p class="" src="">'+data.articles[i].title+'</p>'
        + '</div>'
      }

    },//data end

    error: function(){
      console.log('error');
    }//error end

  });//ajax ending here

};
// });


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

var keyword = "";
var orient = "squarish";
var number = "15";

test()

// document.getElementById('searchButton').addEventListener('click', function(e){
//   // e.preventDefault();
//   keyword = document.getElementById('searchWord').value; 
//   console.log(keyword)
//   orient = document.getElementById('orient').value;
//   console.log(orient)
//   number = document.getElementById('numbers').value;
//   console.log(number)
//   document.getElementById('dump').innerHTML = "";
//   test();

// });