"use strict"

var canvas = document.getElementById('canvas'),
	onScreenContext = canvas.getContext("2d"); 

var stageSize = {
	width: canvas.width,
	height: canvas.height
},
	boardSize = {
		width: 60000,
		height: 10000
	},
	viewPortSize = {
		width: 15000,
		height: 10000
	},
	padding = 10,
	leftPosition = 0,
	scale = stageSize.width / viewPortSize.width,
	options = {
		stageSize, boardSize, viewPortSize, leftPosition, scale
	};

updateCanvas();

function updateCanvas() {
	var context = painter.cloneCanvas(onScreenContext);

	painter.clear(onScreenContext, options);

	context.save();
	painter.toStageDisplay(context, options);
	context.save();

	painter.addFrame(context, options);

	context.restore();
	painter.paintMessage(context);
	onScreenContext.drawImage(context.canvas, 0, 0, context.canvas.width, context.canvas.height);
}

canvas.addEventListener('mousedown', startDrag, false);

function startDrag(e) {

	var initialPointPosition = {
		top: e.clientY,
		left: e.clientX
	};

	canvas.addEventListener('mousemove', moveDrag, false);
  function moveDrag(e) {
  	var diff = {
			top: e.clientY - initialPointPosition.top,
			left: e.clientX - initialPointPosition.left
		};

		leftPosition -= diff.left / scale;
		if (leftPosition < 0) {
			leftPosition = 0;
		} else if (leftPosition > boardSize.width - viewPortSize.width) {
			leftPosition = boardSize.width - viewPortSize.width;
		}
		options.leftPosition = leftPosition;

		updateCanvas();

		initialPointPosition = {
			top: e.clientY,
			left: e.clientX
		};
	};

	document.addEventListener('mouseup', finishDrag, false);

	function finishDrag(e) {
		canvas.removeEventListener('mousemove', moveDrag, false)
	}
}