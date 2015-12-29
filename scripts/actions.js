import state from './state';

var sessionCursor = state.select('session'),
	boardCursor = state.select('session', 'board'),
	stageSizeCursor = state.select('session', 'stage', 'size'),
	stagePositionCursor = state.select('session', 'stage', 'position'),
	scaleCursor = state.select('session', 'stage', 'scale')

export default {
	setScale(scale) {
		scaleCursor.set(scale)
	},
	setStageSize(stageSize) {
		stageSizeCursor.set(stageSize)
	},
	setStagePosition(pos) {
		let offsetX = pos.x / scaleCursor.get();

		if (offsetX < 0) {
			offsetX = 0;
		} else if (offsetX > boardSize.width - viewPortSize.width) {
			offsetX = boardSize.width - viewPortSize.width;
		}

		stagePositionCursor.set('x', stagePositionCursor.get() + offsetX);
	}
}