import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = () => {
  return(
    <div id="toy-collection">
    <ToyCard/>
      {/* Render the collection of ToyCards */}
    </div>
  );
}

export default ToyContainer;
