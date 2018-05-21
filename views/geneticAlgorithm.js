function pickInitialColour(index){
	var colours = ['#A33471','#34A374','#C6C7C4','#6234A3','#A39B49','#EEFC71','#353B3C','#FC7D71','#99FCF5','#CEFC99']
	return colours[index]; 
}
function draw(){
	var prefix = 'entity1';
	var canvas;
	for(var i = 0; canvas = document.getElementById(prefix+i); i++){
		if (canvas.getContext){
			var ctx = canvas.getContext('2d'); 
			var X = canvas.width / 2;
			var Y = X;
			var R = 13;
			ctx.beginPath();
			ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
			ctx.lineWidth = 3;
			ctx.strokeStyle = '#000000';
			ctx.stroke();
			var initialColour = pickInitialColour(i);
			ctx.fillStyle = initialColour;
			ctx.fill();
		}
	}
}
function shuffle(array) {
	var tmp, current, top = array.length;
	if(top) while(--top) {
		current = Math.floor(Math.random() * (top + 1));
		tmp = array[current];
		array[current] = array[top];
		array[top] = tmp;
	}
	return array;
}
function selection(){
	for (var a = [], i = 0; i < 10; ++i){
		a[i]=i;	
	} 
	a = shuffle(a);
	drawPairs(a);
}
function drawPairs(a){
	var heading = document.getElementById('rightHeading');
	heading.innerHTML = 'Random Selection of Pairs';
	var prefix = 'pair';
	var prefix_label = 'hex';
	for(var i = 0; i < 10; i++){
		var canvas = document.getElementById(prefix+a[i])
		if (canvas.getContext){
			var ctx = canvas.getContext('2d'); 
			var X = canvas.width / 2;
			var Y = X;
			var R = 13;
			ctx.beginPath();
			ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
			ctx.lineWidth = 3;
			ctx.strokeStyle = '#000000';
			ctx.stroke();
			var colour = pickInitialColour(a[i]);
			ctx.fillStyle = colour;
			ctx.fill();
			var label = document.getElementById(prefix_label+i);
			label.innerHTML = colour;
		}
	}
	var showCrossover = document.getElementById('crossoverPointSelectPanel');
	showCrossover.style.display = "block";
}
function crossover(index){
	var hideCrossover = document.getElementById('crossoverPointSelectPanel');
	hideCrossover.style.display = "none";
	var showMutation = document.getElementById('mutationPointSelectPanel');
	showMutation.style.display = "block";
	var prefix_label = 'hex';
	var prefix_label_new = 'newHex';
	for(var i = 0, j = 0; i < 10; i = i+2, j++){
		var label = document.getElementById(prefix_label_new+j);
		var label1 = document.getElementById(prefix_label+i);
		var label2 = document.getElementById(prefix_label+(i+1));
		label.innerHTML = label1.innerHTML.substring(0, index+1) + label2.innerHTML.substring(index+1);
	}
	afterCrossover();
}
function afterCrossover(){
	var prefix_canvas = 'newOffspring';
	var prefix_label = 'newHex';
	for(var i = 0; canvas = document.getElementById(prefix_canvas+i); i++){
		if (canvas.getContext){
			var ctx = canvas.getContext('2d'); 
			var X = canvas.width / 2;
			var Y = X;
			var R = 13;
			ctx.beginPath();
			ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
			ctx.lineWidth = 3;
			ctx.strokeStyle = '#000000';
			ctx.stroke();
			var label = document.getElementById(prefix_label+i);
			var colour = label.innerHTML;
			ctx.fillStyle = colour;
			ctx.fill();
		}
	}
}
function randomHex(){
	var res = Math.floor(Math.random() * 16);
	if (res == 10){
		res = 'A'
	}
	if (res == 11){
		res = 'B'
	}
	if (res == 12){
		res = 'C'
	}
	if (res == 13){
		res = 'D'
	}
	if (res == 14){
		res = 'E'
	}
	if (res == 15){
		res = 'F'
	}
	return res;
}
function mutation(index){
	var hideMutation = document.getElementById('mutationPointSelectPanel');
	hideMutation.style.display = "none";
	var showFitness = document.getElementById('fitnessEvaluation');
	showFitness.style.display = "block";
	var prefix_label = 'newHex';
	for(var i = 0; i < 5; i++){
		var label = document.getElementById(prefix_label+i);
		var mutatedGene = randomHex();
		label.innerHTML = label.innerHTML.substring(0, index+1) + mutatedGene + label.innerHTML.substring(index + 2);
	}
	afterCrossover();
}
function fitnessEvaluation(){
	
}