import React, { useState, useEffect } from 'react';
import FeelingsLogsModal from '../FeelingsLogsModal/FeelingsLogsModal'; // Adjust based on your file structure
import './FeelingsLogsManager.scss';
function FeelingLogsManager() {
  const [logs, setLogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLog, setCurrentLog] = useState(null); // null for new log, or log object for edit

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/feelings/logs');
      const data = await response.json();
      console.log("Fetched logs:", data); // Add this line to log fetched data
      setLogs(data);
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };
  

  const handleLogSubmit = async (logData) => {
    console.log(logData);
    const method = logData.id ? 'PUT' : 'POST';
    const url = logData.id
      ? `http://localhost:8080/api/feelings/logs/${logData.id}`
      : 'http://localhost:8080/api/feelings/logs';
    try {
      await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logData),
      });
      fetchLogs(); // Refresh the logs list
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting log:', error);
    }
  };

  const handleDeleteLog = async (logId) => {
    console.log("Attempting to delete log with ID:", logId); // Debugging line
    if (!logId) {
      console.error("Log ID is undefined.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/api/feelings/logs/${logId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the log.');
      }
      fetchLogs(); // Refresh the logs list upon successful deletion
    } catch (error) {
      console.error('Error deleting log:', error);
    }
  };
  

  const openModalForEdit = (log) => {
    setCurrentLog(log);
    setIsModalOpen(true);
  };

  return (
    <div>
      <button className="feeling-logs-manager__add-btn"onClick={() => setIsModalOpen(true)}>Add New Log</button>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.feeling_name} Level: {log.intensity}<br></br> {log.duration} min.
            <button onClick={() => openModalForEdit(log)}>Edit</button>
            <button onClick={() => handleDeleteLog(log.feelings_logs_id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <FeelingsLogsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleLogSubmit}
          initialLog={currentLog}
        />
      )}
    </div>
  );
}

export default FeelingLogsManager;
