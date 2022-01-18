// import React, { Component } from "react";
import React from "react";

const PersonCard = (props) => {
  // class PersonCard extends Component {
  //   increaseAge = () => {
  //     const count = this.state.personAge + 1;
  //     this.setState({ personAge: count });
  //   };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       personAge: this.age,
  //     };
  //   }

  const { firstName, lastName, hairColor, age } = props;
  return (
    <div>
      <h1>
        {lastName},{firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      {/* <button onClick={this.increaseAge}>
          Birthday button for {lastName}, {firstName}
        </button> */}
    </div>
  );
};

export default PersonCard;
