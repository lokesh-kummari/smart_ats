import React from 'react';

const ResultsDisplay = ({ results }) => {
  if (!results) return null;

  return (
    <div className="results">
      <h3>ATS Evaluation Results</h3>
      <p><strong>JD Match:</strong> {results.jdMatch || 'N/A'}</p>
      <p><strong>Missing Keywords:</strong> {results.missingKeywords.join(', ') || 'None'}</p>
      <p><strong>Profile Summary:</strong> {results.profileSummary || 'N/A'}</p>
    </div>
  );
};

export default ResultsDisplay;
