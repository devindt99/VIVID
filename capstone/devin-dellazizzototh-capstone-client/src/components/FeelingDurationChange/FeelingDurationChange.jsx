import React, { useState, useEffect } from 'react';

function FeelingDurationChange() {
  const [feelings, setFeelings] = useState([]);
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [percentageChange, setPercentageChange] = useState(null);

  useEffect(() => {
    // Fetch and set feelings for dropdown
    fetchFeelings();
  }, []);

  const fetchFeelings = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/feelings');
      const data = await response.json();
      setFeelings(data);
    } catch (error) {
      console.error('Error fetching feelings:', error);
    }
  };

  const calculateChange = async () => {
    try {
      const last30DaysResponse = await fetch(`http://localhost:8080/api/feelings/${selectedFeeling}/logs/this_month`);
      const last30DaysData = await last30DaysResponse.json();

      const prev30DaysResponse = await fetch(`http://localhost:8080/api/feelings/${selectedFeeling}/logs/last_month`);
      const prev30DaysData = await prev30DaysResponse.json();

      const last30DaysSum = last30DaysData.total_duration || 0;
      const prev30DaysSum = prev30DaysData.total_duration || 0;

      // Calculate percentage change
      const change = prev30DaysSum === 0 ? 0 : ((last30DaysSum - prev30DaysSum) / prev30DaysSum) * 100;

      setPercentageChange(isNaN(change) ? "No data for comparison." : `${change.toFixed(2)}%`);
    } catch (error) {
      console.error('Error calculating change:', error);
      setPercentageChange("Error fetching data.");
    }
  };

  useEffect(() => {
    if (selectedFeeling) {
      calculateChange();
    }
  }, [selectedFeeling]);

  return (
    <div>
      <h2>Changes since last month</h2>
      <select value={selectedFeeling} onChange={(e) => setSelectedFeeling(e.target.value)}>
        <option value="">Select a Feeling</option>
        {feelings.map((feeling) => (
          <option key={feeling.id} value={feeling.name}>{feeling.name}</option>
        ))}
      </select>
      {percentageChange !== null && (
        <div>
          <h3>Change this month: {percentageChange}</h3>
        </div>
      )}
    </div>
  );
}

export default FeelingDurationChange;
