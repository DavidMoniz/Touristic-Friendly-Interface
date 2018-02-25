
var menuOption;

/*Adventure*/
var simpleAdventure = [["levadadonorte.jpg","Levada do Norte","Great view of the local houses and of the mountains."],
						["caldeiraoverde.jpg","Caldeirão Verde","Magical walkside to a rural area full of nature."],
						["25fontes.jpg","25 Fontes","Waterfalls everywhere including tree hanging in diagonal."],
						["levadatornos.jpg","Levada dos Tornos","Follow the water stream and the amazing view!"],
						["levadatornos.jpg","Levada dos Tornos","Follow the water stream and the amazing view!"],
						["levadatornos.jpg","Levada dos Tornos","Follow the water stream and the amazing view!"],
						["levadatornos.jpg","Levada dos Tornos","Follow the water stream and the amazing view!"],
						["levadatornos.jpg","Levada dos Tornos","Follow the water stream and the amazing view!"],
						["levadatornos.jpg","Levada dos Tornos","Follow the water stream and the amazing view!"]]
var radicalAdventure = [["canyoning.jpg","Canyoning","Only a few are brave enough to do this one!"],
						["mountainbiking.jpg","Mountain biking","Great way to boast your adrenaline!"],
						["paragliding.jpg","Paragliding","Join us and see the island from the top."],
						["surf.jpg","Surf","Catch some atlantic waves with us!"],
						["surf.jpg","Surf","Catch some atlantic waves with us!"],
						["surf.jpg","Surf","Catch some atlantic waves with us!"],
						["surf.jpg","Surf","Catch some atlantic waves with us!"],
						["surf.jpg","Surf","Catch some atlantic waves with us!"],
						["surf.jpg","Surf","Catch some atlantic waves with us!"]
						]
/*Sights*/
var mountains = [["cabogirao.jpg","Cabo Girão","A 360º view of the sky, the mountains and the sea!"],
				 ["pontadopargo.jpg","Ponta do Pargo","Visit the end part of the island with huge amazing cliffs"],
				 ["pontadesaolourenco.jpg","Ponta de São Lourenço","Visit the other end part of the island where you can see both north and south of the island!",
				 	"         Part of the natural park of Madeira, this course is in the eastern part of the Island, right at the tip of Caniçal. "+
				 	"         Along the way hikers can marvel at the fabulous scenery of the north and south coast of the Island."+
				 	" The sense of the serenity of the southern sea contrasting with the aggressiveness of the northern sea is indescribable."+
				 	" On the horizon, to the south are distinguished Desertas Islands and to the north the Golden Island of Porto Santo."+
					" Along the way, with the characteristic wind characteristic of this area, you can appreciate beautiful specimens of unique species of fauna and flora of the Region."+
					" Also there are very curious rock formations, result of the volcanic origin of the Island. Enjoy to appreciate its details."+
					" After a few kilometers, descend to the seashore and enjoy the quiet and freshness of the turquoise southern sea. Take a dip and return cooler and lighter. Have a good trip!"],
				 ["madeira.jpg","Camara de Lobos","A recent city that has been reconstructed a village to a city!"],
				 ["madeira.jpg","Camara de Lobos","A recent city that has been reconstructed a village to a city!"],
				 ["madeira.jpg","Camara de Lobos","A recent city that has been reconstructed a village to a city!"],
				 ["madeira.jpg","Camara de Lobos","A recent city that has been reconstructed a village to a city!"],
				 ["madeira.jpg","Camara de Lobos","A recent city that has been reconstructed a village to a city!"],
				 ["madeira.jpg","Camara de Lobos","A recent city that has been reconstructed a village to a city!"]]
