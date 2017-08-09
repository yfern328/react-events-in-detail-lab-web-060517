import React from 'react';

class CoordinatesButton extends React.Component {

  clicky = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div className="coordinates-button">
        <button onClick={this.clicky}>Coordinates Button</button>
      </div>
    );
  }
};

export default CoordinatesButton;
