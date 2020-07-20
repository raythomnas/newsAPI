//top Nav hide show

$("#menuOpen",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "flex",    
    });
});

$("#menuOpen",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "flex",    
    });
});


$("#searchAll, #searchTop",).click(function(){
    $("#topFilters, #allFilters",).toggle();
    $("#searchAll, #searchTop",).toggleClass("redText");
});

//search menu hide show // filter drop downs

$("#filterLang, #filterOpt, #filterCat, #filterCnt",).click(function(clicked_id){
	var listId = ("#" + this.id + "Drop");
	var showId = ("#" + this.id + "Show");
	var closeId = ("#" + this.id + "Close");
	$("" + listId + "").toggleClass("hidden");
	$("" + showId + "").toggle();
	$("" + closeId + "").toggle();
});

	//icon swap on filters

$("#menuOpen",).click(function(){
    $("#menuOpen, #menuClose",).toggle();
    $("#navigation").css({
    	"display" : "flex",    
    });
});

for (i=0; i < images.length; i++){
	document.getElementById('filterLangDrop').innerHTML 	
	+= '<p> ' + images[i].fullName + ' </p>'
}