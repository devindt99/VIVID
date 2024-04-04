import React from 'react';
import FeelingsManager from '../../components/FeelingsManager/FeelingsManager'; // Adjust the import path as necessary
import FeelingLogsManager from '../../components/FeelingsLogsManager/FeelingsLogsManager'; // Adjust the import path as necessary

function FeelingsManagerPage() {
  return (
    <div>
      <h1>Feelings</h1>
      <FeelingsManager />
      <h1>Feelings Logs</h1>
      <FeelingLogsManager />
    </div>
  );
}

export default FeelingsManagerPage;
