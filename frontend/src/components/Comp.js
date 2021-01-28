import React from "react";
import "./comp.css";

export default class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      timer: props.timer,
      numberOfTickets: props.numberOfTickets,
      price: props.price,
      image: props.image,
      topComp: props.topComp,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>Timer: {this.state.timer}</p>
        <p>Number of Tickets {this.state.numberOfTickets}</p>
        <p>Price {this.state.price}</p>
        <img src={this.state.image} className="image"></img>
      </div>
    );
  }
}
