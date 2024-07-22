import React from 'react';
import './TestBox.css';

const TestBox = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="box-container">
            <div className="box box1">
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="box box2">
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="box box3">
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TestBox;