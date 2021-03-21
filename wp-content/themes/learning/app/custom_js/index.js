/* 
var animCanvases = document.querySelectorAll('.anim-canvas');
animCanvases.forEach(function(canvas, index){
	canvas.id = 'canvas_' + index;
});

var mypapers = [];

for (var i = 0; i < animCanvases.length; i++){
	var curAnim = animCanvases[i]; 
	initPaper(i, curAnim)
}


function initPaper(id, canvasElement) { 

	mypapers[id] = new paper.PaperScope();
	paper = mypapers[id];

	paper.setup(canvasElement);

	var points = 25;

	var length = canvasElement.dataset.length;
	var color = canvasElement.dataset.color;
	var width = canvasElement.dataset.width;

	var path = new Path({
		strokeColor: color,
		strokeWidth: width,
		strokeCap: 'round'
	});

	var start = 0;
	for (var i = 0; i < points; i++)
		path.add(start + new Point(i * length, 0));


		var tool = new paper.Tool();
		tool.onMouseMove = function(event) {
		path.firstSegment.point = event.point;
		for (var i = 0; i < points - 1; i++) {
			var segment = path.segments[i];
			var nextSegment = segment.next;
			var vector = segment.point - nextSegment.point;
			vector.length = length;
			nextSegment.point = segment.point - vector;
		}
		path.smooth({
			type: 'continuous'
		});
	}
} */