import React from 'react';
import {branch} from 'baobab-react/mixins';
import Canvas from './Canvas';

export default React.createClass({
  mixins: [branch],
  render() {
    return <Canvas />
  }
});