var sea = [["pontagorda.jpg","Ponta gorda","Very old beach that has been very loyal to local beaches!",
				"The Ponta Gorda Bathing Complex is located in the tourist area of Funchal. This the square is a large place, pleasant quiet. The Ponta Gorda Bathing Complex has two saltwater pools, one for adults and one for children equipped with children’s play equipment and a natural pool of water. There is also access to the sea where you can enjoy and swim in crystal clear waters."
				 +"This complex offers: Guarded Beach; First Aid services; bathhouses; Access to the sea; Natural Pool Tide; Pool; Children’s pool; Umbrellas and chairs rental service; WiFi service; Blue Flag; Beach Library; Bar Support; Accessible Beach;"],
		   ["praiaformosa.jpg","Praia Formosa","Rock based beach that has a nice view"],
		   ["lido.jpg","Lido","Lido has a huge swimming pool and places to jump high enough!"],
		   ["portomoniz.jpg","Porto Moniz","Vulcanic based swimming pool with sea water!"],
		   ["portomoniz.jpg","Porto Moniz","Vulcanic based swimming pool with sea water!"],
		   ["portomoniz.jpg","Porto Moniz","Vulcanic based swimming pool with sea water!"],
		   ["portomoniz.jpg","Porto Moniz","Vulcanic based swimming pool with sea water!"],
		   ["portomoniz.jpg","Porto Moniz","Vulcanic based swimming pool with sea water!"],
		   ["portomoniz.jpg","Porto Moniz","Vulcanic based swimming pool with sea water!"]
		   ]

/*Culture*/
var events = [["festadacereja.jpg","Festa da Cereja","Cherry Festival and a lot of entertainment!"],
			  ["lameiros.jpg","Lameiros","Summer party full of drinking and music!"],
			  ["chaodalagoa.jpg","Chão da Lagoa","Presidential party of Alberto João Jardim for locals!",
			  "The party is open to all the people of Madeira and not only to the militants and sympathizers of the party, who want to spend a pleasant summer day, different and with guaranteed animation. "],
			  ["festadaflor.jpg","Festa da Flor","Huge parade of the flower festivals!"],
			  ["festadaflor.jpg","Festa da Flor","Huge parade of the flower festivals!"],
			  ["festadaflor.jpg","Festa da Flor","Huge parade of the flower festivals!"],
			  ["festadaflor.jpg","Festa da Flor","Huge parade of the flower festivals!"],
			  ["festadaflor.jpg","Festa da Flor","Huge parade of the flower festivals!"],
			  ["festadaflor.jpg","Festa da Flor","Huge parade of the flower festivals!"]
				]
var traditions = [["bailinho.jpg","Bailinho","Traditional dance of the folkure of the island"],
				  ["bordado.jpg","Bordado","Women used to sew all the long during the past"],
				  ["caralinho.jpg","Caralinho","A wooden tool to blend honey and alchool together"],
				  ["divino.jpg","Divino de Espirito Santo","A religious activity where catholics' houses are blessed!"],
				  ["divino.jpg","Divino de Espirito Santo","A religious activity where catholics' houses are blessed!"],
				  ["divino.jpg","Divino de Espirito Santo","A religious activity where catholics' houses are blessed!"],
				  ["divino.jpg","Divino de Espirito Santo","A religious activity where catholics' houses are blessed!"],
				  ["divino.jpg","Divino de Espirito Santo","A religious activity where catholics' houses are blessed!"],
				  ["divino.jpg","Divino de Espirito Santo","A religious activity where catholics' houses are blessed!"]]

/*Food*/
var drinks = [["poncha.jpg","Poncha","Famous regional drink loved by locals and tourists. Fresh and Fruity!"],
			  ["nikita.jpg","Nikita","Great drink to refresh and to chill. Best without alchool."],
			  ["pedecabra.jpg","Pé de Cabra","Strong beverage with a unique mixture that surprises many tourists."],
			  ["brisa.jpg","Brisa Maracujá","Sweet beverage that has the taste of passion fruit!"],
			  ["brisa.jpg","Brisa Maracujá","Sweet beverage that has the taste of passion fruit!"],
			  ["brisa.jpg","Brisa Maracujá","Sweet beverage that has the taste of passion fruit!"],
			  ["brisa.jpg","Brisa Maracujá","Sweet beverage that has the taste of passion fruit!"],
			  ["brisa.jpg","Brisa Maracujá","Sweet beverage that has the taste of passion fruit!"],
			  ["brisa.jpg","Brisa Maracujá","Sweet beverage that has the taste of passion fruit!"]
			  ]
