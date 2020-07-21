/*(function(){
	var names=["Monika", "Joe", "Jenny", "Ross", "john", "walter", "paul", "jesika"]
	for (var i=0; i<names.length; i++){
		var firstletter = names[i].charAt(0).toLowerCase();
		if (firstletter=='j'){
			goodbyename.speak(names[i]);
		}else {
			helloname.speak(names[i]);
		}
	}
})();*/

/*function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
}();*/

function hello(name){
	console.log('Hello ' + names[i]);
};
function goodbye(name){
	console.log('Goodbye ' + names[i]);
};
var names=["Monika", "Joe", "Jenny", "Ross", "john", "walter", "paul", "jesika"]
for (var i in names){
	var letter=((names[i]).charAt(0)).toLowerCase();
	if(letter=="j"){
		goodbye(names[i]);
	}else{
		hello(names[i]);
	}
}
