import Counter from '../Store/Counter';
import { useState } from 'react';

function Output() {
    const [num, setNum] = useState(0);
    Counter.subscribe(() => {
        const newState = Counter.getState();
        setNum(newState.value);
    });


    return (
      <div>
          <h2>{num}</h2>
    
      </div>
    );
  }
  
  export default Output;