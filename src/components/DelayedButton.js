import React from 'react';

class DelayedButton extends React.Component {

  clicker = (event) => {
    event.persist()
    setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay);
  }

  render(){
    return(
      <div className="delayed-button">
        <button onClick={this.clicker}>Delayed Button</button>
      </div>
    );
  }
};

export default DelayedButton;
