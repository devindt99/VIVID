import React, { useState, useEffect } from 'react';

function FeelingsLogsModal({ isOpen, onClose, onSubmit, initialLog }) {
  const [logData, setLogData] = useState({
    feeling_name: '',
    intensity: '',
    duration: '',
  });

  useEffect(() => {
    // If there's an initialLog, prefill the form with its data
    if (initialLog) {
      setLogData({
        feeling_name: initialLog.feeling_name || '',
        intensity: initialLog.intensity || '',
        duration: initialLog.duration || '',
      });
    } else {
      setLogData({
        feeling_name: '',
        intensity: '',
        duration: '',
      });
    }
  }, [initialLog, isOpen]); // Reinitialize when initialLog changes or modal reopens

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(logData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>{initialLog ? 'Edit Log' : 'Add New Log'}</h2>
          <label>
            Feeling Name:
            <input
              type="text"
              name="feeling_name"
              value={logData.feeling_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Intensity (1-10):
            <input
              type="number"
              name="intensity"
              value={logData.intensity}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </label>
          <label>
            Duration (minutes):
            <input
              type="number"
              name="duration"
              value={logData.duration}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default FeelingsLogsModal;
