var audio 

function controlMusic(clip){
   audio.pause()
   audio = new Audio(clip)
   audio.play()
};

$("#heat").click(function(){
	$(".quote").html('Brother, you are going down.');
	controlMusic("sounds/heat.mp3");
});

$("#godfather").click(function(){
	$(".quote").html('You broke my heart.');
	controlMusic("sounds/brokemyheart.mp3");
});
	
$("#scarface").click(function(){
	$(".quote").html('Say hello to my leetle fren!');
	controlMusic("sounds/1470869502.mp3");
});

$("#scent").click(function(){
    $(".quote").html('I&#8217m just getting warmed up!');
  	controlMusic("sounds/Scent3.mp3");
});