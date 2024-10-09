import React, { useState, useEffect } from 'react';
import './FeelingsModal.scss';

function FeelingModal({ isOpen, onClose, onSubmit, initialFeeling }) {
  // Adjusted to manage both name and description
  const [feelingData, setFeelingData] = useState({ name: '', description: '' });

  useEffect(() => {
    // Updating to set both name and description
    if (initialFeeling) {
      setFeelingData({
        name: initialFeeling.name || '',
        description: initialFeeling.description || '',
      });
    } else {
      setFeelingData({ name: '', description: '' }); // Reset for new feeling
    }
  }, [initialFeeling]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feelingData);
    onClose();
  };

  // Handle change for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeelingData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Feeling Name:
            <input
              type="text"
              name="name" // Added name attribute for identifying the input
              value={feelingData.name}
              onChange={handleChange}
              required
            />
          </label><br></br>
          <label>
            Description:
            <textarea
              name="description" // Added name attribute for identifying the textarea
              value={feelingData.description}
              onChange={handleChange}
              required
            />
          </label><br></br>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default FeelingModal;
