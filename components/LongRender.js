import React, { Component } from 'react';

class LongRender extends Component {
  render() {
    return (
      <div>
        {Array.apply(null, Array(100000)).map(item => (
          <p>item</p>
        ))}
      </div>
    );
  }
}

export default LongRender;
