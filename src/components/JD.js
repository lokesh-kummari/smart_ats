import React, { useState } from 'react';

const JobDescriptionInput = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="jobDescription">Paste the Job Description:</label>
      <textarea
        id="jobDescription"
        className="form-control"
        rows="5"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default JobDescriptionInput;
