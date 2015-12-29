export default {
	clear: function (context, options) {
		context.clearRect(0, 0, options.boardSize.width, options.boardSize.height);
	},
	cloneCanvas: function (context) {
	  var canvas = document.createElement('canvas');

	  canvas.width = context.canvas.width;
	  canvas.height = context.canvas.height;

	  return canvas.getContext('2d');
	},
	toStageDisplay: function (context, options) {
		context.translate(options.stageSize.width / 2, options.stageSize.height / 2); // to the canvas center
		context.scale(options.scale, options.scale);
		context.translate(-options.viewPortSize.width / 2 - options.leftPosition, -options.viewPortSize.height / 2); // going to board 0,0 point
	},
	paintMessage:function (context) {
		context.lineWidth = 30;
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(15000, 10000);
		context.lineTo(30000, 0);
		context.lineTo(45000, 10000);
		context.lineTo(60000, 0);
		context.stroke();
	},
	addFrame: function (context, options) {
		context.beginPath();
		context.rect(0, 0, options.boardSize.width, options.boardSize.height);
		context.fillStyle = 'white';
		context.fill();
		context.lineWidth = 30;
		context.strokeStyle = 'black';
		context.stroke();
	}
}