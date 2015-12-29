import React from 'react';
import App from './App';
import {root} from 'baobab-react/mixins';

export default React.createClass({
  mixins: [root],
  render() {
    return <App />;
  }
});
