// FeelingsManager.jsx
import React, { useState, useEffect } from 'react';
import FeelingsModal from '../FeelingsModal/FeelingsModal'; // Adjust the import path as necessary
import './FeelingsManager.scss';

function FeelingsManager() {
  const [feelings, setFeelings] = useState([]);
  const [selectedFeelingName, setSelectedFeelingName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFeeling, setCurrentFeeling] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchFeelings();
  }, []);

  const fetchFeelings = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/feelings');
      const data = await response.json();
      setFeelings(data);
    } catch (error) {
      console.error('Error loading feelings:', error);
    }
  };

  const handleNewFeeling = () => {
    setCurrentFeeling({ name: '', description: '' }); // Reset for new entry
    setIsModalOpen(true);
  };

  const handleEditFeeling = () => {
    const feelingToEdit = feelings.find(feeling => feeling.name === selectedFeelingName);
    setCurrentFeeling(feelingToEdit); // Set this feeling as the current one to edit
    setIsModalOpen(true);
  };

  const handleDeleteFeeling = async () => {
    const encodedName = encodeURIComponent(selectedFeelingName);
    await fetch(`http://localhost:8080/api/feelings/${encodedName}`, {
      method: 'DELETE',
    });
    fetchFeelings(); // Refresh the feelings list after deletion
  };

  const handleModalSubmit = async (feeling) => {
    const isNewFeeling = !feelings.some(f => f.name === feeling.name);
    const method = isNewFeeling ? 'POST' : 'PUT';
    const encodedName = encodeURIComponent(feeling.name);
    const url = isNewFeeling ? `http://localhost:8080/api/feelings` : `http://localhost:8080/api/feelings/${encodedName}`;

    try {
      await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: feeling.name, description: feeling.description }), // Now passing description as well
      });
      fetchFeelings(); // Refresh the list to show the latest feelings
    } catch (error) {
      console.error('Error submitting feeling:', error);
    }

    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="feelings-container">
      <button onClick={handleNewFeeling}>+</button>
      <select value={selectedFeelingName} onChange={(e) => setSelectedFeelingName(e.target.value)}>
        <option value="">Select a Feeling</option>
        {feelings.map(feeling => (
          <option key={feeling.name} value={feeling.name}>{feeling.name}</option>
        ))}
      </select>
      <button onClick={handleEditFeeling} disabled={!selectedFeelingName}>Edit</button>
      <button onClick={handleDeleteFeeling} disabled={!selectedFeelingName}>Delete</button>
      {isModalOpen && (
        <FeelingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          initialFeeling={currentFeeling}
        />
      )}
    </div>
  );
}

export default FeelingsManager;
