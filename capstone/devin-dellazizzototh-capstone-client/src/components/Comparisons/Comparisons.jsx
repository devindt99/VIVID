import React from 'react';
import './Comparisons.scss';
import positiveImage from '../../assets/icons/up_chevron.png';
import negativeImage from '../../assets/icons/down_chevron.png';

function Comparisons() {
  
  const exampleItems = [
    { id: 1, name: 'Happiness', percentageChange: 25 },
    { id: 2, name: 'Productivity', percentageChange: -15 },
    { id: 3, name: 'Energy', percentageChange: 10 },
    { id: 4, name: 'Pizza', percentageChange: 5 },
    { id: 5, name: 'Running', percentageChange: -20 },
  ];

  return (
    <div className='feeling-duration-change'>
      <h2>Selected Changes</h2>
      {exampleItems.map((item) => (
        <div key={item.id} className='feeling-duration-change__output'>
          <img src={item.percentageChange < 0 ? negativeImage : positiveImage} alt="Change Indicator" />
          <p>{item.name}: Change this month: {item.percentageChange}%</p>
        </div>
      ))}
    </div>
  );
}

export default Comparisons;
