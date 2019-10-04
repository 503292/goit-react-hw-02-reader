import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

import css from './Reader.module.css';

class Reader extends Component {
  state = {};

  render() {
    console.log(this.props);

    return (
      <div className={css.reader}>
        <Controls />
        <Counter />
        <Publication />
      </div>
    );
  }
}

export default Reader;
