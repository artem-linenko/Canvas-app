import React from "react";
import ReactDOM from "react-dom";
import {branch} from "baobab-react/mixins";
import painter from "./../painter";
import actions from "./../actions";

export default React.createClass({
  mixins: [branch],
  cursors: {
    boardSize: ['session', 'board', 'canvas', 'size'],
    viewportSize: ['session', 'board', 'viewport'],
    stage: ['stage']
  },
  getInitialState() {
  	return {
  		mouseDown: false,
  		startDragPosition: {
  			x: 0,
  			y: 0
  		}
  	}
  },
  componentWillMount() {
  	// set canvas width and height
  	let container = this.getDOMNode().parent(),
  		stageSize = {
  		height: container.height,
  		width: container.width
  	},
  		scale = stageSize.width / this.state.viewportSize.width

  	actions.setStageSize(stageSize);
  	actions.setScale(scale);
  },
  componentDidMount() {
    this.paint();
  },
  componentDidUpdate() {
    this.paint();
  },
  getOptions() {
    return {
      boardHeight: this.state.boardSize.height,
      boardWidth: this.state.boardSize.width,
      stageHeight: this.state.stage.size.height,
      stageWidth: this.state.stage.size.width,
      stageScale: this.state.stage.scale,
      stagePosition: this.state.stage.position
    };
  },
  paint() {
  	let onscreenContext = this.getDOMNode().getContext('2d'),
			context = painter.cloneCanvas(onScreenContext),
			options = this.getOptions();

		painter.clear(onScreenContext, options);

		context.save();
		painter.toStageDisplay(context, options);
		context.save();

		painter.addFrame(context, options);

		context.restore();
		painter.paintMessage(context);
		onScreenContext.drawImage(context.canvas, 0, 0, context.canvas.width, context.canvas.height);
  },
  handleOnMousedown() {
  	this.setState({
  		mouseDown: true,
  		startDragPosition: {
				top: e.clientY,
				left: e.clientX
			}
  	});
  },
  handleMouseMove() {
  	if (this.state.mousedown) {
	  	let position = {
				y: e.clientY - startDragPosition.top,
				x: e.clientX - startDragPosition.left
			};

			actions.setStagePosition(position)

	  	this.setState({
	  		startDragPosition: {
					top: e.clientY,
					left: e.clientX
				}
	  	});
  	}
  },
  handleOnMouseup() {
  	this.setState({mouseDown: true});
  },
  render() {
    let {stageWidth, stageHeight} = this.getOptions();

  	return (<canvas 
  		onMouseDown={this.handleOnMousedown} 
  		onMouseMove={this.handleOnMousemove}
  		onMouseup={this.handleOnMouseup}

  		width={stageWidth} height={stageHeight} />
    );
  }
});