var food = [["espetada.jpg","Espetada","Grilled meat on a stick with seasoning!", 
				"Grilled meat on a stick with seasoning! Espetadas are tender beef skewers which are a very traditional Portuguese dish, especially in the islands of Madeira.",
				" "],
			["milho.jpg","Milho","Corn based meal that is cutted into pieces fried!"],
			["bolodocaco.jpg","Bolo do Caco","Flat bread with garlic butter! Locals love them!"],
			["lapas.jpg","Lapas","Fresh lampits to fry and eat them with lemon!"],
			["lapas.jpg","Lapas","Fresh lampits to fry and eat them with lemon!"],
			["lapas.jpg","Lapas","Fresh lampits to fry and eat them with lemon!"],
			["lapas.jpg","Lapas","Fresh lampits to fry and eat them with lemon!"],
			["lapas.jpg","Lapas","Fresh lampits to fry and eat them with lemon!"],
			["lapas.jpg","Lapas","Fresh lampits to fry and eat them with lemon!"]
			]


var emptyInfoDisplayBoolean = 1;



function emptyInfoDisplay() {
	if(emptyInfoDisplayBoolean==0) {
	$("#infoDisplayBodyTemp").remove();
	$("#infoDisplayBody").append(
	'<div id="infoDisplayBodyTemp" class="container text-center" >'+
    '</div>');
    emptyInfoDisplayBoolean=1;
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function updateInfoDisplay(x,y,z) {
	menuOption = x;
	if(!$('#infoDisplayBody').is(':visible')){
		$("#infoDisplayBody").slideToggle("slow");
		$("#finalDisplayBody").slideUp("slow");
	}

	emptyInfoDisplay();
	var array = [0];
	for(p=1;p<x.length;p++) {
		array.push(p);
	}
	shuffle(array);

	if(emptyInfoDisplayBoolean==1) {
		$("#infoDisplayBodyTemp").append(
			'<br>'+
		    '<div id="row" class="row">'+
		    '</div>');

		for(i=0;i<x.length;i++){

			$("#row").append(
		    	'<div class="infobox col-sm-4">'+
		    	'<div class="infoDisplay" id="infoDisplayID">'+
		    	'<img id="imageID" src="images/madeira.jpg" class="img-responsive" >'+
		    	'<p class="title" id="titleID">DONEEEEE</p>'+
		    	'<p class="section"><a class="section1">Sights</a> > <a class="section2">Sea</a></p>'+
		    	'<p class="text" id="textID">Beautiful sea pool in funchal where locals and turists go for a swim.</p>'+
		    	'<br>'+
		    	'</div>'+
		    	'</div>');

			$("#infoDisplayID").attr('id','infoDisplay'+i);
			$("#imageID").attr('id','image'+i);
			$("#titleID").attr('id','title'+i);
			$("#textID").attr('id','text'+i);

			$("#image"+i).attr("src","images/"+x[i][0]);
			$("#title"+i).text(x[i][1]);
			$("#text"+i).text(x[i][2]);
			}
		$(".section1").text(y);
		$(".section2").text(z);
		emptyInfoDisplayBoolean=0;
	}
	updateJQUERYafterDOMchanges();
}

function updateFinalDisplay(option,u) {
	$("#fimage").attr("src","images/"+option[u][0]);
	$("#ftitle").text(option[u][1]);
	if(option[u][3]==undefined){
		$("#ftext").text(option[u][2]);
	}
	else{
		$("#ftext").text(option[u][3]);
	}
	
	}

function backOption() {
	$("#finalDisplayBody").slideUp("slow");
	$("#infoDisplayBody").slideDown("slow");
}

function updateJQUERYafterDOMchanges() {
$(document).ready(function(){
		 $(".infoDisplay").click(function(){
	     	var displayBox = this.id;
	        $("#infoDisplayBody").slideUp("slow");
			updateFinalDisplay(menuOption,displayBox.charAt(displayBox.length - 1));
	        $("#finalDisplayBody").slideDown("slow");
	    });

	$("#option1").click(function(){
		$("#option1").css("background-color","#888888");
        $("#option1").css("color","white");
        $("#option2").css("background-color","white");
        $("#option2").css("color","#888888");
    });
    $("#option2").click(function(){
        $("#option2").css("background-color","#888888");
        $("#option2").css("color","white");
        $("#option1").css("background-color","white");
        $("#option1").css("color","#888888");
    });
});
}






