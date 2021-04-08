import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = () => {
  return(
    <div id="toy-collection">
    <ToyCard/>
      {/* ToyCard this.props.toys
      map through the data and display the toy name and image*/}
    </div>
  );
}

export default ToyContainer;
