import React, { PureComponent } from "react";
import "./Rating.css";

import { connect } from "react-redux";

class Rating extends PureComponent {
  mkStars = stars => {
    const starData = [];
    for (let i = 1; i <= 5; i++) {
      starData.push({ id: i, active: i <= stars });
    }
    return starData;
  };

  render() {
    const starData = this.mkStars(this.props.stars);
    return (
      <div>
        {starData.map(star => (
          <span
            className={star.active ? "active-star" : "inactive-star"}
            onClick={() => this.props.onStarsChange(star.id)}
            key={star.id.toString()}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stars: state };
}

function mapDispatchToProps(dispatch) {
  return {
    onStarsChange: val => dispatch({ type: "SET", newVal: val })
  };
}

const ConnectedRating = connect(mapStateToProps, mapDispatchToProps)(Rating);
export default ConnectedRating;
