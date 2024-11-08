import React, { useState } from 'react';

function SquareCalculator() {
    const [number, setNumber] = useState(0);

    const squaredNumber = (() => {
        console.log('Calculating square...');
        return number * number;
    })();
    
    return (
        <div>
            <h1>Square Calculator</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <p>Square of {number} is {squaredNumber}</p>
        </div>
    );
}

export default SquareCalculator;
