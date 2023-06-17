import React, { useState } from 'react';
import './Task1.css';

const Task1 = () => {
  const [circles, setCircles] = useState([{ counter: 0, color: 'yellow' }]);

  const changeCircleColor = (index) => {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      const randomColor = getRandomColor();
      newCircles[index].counter =   newCircles[index].counter+ 0.5;
      newCircles[index].color = randomColor;
      return newCircles;
    });
  };

  const duplicateCircle = () => {
    if (circles.length >= 10) {
      return;
    }
    const duplicatedCircle = { counter: 0, color: 'yellow' };
    setCircles((prevCircles) => [...prevCircles, duplicatedCircle]);
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const firstRow = circles.slice(0, 5);
  const secondRow = circles.slice(5);

  return (
    <div className="circle-container">
      <div className="row">
        {firstRow.map((circle, index) => (
          <div className="circle" style={{ backgroundColor: circle.color }} key={index}>
            <span className="counter">{circle.counter}</span>
          </div>
        ))}
      </div>
      <div className="row">
        {firstRow.map((circle, index) => (
          <div className="circle" key={index}>
            <div className="button-container">
              <button onClick={() => changeCircleColor(index)}>Button 1</button>
            </div>
            <div className="color-label">Current Color: {circle.color}</div>
          </div>
        ))}
      </div>
      <div className="row">
        {secondRow.map((circle, index) => (
          <div className="circle" style={{ backgroundColor: circle.color }} key={index + 5}>
            <span className="counter">{circle.counter}</span>
          </div>
        ))}
      </div>
      <div className="row">
        {secondRow.map((circle, index) => (
          <div className="circle" key={index + 5}>
            <div className="button-container">
              <button onClick={() => changeCircleColor(index + 5)}>Button 1</button>
            </div>
            <div className="color-label">Current Color: {circle.color}</div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={duplicateCircle}>Button 2</button>
      </div>
    </div>
  );
};

export default Task1;
