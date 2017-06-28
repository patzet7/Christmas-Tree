//Script of Christmas Tree

function drawTree(floor) {
	for (var i = 0; i < floor; i++) {
		var star = '*';
		
		for (var j = 1; j <= i; j++) {
			star += '*';
		}
		console.log(star);	
	}
}
floor = prompt('How many floors');
drawTree(floor);




