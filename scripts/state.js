import Baobab from 'baobab';

module.exports = new Baobab({
	session: {
		board: {
			size: {
				width: 60000,
				height: 10000
			}
		},
		viewPort: {
			size: {
				width: 15000,
				height: 10000
			}
		},
		stage: {
			size : {
				width: 0,
				height: 0
			},
			position: {
				x: 0,
				y: 0
			},
			scale: 1
		}
	}
});
